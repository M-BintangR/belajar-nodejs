const buffer = Buffer.from("Bintang");

console.info(buffer.toString("base64"));
console.info(buffer.toString("hex"));

const bufferBase64 = Buffer.from("QmludGFuZw==", "base64");

console.info(bufferBase64.toString("utf8"));