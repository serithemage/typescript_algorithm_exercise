
function printStar(a: number): string {

  for (let i = 0; i < a; ++i) {
    process.stdout.write("*")
  }

  return ""
}

printStar(3)

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

for (const element of array1) {
  console.log(element)
}

enum Color { Red, Green, Blue }

let c1: Color = Color.Green

console.log(c1)