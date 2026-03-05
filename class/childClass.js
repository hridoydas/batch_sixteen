import { Parent } from "./parentClass.js";

const parentObj = new Parent();

export class Child {
  calculation(a, b) {
    const result = a * b;
    return result;
  }

  equation() {
    parentObj.sum();
  }
}

const childObj = new Child();
console.log(childObj.equation());
