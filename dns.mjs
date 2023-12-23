import dns from "dns";

const {address, family} = await  dns.lookup("www.programmerzamannow.com");

console.info(address);
console.info(family);