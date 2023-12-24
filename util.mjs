import util from "util";

console.info(util.format("Nama : %s", "Bintang"));

const person = {firstname: "Muhammad", lastname: "Bintang"};
console.info(util.format("Person : %j", person));