let myCalculate: () => void;
let myCalculate2: (name: string) => void;
let myCalculate3: (name: string, age: number) => void;
let myCalculate4: (name: string, age: number) => string;

myCalculate = () => {
  console.log('first')
};

// singnature
myCalculate2 = (name: string) => {
  console.log(`${name} first`)
};

myCalculate3 = (name: string, age: number) => {
  console.log(`${name} and ${age} years`);
};

myCalculate4 = (name: string, age: number) => {
  return `${name} and ${age} years`;
};

myCalculate();
myCalculate2('aks');
myCalculate3('AbuKawSar', 22);
console.log(myCalculate4('AbuKawSar', 23));