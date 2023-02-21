import fs from "fs";

export const ClearFileAPI = async (params, res, next) => {
  try {
    const path = "./controllers/doc/api/";
    let regex = /Checklist Promote/;
    fs.readdirSync(path)
      .filter((f) => regex.test(f))
      .map((f) => fs.unlinkSync(path + f));
    res.status(201).json({ message: "File Deleted" });
    next();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could Not Delete The File", error: error.message });
  }
};

export const ClearFileMid = async (params, res, next) => {
  const path = "./controllers/doc/middleware/";
  let regex = /Checklist Promote/;
  fs.readdirSync(path)
    .filter((f) => regex.test(f))
    .map((f) => fs.unlinkSync(path + f));

  next();
};

export const ClearFileiLoan = async (params, res, next) => {
  const path = "./controllers/doc/iloanconsumer/";
  let regex = /Checklist Promote/;
  fs.readdirSync(path)
    .filter((f) => regex.test(f))
    .map((f) => fs.unlinkSync(path + f));

  next();
};

export const ClearFileAPIService = async (params, res, next) => {
  const path = "./controllers/doc/apiservice/";
  let regex = /Checklist Promote/;
  fs.readdirSync(path)
    .filter((f) => regex.test(f))
    .map((f) => fs.unlinkSync(path + f));

  next();
};
