

const add = (a, b) => {
    return a + b;
}

const asyncFunc = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved')
        }, 6000);
    })
}

module.exports = {
    add,
    asyncFunc
}