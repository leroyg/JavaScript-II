///Example of closure -
const counter = () => {
    let count = 0;
    return function(){
        count = count +1;
        return count;
    }
};

const newCounter = counter();
console.log(newCounter);
console.log(newCounter());