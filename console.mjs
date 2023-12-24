import { Console } from "console";
import fs from "fs";

const logFile = fs.createWriteStream("application.log");

const log = new Console({
    stdout: logFile,
    stderr: logFile,
});

const person = {
    firstname: "Muhammad",
    lastname: "Bintang",
};

log.info("hello world");
log.error("Ups!");
log.table(person);