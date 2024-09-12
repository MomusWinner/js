function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function isPrime(num){
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true 
}
  
function printPrime(){
    for (var i = 2; i < 21; i++) {
      console.log(i + " " + isPrime(i))
    }
}
  
function findMinMax(nums){
    return { min : Math.min(...nums), max : Math.max(...nums)}
}
  
  
function randNums(){
    nums = []
    for (var i = 0; i < 10; i++) {
      nums.push(getRandomInt(100))
    }
    return nums
}
  
function displayUserInfo(user)
{
    console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`)
}
  
function findLongestName(names){
    let maxLength = 0
    let maxIndex = 0
    for (var i = 0; i < names.length; i++) {
      if(names[i].length > maxLength)
      {
        maxLength = names[i].length
        maxIndex = i
      }
    }   
    
    return names[maxIndex]
}
  
  
function formatDate(date){
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}
  
function dateDiff(date1, date2){
    let difT = Math.abs(date2 - date1);
    return Math.floor(difT / (86400000))
}
  

// console.log("task1")
// printPrime()

// console.log("task2")
// nums = randNums()
// console.log(nums)
// console.log(findMinMax(nums).min, findMinMax(nums).max)


// console.log("task3")
// user = {
//   name : "UserName",
//   age : 12,
//   email : "some@gmail.com"
// }
// displayUserInfo(user)
// user.greet = function () {console.log(`Привет, ${this.name}!`)}
// user.greet()

// console.log("task4")
// names = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"]
// for (var i = 0; i < names.length; i++) {
//   console.log(`студент ${names[i]} ваш порядковый номер: ${i}`)
// }
// console.log(findLongestName(names))

// console.log("task5")
// console.log(formatDate(new Date()))
// console.log(dateDiff(new Date(2001, 1, 9), new Date(2002, 1, 10)))
