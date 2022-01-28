const fetchData = () => {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is Done');
    fetchData()
    .then(done => {
        console.log(done);
        return fetchData();
    })
    .then(text => {
        console.log(text);
    });
}, 3000);

console.log('Hi');
console.log('Hello');