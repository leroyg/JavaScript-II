funtion sayHello(name) {
    console.log(`Hello, ${name}`);
}

function callSayHelloWithLars(callback) {
    const innerName = `Lars`;
    callback(innerName);
}

callSayHelloWithLars(sayHello);

/// Example 2 from video https://www.youtube.com/watch?v=zIRN-Gn8phU#action=share

const elemants = [`earth`, `wind`, `fire`, `water`];
const wrestlingGear = [`shoes`, `headgear`, `mouthpiece`, `singlet`];

const newForEach = (list, callBack) => {
    for(let i=0; i < list.length; i++) {
        callback(list[i], i);
    }
};

const iterator =  function(item, index){
    console.log(item, index);
}

newForEach(elements, iterator); //example of passing around a function

newForEach(wrestlingGear,  function(item, index){
    console.log(item, index);
}); /// example of passing around 1 function but we still have the item/index function being fully written out over again instead the above exmaple with just passing the function via it's name.

function showFirst(array, callback){
    callback(array[0]);
}

function showLength(list, cb) {
    cb(list.length);
}

showFirst(elements, (firstItem) => {
    console.log(firstItem);
});

showLength(elements, (lengthOfList) => {
    console.log(lengthOfList);
});


//