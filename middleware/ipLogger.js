import fs from "fs";
export function ipLogger(req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //   const ip = req.ip;
  //   const url = req.url;

  const { url, method } = req;
  const dataToWrite = ip + " - " + url + " - " + method;

  fs.appendFile("access.log", dataToWrite, (err) => {
    if (err) console.log("Access Log could not be written");
  });

  next();
}
