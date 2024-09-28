class Parent {
    constructor() {
        this.value = 1;
    }

    increase() {
        this.value++;
    }
}

class Child extends Parent {
    increase() {
        this.value += 2;
    }
}

let obj = new Child();
obj.increase();
console.log(obj.value);