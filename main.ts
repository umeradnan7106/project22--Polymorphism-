// ========================= Polymorphism =======================

// 1.Method overload
// 2.Method override

// ==> Method overload <==

class LCD {
    Display(input:"HDMI"):void
    Display(input:"CABLE"):void
    Display(input:"USB"):void
    Display(input:any){
            if(input == "USB"){
                console.log("Display USB data.")
            }
            else if(input == "CABLE"){
                console.log("Display channels.")
            }
            else if(input == "HDMI"){
                console.log("Playing games.")
            }
        }
    }
    
let I = new LCD()
I.Display("USB")
I.Display("CABLE")



// ==> Method overriding <==

class Electronics{
        turnOn(){
            console.log("Device turn on.")
        }
    }

    class microwave extends Electronics{
        turnOn() {
            console.log("Microwave turn on")
        }
    }

let a = new Electronics()
a.turnOn()

let b = new microwave()
b.turnOn()


// ===> Second Example <===

class Animal{
    name: string
    color: string
    age: number 

    constructor(Name:string , Color : string, Age : number){
        this.name = Name
        this.color = Color
        this.age = Age
    }
    MakeNoice(){
        console.log("Animal can make noice.")
    }
}

class Dog extends Animal{
    constructor(name: string, color: string, age: number){
     super(name, color, age)   
    }

    MakeNoice(): void {
        console.log(`${this.name} is barking`)
    }
}

class Cat extends Animal{
    constructor(name: string, color: string, age: number){
     super(name, color, age)   
    }

    MakeNoice(): void {
        console.log(`${this.name} is meowing`)
    }
}

let A = new Animal("Dog", "White", 4 )
A.MakeNoice()

let d:Dog = new Dog("Dog", "black", 4 )
d.MakeNoice()

let c:Cat = new Cat("Cat", "White", 2 )
c.MakeNoice()


