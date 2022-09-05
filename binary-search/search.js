function linearSearch(id, array) {
  for (let person of array) {
    if (person.id === id) {
      return person;
    }
  }
}

function binarySearch(id, array) {
  let min = 0;
  let max = array.length - 1;
  let middle;

  while (min <= max) {
    middle = Math.floor((min + max) / 2);
    if (id < array[middle].id) {
      max = middle - 1;
    } else if (id > array[middle].id) {
      min = middle + 1;
    } else {
      return array[middle];
    }
  }

  return void 0;
}

const unsorted = [
  { id: 1, name: 'Sam' },
  { id: 11, name: 'Sarah' },
  { id: 21, name: 'John' },
  { id: 10, name: 'Burke' },
  { id: 13, name: 'Simona' },
  { id: 31, name: 'Asim' },
  { id: 6, name: 'Niki' },
  { id: 19, name: 'Aysegul' },
  { id: 25, name: 'Kyle' },
  { id: 18, name: 'Jem' },
  { id: 2, name: 'Marc' },
  { id: 51, name: 'Chris' },
  { id: 5, name: 'Brian' },
  { id: 14, name: 'Ben' },
];

const sorted = [
  { id: 1, name: 'Sam' },
  { id: 3, name: 'Sarah' },
  { id: 5, name: 'John' },
  { id: 6, name: 'Burke' },
  { id: 7, name: 'Brian' },
  { id: 10, name: 'Simona' },
  { id: 12, name: 'Asim' },
  { id: 13, name: 'Niki' },
  { id: 15, name: 'Aysegul' },
  { id: 17, name: 'Kyle' },
  { id: 18, name: 'Jem' },
  { id: 19, name: 'Marc' },
  { id: 21, name: 'Chris' },
  { id: 24, name: 'Ben' },
];

// let start = performance.now();
// let result = linearSearch(person1.id, unsorted);
// let elpased = performance.now() - start;

// console.log(
//   `Result: {id: ${result.id}, name: ${result.name}}\nTime: ${elpased}`
// );

// start = performance.now();
// result = binarySearch(19, sorted);
// elpased = performance.now() - start;

// console.log(
//   `Result: {id: ${result.id}, name: ${result.name}}\nTime: ${elpased}`
// );

for (let person of sorted) {
  console.log(`Searching for id ${person.id}`);
  let result = binarySearch(person.id, sorted);
  console.log(`Result: {id: ${result.id}, name: ${result.name}}\n`);
}
