import fs from "fs";
export function ipLogger(req, res, next) {
  //   const ip = req.ip;
  //   const url = req.url;

  const { ip, url, method } = req;
  const dataToWrite = ip + " - " + url + " - " + method;

  fs.appendFile("access.log", dataToWrite, (err) => {
    if (err) console.log("Access Log could not be written");
  });

  next();
}
