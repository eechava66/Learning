class Animal{
    private code : string;
    protected dna : string;
    public name: string

    constructor(code: string, dna: string, name: string){
        this.code = code
        this.dna = dna
        this.name = name
    }

    protected makeSound(){
        console.log('making sound')
    }
}

const tiger = new Animal('private', 'ABC', 'Tiger')

//console.log(tiger.code) error private
//console.log(tiger.dna) error protected
console.log(tiger.name)

class Tiger extends Animal{

    constructor(){
        super('test', 'dna', 'Tiger')    
    }

    public bark(){
        console.log('rawn')
        this.makeSound()
    }
}

const newTiger = new Tiger()

newTiger.bark()