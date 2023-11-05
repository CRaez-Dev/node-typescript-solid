/*
	Now we will apply the OCP to solve thes last problem.
	As we can see, after apply polymorphism to sayHello function
	we are ready to create new animals that implement Animals class
	without compromise the integrity of the sayHello function.
 */

export interface Animal {
	emitSound(): void
}

export class Dog implements Animal {
	emitSound(): void {
		console.log('🚀 Bark! ')
	}
}

export class Cat implements Animal {
	emitSound(): void {
		console.log('🚀 Meowww! ')
	}
}

export class Duck implements Animal {
	emitSound(): void {
		console.log('🚀 Cuack! ')
	}
}
const sayHello = (animal: Animal) => animal.emitSound()

const dug = new Dog()
const silvestre = new Cat()
const donald = new Duck()

sayHello(dug)
sayHello(silvestre)
sayHello(donald)

