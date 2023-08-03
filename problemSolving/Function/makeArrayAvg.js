function make_avg(array, size) {
  var sum = 0;
  for (var i = 0; i < size; i++) {
    sum += array[i];
  }
  return sum / size;
}

const array = [1, 2, 3, 4, 5];
const size = array.length;
//here lenghth is 5 (0 to 4)

const average = make_avg(array, size);
console.log(average); // 3
