const hobbieList = ['Sports', 'cooking'];

const copiedArray = hobbieList.slice();

const copiedArray2 = [...hobbieList];

console.log(copiedArray2);

const toArr = (...arg) => {
    return arg;
}

console.log(toArr(1, 2, 3, 4, 5));