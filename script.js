//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log(`The ${this._species} makes a sound`)
	}
}

class Dog extends Animal {
	constructor(){
		super(species)
	}
	bark(){
		console.log(`The ${this._species} barks.`)
	}
}

class Cat extends Animal {
	constructor(){
		super(species)
	}
	purr(){
		console.log(`The ${this._species} purrs.`)
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
