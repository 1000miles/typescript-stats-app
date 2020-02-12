// NOTHING TO DO WITH GENERICS
const addOne = (a: number): number => {
  return a + 1;
}

const addTwo = (a: number): number => {
  return a + 2;
}

const addThree = (a: number): number => {
  return a + 3;
}

// BETTER CODE: Reusable
const add = (a: number, b: number): number => {
  return a + b;
}

add(10, 1);
add(10, 2);
add(10, 3);

// WAY 1
class HoldNumber {
  constructor(data: any) {
    this.data = data
  }
  
  data: number;
}

class HoldString {
  constructor(data: any) {
    this.data = data
  }

  data: string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = 'addsfgg';

// WAY2: GENERICS
class HoldAnything<TypeOfData> {
  constructor(data: any) {
    this.data = data
  }

  data: TypeOfData;
}
// T = Reference to generic Type
class HoldAnything2<T> {
  constructor(data: any) {
    this.data = data
  }

  data: T
}

const holdNumber1 = new HoldAnything<number>();
holdNumber1.data = 123;

const holdString1 = new HoldAnything<string>();
holdString1.data = 'sfgddgdg';
