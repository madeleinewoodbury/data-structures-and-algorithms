const list = [1, 2, 3];
const list2 = [1, [2, 3], 4];
const list3 = [1, [[2], 3], 4, 5];

function checkList(arr) {
  console.log(`Checking list: ${arr}`);
  for (let i = 0; i < arr.length; i++) {
    console.log(`${typeof arr[i]}: ${arr[i]}`);
    if (typeof arr[i] === 'object') {
      console.log(`\tChecking list: ${arr[i]}`);
      for (let j = 0; j < arr[i].length; j++) {
        console.log(`\t${typeof arr[i][j]}: ${arr[i][j]}`);
      }
    }
  }
  console.log('-------------------------');
}

checkList(list);
checkList(list2);
checkList(list3);
