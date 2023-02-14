const car = {
    names: "Fiat",
    model: 500,
    weight: "850 kg",
    color: "black",
    start: function(){
        console.log("Car has started");
    },
    drive: function(){
        console.log("Car has driven");
    },
};

console.log(car.names);
console.log(car['model']);
car.start();