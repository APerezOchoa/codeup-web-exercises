let object1 = {
    name: "Potatoes",
    quantity: 2,
    price: "$7.89"
};

let object2 = {
    name: "Sweet Potatoes",
    quantity: 4,
    price: "$Free.99"
};

function getPrice(obj){
    return obj.price;
}

console.log(getPrice(object1));
console.log(getPrice(object2));