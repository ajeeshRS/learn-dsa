// find number of good pair
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

const numOfGoodPairs = (arr: number[]) => {
  let ans: number = 0;
  const freq: any = {};
  // iterating through each element
  for (let x of arr) {
    // if x is in the freq then it will assign the value to the answer varible - else 0
    ans += freq[x] || 0; //1+2+1 = 4
    // if x in the freq it will increase the freq of x by 1 - else 0
    freq[x] = (freq[x] || 0) + 1;
  }
  return ans;
};
// console.log(numOfGoodPairs([1, 2, 3, 1, 1, 3]))

// Time complexity : initializing takes O(1), looping takes O(N) accessing and assigning will take O(1)
// so will take the overall time complexity which is O(N).

// Space complexity: answer variable take o(1),then in the worst case if the all n elements are unique it will save n elements so the space complexity will be O(N)

// find pair(x,y) {indices only not numbers} whose sum is target from an array of integers
// like array [2,3,1,5] and the target is 5 then it need to return [0,1]

const twoSum = (arr: number[], target: number) => {
  // initializing a hashtable
  const numSet = new Map();

  // iterating through all elements
  for (let i = 0; i < arr.length; i++) {
    // getting the number belong to the indice
    const number = arr[i];
    // getting the difference betweenk target and number
    const diff = target - number;

    // if the diff is in the hashtable return the indice value from hashtable and current indice ie: i
    if (numSet.has(diff)) return [numSet.get(diff), i];

    // other wise set the number as key and indice as value
    numSet.set(number, i);
  }
};

// console.log(twoSum([3, 1, 2, 1, 5], 5))

// Time complexity : O(n) it is only iterating  n times and the time complexity of hashtable of O(1) so we will take the overall bigger value is O(N)

// Space complexity : initialising and assign will only take O(1) and in hashtable it will use the space n times so in this case we will only take the overall complexity which is O(N)


// linear search
function linearSearch(arr: number[], target: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([2, 4, 56, 34, 5], 34));

// time complexity - O(n) because at worst it will go through N elements
// space complexity - O(1) because it wont grow with the input

// Binary search
function binarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 9, 12, 45, 67, 78], 6));
// Time complexity - O(log n)

// if n=8 O(n) take n steps O(log n) takes 3 steps
//  actually log n= log2 n  which is N/2/2/2/2/... till remainder get 1
// if n=8 then it take 8/2/2/2 = remainder = 1 so 3 times 8 got divided by 2
// so log2n = log2 8 =3 which is O(log n) = O(log 8) =3
// in binary search it divide the part /2 in each step

// Space complexity - O(1)


// find whether a pair (X, Y) exists in an array, A of N elements whose sum is Z.
// [1,4,6,3,9] 5
const checkPairExistence = (a: number[], z: number) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (i != j && a[i] + a[j] == z) {
        return true;
      }
    }
  }
  return false;
};

console.log(checkPairExistence([1, 5, 2, 3], 5));

// time complexity - O(N^2)
// space complexity - O(1)


// selection sort
function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowestNoIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestNoIndex]) {
        lowestNoIndex = j;
      }

      if (lowestNoIndex != i) {
        let temp = arr[i];
        arr[i] = arr[lowestNoIndex];
        arr[lowestNoIndex] = temp;
      }
    }
  }
  return arr;
}

// console.log(selectionSort([2, 1, 6, 5]));
// time complexity - O(N^2) - nested loops
// space complexity - O(1) because it is not taking any space related to N and only taking some variable spaces       like lowestNoIndex,temp etc

// bubble sort
function bubbleSort(arr: number[]) {
  let swapped;
  let n = arr.length;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
}
// console.log(bubbleSort([6, 13, 2, 56, 1]));

// time complexity - O(N^2) -worst the array is in reverse order so it take maximum comparision in each
// space complexity - O(1)
