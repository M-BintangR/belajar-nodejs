function samplePromise(){
    return Promise.resolve("Bintang");
}


// untuk menjalankannya biasanya menggunakan async method
async function run(){
    const name = await samplePromise();
    console.info(name);
}


run();