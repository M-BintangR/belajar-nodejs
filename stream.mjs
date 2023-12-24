import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Muhammad\n");
writer.write("Bintang\n");
writer.close();

const render = fs.createReadStream("target.log");

render.addListener("data", (data) => {
    console.info(data.toString());
    render.close();
});