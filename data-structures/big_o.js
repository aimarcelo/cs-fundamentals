// BIG O(n) notation:


// Time: O(1)
// Space: O(n)
// numbers = [...] // n
const foo = (numbers) => {
  return numbers[0] + numbers[1];
}

// Time: O(n)
// Space: O(n)
// numbers = [1, 2, ..., n] // n
const foo = (numbers) => {
  return numbers.reduce((total, currentNum) => total + currentNum, 0)
}


// Time: O(n^2)
// Space: O(n)
// numbers = [1, 2, ..., n] // n

const foo = (numbers) => {
  for(i = 0; i < numbers.length; i++) {
    for(j = 0; j < numbers.length; j++) {
      console.log(i, j)
    }
  }
}


// Time: O(2n) => O(n)
// Space: O(n)
// numbers = [1, 2, ..., n] // n
const foo = (numbers) => {
  for(i = 0; i < numbers.length; i++) {
    console.log(i)
  }

  for(j = 0; j < numbers.length; j++) {
    console.log(j)
  }
}

// Time: O(n^3 + n) => (n^3)
// Space: O(n)
// numbers = [1, 2, ..., n] // n
const foo = (numbers) => {
  for(i = 0; i < numbers.length; i++) { for(j = 0; j < numbers.length; j++) {
      for(k = 0; k < numbers.length; k++) {
        console.log(i, j, k)
      }
    }
  }

  for(l = 0; l < numbers.length; l++) {
    console.log(l)
  }
}

// n = 100
// O(1) => 1
// O(log(n)) => 2
// O(n) => 100
// O(n log(n)) => 200
// O(n^2) => 10000
// O(2^n) => 3.45e+5
// O(n!) => 9.332622e+157





configuration = ['a', 'a', 'a']

for(firstLetter = 'a'; firstLetter < 'z' ; firstLetter++) {
  for(secondLetter = 'a'; secondLetter < 'z' ; secondLetter++) {
    for(thirdLetter = 'a'; thirdLetter < 'z' ; thirdLetter++) {
      cipher = [firstLetter, secondLetter, thirdLetter]
      if(decode(cipher) === "Good morning") {
        break;
      }
    }
  }
}
















