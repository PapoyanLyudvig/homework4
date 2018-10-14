2
function triangleStars(abcd) {
  let a = abcd;
  while (a > 0) {
    let row = "";
    let b = 0;
    while (b < 2 * abcd - 1) {
      if (b < abcd - a || b > abcd + a - 2) {
        row += " ";
      } else {
        row += "*";
      }
      b = b + 1;
    }
    console.log(row);
    a = a - 1;
  }
}

triangleStars(4);

3
function multiToSingle(arr, arr1) {
  let arr = [];
  let a = 0;
  while (a < arr.length) {
    arr.push(arr[a]);
    a = a + 1;
  }
  a = 0;
  while (a < arr1.length) {
    arr.push(arr1[a]);
    a = a + 1;
  }
  return arr;
}

console.log(multiToSingle([1, 2, 3], [4, 5, 6]));

4
function findMinMax(arr, arr1) {
  let minMax = arr[0];
  let a = 0;
  while (a < arr.length) {
    if (arr1) {
      if (arr[a] > minMax) {
        minMax = arr[a];
      }
    } else {
      if (arr[a] < minMax) {
        minMax = arr[a];
      }
    }
    a = a + 1;
  }
  return minMax;
}

console.log("max", findMinMax([4, 2, 66, -44, 8], true));
console.log("min", findMinMax([4, 2, 66, -44, 8], false));

5
function forEach(arr, arr1) {
  let a = 0;
  while (a < arr.length) {
    func(arr[a]);
    a = a + 1;
  }
}

forEach([4, 3, 2], function(abc) {
  console.log(abc);
});

6
function sum(arr) {
  let sum = 0;
  let a = 0;
  while (a < arr.length) {
    sum += arr[a];
    a = a + 1;
  }
  return sum;
}

console.log(sum([4, 3, 2]));

7
function reverse(str) {
  let rev = "";
  let a = str.length - 1;
  while (a >= 0) {
    rev += str[a];
    a = a - 1;
  }
  return rev;
}

console.log(reverse("iboneK lareneG, erehT olleH"));

8
function checkerboard(abcd) {
  let a = 1;
  while (a <= abcd) {
    let b = 1;
    let row = "";
    while (b <= abcd * 2) {
      if (a % 2 === b % 2) {
        row += "*";
      }else {
        row += " ";
      }
      b = b + 1;
    }
    console.log(row);
    a = a + 1;
  }
}

checkerboard(5);