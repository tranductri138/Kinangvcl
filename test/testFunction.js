function Person() {
    this.name = 'John';

    // Sử dụng arrow function và closure để truy cập this
    this.greet = () => {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const person = new Person();
person.greet(); // Output: Hello, my name is John