"use strict";
// ========================= Polymorphism =======================
// 1.Method overload
// 2.Method override
// ==> Method overload <==
class LCD {
    Display(input) {
        if (input == "USB") {
            console.log("Display USB data.");
        }
        else if (input == "CABLE") {
            console.log("Display channels.");
        }
        else if (input == "HDMI") {
            console.log("Playing games.");
        }
    }
}
let I = new LCD();
I.Display("USB");
I.Display("CABLE");
// ==> Method overriding <==
class Electronics {
    turnOn() {
        console.log("Device turn on.");
    }
}
class microwave extends Electronics {
    turnOn() {
        console.log("Microwave turn on");
    }
}
let a = new Electronics();
a.turnOn();
let b = new microwave();
b.turnOn();
// ===> Second Example <===
class Animal {
    constructor(Name, Color, Age) {
        this.name = Name;
        this.color = Color;
        this.age = Age;
    }
    MakeNoice() {
        console.log("Animal can make noice.");
    }
}
class Dog extends Animal {
    constructor(name, color, age) {
        super(name, color, age);
    }
    MakeNoice() {
        console.log(`${this.name} is barking`);
    }
}
class Cat extends Animal {
    constructor(name, color, age) {
        super(name, color, age);
    }
    MakeNoice() {
        console.log(`${this.name} is meowing`);
    }
}
let A = new Animal("Dog", "White", 4);
A.MakeNoice();
let d = new Dog("Dog", "black", 4);
d.MakeNoice();
let c = new Cat("Cat", "White", 2);
c.MakeNoice();
