import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import User from "../../../models/UserModel.js";

export const DocAPI = async (req, res) => {
  // Load the docx file as binary content
  const content = fs.readFileSync(
    path.resolve(
      "./controllers/doc/api",
      "template_checklist_api_jenkins.docx"
    ),
    "binary"
  );
  const zip = new PizZip(content);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });
  // Render the document
  doc.render({
    nama_project: req.body.nama_project,
    sisi_project: req.body.sisi_project,
    project_code: req.body.project_code,
    tanggal_promote: req.body.tanggal_promote,
    new_existing: req.body.new_existing,
    changes: req.body.changes,
    unit_pengguna: req.body.unit_pengguna,
    week_request: req.body.week_request,
    week_eksekusi: req.body.week_eksekusi,
    nama_api_1: req.body.nama_api_1,
    nama_api_2: req.body.nama_api_2,
    durasi_login: req.body.durasi_login,
    durasi_api_1: req.body.durasi_api_1,
    durasi_api_2: req.body.durasi_api_2,
    durasi_build_1: req.body.durasi_build_1,
    durasi_build_2: req.body.durasi_build_2,
  });
  const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
  });

  // buf is a nodejs Buffer, you can either write it to a
  // file or res.send it with express for example.
  fs.writeFileSync(
    path.resolve(
      "./controllers/doc/api",
      `Checklist Promote ${req.body.nama_project} Sisi ${req.body.sisi_project}.docx`
    ),
    buf
  );
  // Set the headers for the response
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
  res.setHeader(
    "Content-Disposition",
    `attachment; filename= Checklist Promote ${req.body.nama_project} Sisi ${req.body.sisi_project}.docx`
  );

  // Send the file content in the response
  const filepath = path.resolve(
    `./controllers/doc/api`,
    `Checklist Promote ${req.body.nama_project} Sisi ${req.body.sisi_project}.docx`
  );

  res.download(filepath);

  const user = await User.findOne({
    where: {
      id: req.session.userId,
    },
  });
  try {
    const transporter = nodemailer.createTransport({
      secure: true,
      host: `${process.env.EMAIL_HOST}`,
      port: `${process.env.EMAIL_PORT}`,
      auth: {
        user: `${process.env.EMAIL_API}`,
        pass: `${process.env.PASSWORD_API}`,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    let message = ` <tr><td><h1>Hello ${user.name}/${user.username},</h1></td></tr>
    <tr><td><h2>This is from Bank BTN E-Report Management System</h2></td></tr>
    <h2>Here are the document ${req.body.nama_project} that you've generated</h2>`;

    transporter
      .sendMail({
        from: `${process.env.EMAIL_API}`,
        to: `${user.email}`,
        subject:
          "Generated API Checklist Promote - BTN E-Report Management System",
        html: message,
        attachments: [
          {
            filename: `Checklist Promote ${req.body.nama_project} Sisi ${req.body.sisi_project}.docx`,
            path: `./controllers/doc/api/Checklist Promote ${req.body.nama_project} Sisi ${req.body.sisi_project}.docx`,
          },
        ],
      })
      .then(console.info)
      .catch(console.error);
  } catch (error) {}
};
