import net from "net";

const connection = net.createConnection({port: 3000, host: 'localhost'});

setInterval(() => {
    connection.write("Bintang\r\n");
}, 2000);

connection.addListener("data",(data) => {
    console.info(`Receive data from server : ${data.toString()}`);
});