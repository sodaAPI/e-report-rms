import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import User from "../../../models/UserModel.js";

export const DocIloanConsumer = async (req, res) => {
  // Load the docx file as binary content
  const content = fs.readFileSync(
    path.resolve(
      "./controllers/doc/iloanconsumer",
      "template_checklist_iloan_consumer.docx"
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
    path_server_backup: req.body.path_server_backup,
    path_iloan_backup: req.body.path_iloan_backup,
    path_copy_promote: req.body.path_copy_promote,
    path_server_promote: req.body.path_server_promote,
    path_copy_tujuan: req.body.path_copy_tujuan,
    path_tujuan: req.body.path_tujuan,
    ip_db: req.body.ip_db,
    path_db_sql: req.body.path_db_sql,
    durasi_akses_server: req.body.durasi_akses_server,
    durasi_backup: req.body.durasi_backup,
    durasi_copy_server_promote: req.body.durasi_copy_server_promote,
    durasi_copy_tujuan: req.body.durasi_copy_tujuan,
    durasi_query: req.body.durasi_query,
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
      "./controllers/doc/iloanconsumer",
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
    `./controllers/doc/iloanconsumer`,
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
          "Generated Iloan Consumer Checklist Promote - BTN E-Report Management System",
        html: message,
        attachments: [
          {
            filename: `Checklist Promote ${req.body.nama_project} Sisi ${req.body.sisi_project}.docx`,
            path: `./controllers/doc/iloanconsumer/Checklist Promote ${req.body.nama_project} Sisi ${req.body.sisi_project}.docx`,
          },
        ],
      })
      .then(console.info)
      .catch(console.error);
  } catch (error) {}
};
