'use strict';

//Coding Challenge 1

/*const Car = function (brand, speed) {
    this.brand = brand,
        this.speed = speed
};


Car.prototype.accelarete = function () {
    this.speed += 10;
    console.log(this.speed)
};

Car.prototype.break = function () {
    this.speed -= 5;
    console.log(this.speed)
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelarete();
bmw.accelarete();
mercedes.break();
mercedes.break();*/

//Coding Challenge 2 


class eCar {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
accelarete() {
        this.speed += 10;
        console.log(this.speed)
    };
    
break  () {
        this.speed -= 5;
        console.log(this.speed)
    };

get speedUs() {
        return this.speed / 1.6;
    }
    set speedUs(curSpeed) {
        this.speed = curSpeed * 1.6;
    }
   
};

const ford = new eCar('Ford', 120);
ford.accelarete();
ford.break();
console.log(ford.speedUs);
ford.speedUs=150;
ford.break();

//Coding Challenge 3

/*const EV = function (brand, speed, charge) {
    Car.call(this, brand, speed);
    this.charge = charge;
};


EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery=function(chargeTo){
console.log(`Tesla charge battery is ${chargeTo}`);
};

EV.prototype.accelarete=function(){
    this.speed+=15;
    this.charge--;
    console.log(`new speed ${this.speed} and new charge${this.charge}`);
}


const tesla = new EV('Tesla', 100, 80);

console.log(tesla)
tesla.chargeBattery(90);
tesla.accelarete();
tesla.break();*/

//Coding Challenge 4

class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    accelarete() {
        this.speed += 10;
        console.log(this.speed);
        return this;
    };

    break() {
        this.speed -= 5;
        console.log(this.speed);
        return this;
    }
}


class ElectricCar extends Car {
    #charge;
    constructor(brand, speed, charge) {
        super(brand, speed);
        this.#charge = charge;
    }

    accelarete() {
        this.speed += 20;
        this.#charge--;
        console.log(`new speed ${this.speed} and new charge ${this.#charge}`);
        return this;
    };

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`Charge battery current now ${this.#charge}`)
    }
}

const rivian = new ElectricCar('Rivian', 120, 90);
const mercedes = new Car('Mercedes', 150);

console.log(rivian);
rivian.accelarete().break().break().chargeBattery(23);

console.log(mercedes);
mercedes.accelarete().accelarete().break();
