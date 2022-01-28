const candidate = {
    names: 'Mrinal',
    ages: 20,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({ ages }) => {
    console.log(ages);
}

printName(candidate);

const {names, ages} = candidate;
console.log(names, ages);