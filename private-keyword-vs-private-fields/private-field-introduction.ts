class Person {
    public constructor(private readonly name: string) { }
}

const person = new Person('Chase');
console.log(person.name); // "Chase"