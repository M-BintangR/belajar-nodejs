function samplePromise(){
    return Promise.resolve("Bintang");
}


// jika menggunakan module js secara default akan async
const name = await samplePromise();
console.info(name);