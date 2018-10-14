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


function multiToSingle(a1, a2) {
  let final = [];
  let a = 0;
  while (a < a1.length) {
    final.push(a1[a]);
    a = a + 1;
  }
  a = 0;
  while (a < a2.length) {
    final.push(a2[a]);
    a = a + 1;
  }
  return final;
}


function findMinMax(arr, arr1) {
  let m = arr[0];
  let a = 0;
  while (a < arr.length) {
    if (arr1) {
      if (arr[a] > m) {
        m = arr[a];
      }
    } else {
      if (arr[a] < m) {
        m = arr[a];
      }
    }
    a = a + 1;
  }
  return m;
}


function forEach(array, fun) {
  let a = 0;
  while (a < array.length) {
    fun(array[a]);
    a = a + 1;
  }
}


function sum(arr) {
  let sum = 0;
  let a = 0;
  while (a < arr.length) {
    sum += arr[a];
    a = a + 1;
  }
  return sum;
}


function reverse(str) {
  let rev = "";
  let a = str.length - 1;
  while (a >= 0) {
    rev += str[a];
    a = a - 1;
  }
  return rev;
}


function checkerboard(abcd) {
  let a = 1;
  while (a <= abcd) {
    let b = 1;
    let row = "";
    while (b <= abcd * 2) {
      if (a % 2 === b % 2) {
        row += "*";
      } else {
        row += " ";
      }
      b = b + 1;
    }
    console.log(row);
    a = a + 1;
  }
}

triangleStars(8);

console.log("multiToSingle", multiToSingle([1, 2, 3], [4, 5, 6]));

console.log("maximum:", findMinMax([4, 2, 66, -44, 8], true));
console.log("minimum:", findMinMax([4, 2, 66, -44, 8], false));

forEach([4, 3, 2], function(abc) {
  console.log(abc);
});

console.log("sum", sum([4, 3, 2]));

console.log(reverse("!iboneK lareneG ,erehT olleH"));

checkerboard(8);