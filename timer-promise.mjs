import timers from "timers/promises";

console.log(new Date().toLocaleTimeString());
const name = await timers.setTimeout(5000, "Bintang");

console.info(name);
console.log(new Date().toLocaleTimeString());

for await (const startTime of timers.setInterval(1000, new Date())){
    console.info(startTime);
}
