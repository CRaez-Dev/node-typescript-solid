/*
	Take the next example: 
    
	We have a sayHello function, and we need to used in differents animals,
	in that line, each animal have their own way to say hello.

	As we seen a few lines above, if suddenly need add a new animal to our sayHello function
	we will have to change the way of our function works
*/

enum TypeAnimal {
	DOG = 'DOG',
	CAT = 'Cat',
	DUCK = 'Duck',
}

export interface Animal {
	type: TypeAnimal
}

export class Dog implements Animal {
	type: TypeAnimal = TypeAnimal.DOG
	// Dog's stuffs
}

export class Cat implements Animal {
	type: TypeAnimal = TypeAnimal.CAT
	// Cat's stuffs
}

export class Duck implements Animal {
	type: TypeAnimal = TypeAnimal.DUCK
	// Duck's stuffs
}


const sayHello = (animal: Animal) => {

	if (animal.type === TypeAnimal.DOG) {
		helloDog()
	}
	else if (animal.type === TypeAnimal.CAT) {
		helloCat()
	}
	else if (animal.type === TypeAnimal.DUCK) {
		helloDuck()
	}
}

const helloDog = () => {
	console.log('🚀 Bark! ')
}
const helloCat = () => {
	console.log('🚀 Meowww! ')
}
const helloDuck = () => {
	console.log('🚀 Cuack! ')
}

const dug = new Dog()
const silvestre = new Cat()
const donald = new Duck()

sayHello(dug)
sayHello(silvestre)
sayHello(donald)

