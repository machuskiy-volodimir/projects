'use strict';



/* 
function hello(){
  console.log('Hello world!');
}
hello(); */


/* 
function getTipsRating(amount){
  // let reiting;
    if (amount === 0){ return('terrible')}
    
    if (amount <= 10) {
      let res = (amount <=10)
      return('poor');
    }
      
    if(amount>10) {
        return('great');
    }
    
} */
  

/* function calculateTaxes(income){
  
  if (income <= 1000) {
     
    return (income * 0.02)
  }
  else {
      let res = income - 1000;
      if (income <= 10000){
        return 1000 * 0.02 + res * 0.03
      }
    
      else {
        res = income - 10000

        return 1000 * 0.02 + 9000 * 0.03 + res * 0.05
      }
  }

};

console.log(calculateTaxes(20000));
 */
 ////////////////////////////////////////////////


 /* function getLargestExpressionResult (a, b){

  let sum = (a + b);
  let dif = a - b;
  let multi = a * b;
  let dir = a / b;
  
  let max = sum;
  
  if (max < dif)  max=dif;
  if (max < multi )  max=multi;
  if (max < dir)  max=dir;
  return max
}
document.write(getLargestExpressionResult (-5, -1));  */

////////////////////////////

/* function getTask(weekday) {
  switch (weekday) {
    case ('monday'):
      return ('Write a new module for the program');
      
    case ('tuesday'):
      return 'Test the module and find bugs';
      
    case ('wednesday'):
      return 'Write a new module for the program';
      
    case ('thursday'):
      return 'Test the module and find bugs';
      
   case ('friday'):
      return 'You need to meet the boss today';
      
    case ('saturday'):
      return 'Spend the evening with your friends';
      
  
    case ( 'sunday'): 
      return 'Go to the movies in the evening';
      
  
    default:
      return 'Entered the wrong day of the week';
  
  }
}; */

////////////////////////////////////

/* function manageHomeRoutines(task) {
  switch(task){
    case ('clean'): return 'petya';
      
    case ('make_breakfast'): return 'misha';
       
    case ('write_code'): return 'petya';
    case ('adjust_lights'): return 'vasya';
    case ('review_pull_request'): return 'misha';
    case ('set_up_an_alarm'): return 'siri';
    case ('check_weather'): return 'siri';
    case ('take_out_garbage'): return 'vasya';
    default : return 'masha';
  }
} *
//////////////////////////////////////////

/* function getPaymentSystem(num){
  switch(num){
    case (4): return ('VISA');

    case (37):
    case (34): return ('American Express');

    case (51):
    case(52):
    case(53):
    case(54):
    case(55): return('MasterCard');

    case(63):
    case(67): return('Maestro');

    default: return('unknown payment system');
  }
} */

////////////////////////////////////

/* function getDirection(direction){
  switch(direction){
    case 'back': return"hor=0 ver=-1"

    case 'forward': return"hor=0 ver=1"

    case 'left': return "hor=-1 ver=0"

    case 'right': return "hor=1 ver=0"

    

    default: return"hor=0 ver=0"
  }
}
getDirection(direction); */

/////////////////////////////

/* function getDrinks(quest) {
  // write code here
  let sum = 0;
  for(i=0;i <= quest; i++){
    sum = sum + i
    
    
  }
  return (sum);
};
document.write(getDrinks(10)); */

//////////////////////////////////////

/* 
function getDrinksWithStep(quest, step) {
  // write code here

  let sum =0
  for (let i = 1; i <= quest; (i + step)) {
      sum = sum + 1
  }

  return sum;
}
 */

///////////////////////////////////////



/* function calculateProfit(amount, percent, period) {
  // write code here
      
     
      
      let devidendy = amount
      
      let percents = 1+ (percent*0.01);
      
      for (let i=1; i<=period; i++) {
          devidendy = devidendy*percents;
          console.log(devidendy);
      };
      let result = devidendy - amount;
      
      
   return (result);
}

document.write (calculateProfit(1000, 5, 7)); */


///////////////////////////////////////////////

/* function getYears(amount, percent, expectedLimit) {

  // write code here
   
   let percents = percent * 0.01;   
   let amounts = amount;
   let percentOfAmount = amount *percents ;//  процент о суммы
    
        
    debugger
    let years =0;

    for(let i=amounts; i<=expectedLimit; i+=percentOfAmount){
      
      amounts = amounts + percentOfAmount;

      if(amounts>=expectedLimit) break;
                  
      years++;
      
    };
    
   return years;
};
document.write((getYears(5000, 5, 6500))); */


//////////////////////////////////



/* function decodeSignal(input) {
  
  let num;
  num = Boolean(input)
  
  console.log(!!num)
  // console.log(num===Number)
  if(num === true){
    
    return 1 ;
  }
  else{
    return (0)
  }
 
}
document.write(decodeSignal(' ')) */

/////////////////////////////
/*  function determinationOfWinner( tasks1, tasks2){

  debugger
  if(+tasks1 > +tasks2) return('Max winner!!!');
  if(+tasks1 < +tasks2) return ('Roman winner!!!');
  if (+tasks1===+tasks2) return ('Roman and Max are the winners!!!');
  else return('Error!!!');

 }
 document.write(determinationOfWinner( "14", "9")); */

 ///////////////////////////////

 /* function getGuestsCount(guestsInput){
  let guests = parseInt(guestsInput);
  
  let checkNaN = Object.is(guests, NaN);
  
    if(checkNaN !== true) return guests;
    else return ('not a number');
  }
 document.write( getGuestsCount('+')); */


///////////////////////////////////////

/* function getStatistic(name,answer) {
  // write code here
  
  if (answer == "1"
    ||answer== "+"
    ||answer == "+++"
    ||answer == "okay"
    ||answer == 'ok')
     return `${name} understands`;

  else if (answer =="-"
        ||answer =="0"
        || answer == ''
        ||answer == '00000')
        return `${name} doesn\'t understand`
    
  else (answer === (null||NaN||undefined)) 
  return "server error"
  
  
}
document.write (getStatistic("vova", "1")) */

//////////////////////////////////

/* function canTheyBook(adultsCount, childrenCount = 0) {
  // write code here
let adults = adultsCount;
let peopleOnTheRoom = 8;
let numberOfpeople = adults + childrenCount; 
let adultOnChild = (adults/childrenCount);


if((numberOfpeople<=peopleOnTheRoom)&&(adults>0)&&(adultOnChild>=0.5)) return true
else return false




}
document.write(canTheyBook(2,4)) */

/////////////////////////

/* function canTheyBook(adultsCount, childrenCount = 0, babiesCount = 0) {
  // write code here
  debugger
let adults = adultsCount;
let peopleOnTheRoom = 8;
let numberOfpeople = adults + childrenCount + babiesCount; 
let adultOnChild = (adults/(childrenCount + babiesCount));
let peopleWithBabiesOnTheRoom = peopleOnTheRoom + 1;

  if (babiesCount>0)
    //  console.log((peopleWithBabiesOnTheRoom<=numberOfpeople)&&(adults>0)&&(adultOnChild>=0.5));
    if((numberOfpeople<=peopleWithBabiesOnTheRoom)&&(adults>0)&&(adultOnChild>=0.5))
        
          return true;
    else  return false;
    
  
  else if(babiesCount==0)
       if((numberOfpeople<=peopleOnTheRoom)&&(adults>0)&&(adultOnChild>=0.5))  return true;
        
      else return false;
         
};

document.write(canTheyBook(9)) */ 

/////////////////////////////////////////

/* function recommendRoom(adultsCount, childrenCount= 0, babiesCount= 0) {
debugger
  let numberOfpeople = adultsCount + childrenCount + babiesCount;
  let smallRoom = 4
  let smallRoomExtra = smallRoom + 1 
  let bigRoom = 8
  let bigRoomExtra = bigRoom + 1

  if (babiesCount>0)
      if(numberOfpeople == smallRoomExtra)
        return "small room + extra bed"
      else if(numberOfpeople <= smallRoom)
        return "small room"
      else if(numberOfpeople == bigRoomExtra )
        return 'big room + extra bed'
      else if( (smallRoom < numberOfpeople)&& (numberOfpeople <= bigRoom))
        return 'big room'
      else
        return "нельзя заказать номер"
  
  else 
      if(numberOfpeople <= smallRoom)
        return "small room"
      else if((smallRoom < numberOfpeople )&&(numberOfpeople <= bigRoom) )
        return "big room"
      else
         return " нельзя заказать номер"
  



  // write code here
}
document.write( recommendRoom(3,2, )) */

////////////////////////////////////////////

// function compareNumbers(a, b, c) {
  
//   // (return a < 10 <= b <= 100 < c < 250 || a > 200 < b < c;)  начальная строка
//   return ((a < 10)&&((b>=10)&&(b<=100))&&((c>100)&&(c<250))) || ((a>200)&&(b>200)&&(c>b))
// }
//   document.write(compareNumbers(1, 2, 3))

//////////////////////////////////////////////////////

// function getBoolean(a, b, c, d) {
//   // return a && a > b && c > d && a < c || b && b > a && c > a || c > d && d && d < a;
 
//  if (a)
//    if (a > b)
//    if (c > d) 
//    if (a < c) return true
//    console.log((a > b),(c > d),(a < c));
//  if(b) 
//     if (b > a) 
//     if (c > a) return true
//     console.log((b > a),(c > a));
//  if(d)
//     if (c > d)
//     if (d < a) return true
//     // console.log((c > d),(d < a));
//   return false
 
// }
// document.write(getBoolean(1, 3, 4, 20))

///////////////////////////////////////////////////////
/*  function getCentury(year){
   let century = Math.ceil(year/100)
   return century

 }
 document.write (getCentury(1756)) */

 ///////////////////////////////////////////////

//  function convertCurrency(amount, exchangeRate, currencyName ){
//     let amountOfCurrency = (Math.ceil(amount*exchangeRate*100))/100
//       console.log(amountOfCurrency)
//     switch(currencyName){
//       case "dollar": return `Give them ${amountOfCurrency} ${currencyName}\(\'s\)`
//       case "zloty": return `Give them ${amountOfCurrency} ${currencyName}\(\'s\)`
//       case "euro": return `Give them ${amountOfCurrency} ${currencyName}\(\'s\)`
//     }

//  }
//  document.write(convertCurrency(321.56, 0.55, "dollar" ))

/////////////////////////////////////////////////////////////////
/*  function getRectangleArea(side, diagonal){
  let side2 = Math.sqrt ((diagonal**2) - (side**2)) 
  let rectangleSquare = (Math.ceil((side * side2)*100))/100
  console.log(rectangleSquare)
  //  diagonal = Math.sqrt((a**2) + (b**2))
  
  
  if (diagonal > (side&&side2)) return rectangleSquare
  else return 'not a rectangle'
  
 }
 document.write(getRectangleArea(null,-34 )) */

 //////////////////////////////////////////////////////


/*  function isEven(number){
   let integerCheck = Number.isSafeInteger(number)
  //  return integerCheck
   if ((integerCheck===true)&&(number%2===0))
      return true
    else return false
 }
 document.write(isEven(134)) */


 //////////////////////////////////////////////////////////////


/*  function makeDecision(fuelRemaining, distance, fuelConsumption) {
  let relationToExpense = (fuelRemaining/fuelConsumption)*100
    if (relationToExpense < distance) return 'reach gas station by themselves'
    else if(relationToExpense === distance) return 'you better go to the gas station'
    else return 'ask for help'
}
console.log(makeDecision(12, 1000, 5.5)) */

////////////////////////////////////////////////////////////////

/*  function calculateGuests(guestsInput) { 

  let string = guestsInput.replace(/ /g, '-')
  let numberOfpeople = ""
  let message = 'not a number'
  // document.write(message)
  console.log( isNaN(' '),
    isNaN("8"),
    isNaN("1"),
    isNaN('r'),
    isNaN('-'),
    Number(1)=== true,
  )
 
  for(let i=0; i< string.length; i++){

    let str = string[i]
    let numStr = +str
    console.log(string[i])    
    console.log(isNaN(numStr))
    // console.log((Number(isNaN(numStr))) === true)
    console.log((Number(numStr))),
    console.log(Boolean(isNaN(numStr))),
    document.write((Number(numStr)))

   
      // перебрать, определить есть ли в строке число, записать число в переменную,
      // добавить второе число к переменной(получим строку с двух цифр), преобразовать 
      // переменную в число!!!!!!!
      
      if ((isNaN(numStr)) === false)  numberOfpeople += `${numStr}`
        console.log(numberOfpeople)
        
  } 
   console.log(Boolean(numberOfpeople))

    if(Boolean(numberOfpeople) === true) return +numberOfpeople
    else return message
 
}
document.write(calculateGuests(' 12t eeh'))  */




// /////////////////////////////////////////////////////


/* function getSuccessRate(statistic) {
 
 let string = statistic;
 let numOfRepetitions = 0

 for(let i = 0; i<=statistic.length; i++){
    if( string[i] == 1) 
    numOfRepetitions += 1

  

 }
 let procent = Math.round((numOfRepetitions/statistic.length)*100)
 if (statistic.length === 0 ) return 0
 console.log(statistic.length)
 return procent

}

console.log(getSuccessRate("011011")) */

//////////////////////////////////////////////////////////////////

/* function getSuccessRate(statistic) {

    let numStr = "";
    for (let i=0; i < statistic.length; i++){
      // console.log (statistic[i])
      
      if(isNaN(statistic[i]) === false)
      numStr+= statistic[i];
    }
    
    let numZero = 0 ;    
    for( let j = 0; j < numStr.length; j++) {
      if(+numStr[j] !== 0) 
        numZero += 1
        // console.log(+numStr[j])
    }
   
    let procent = Math.round((numZero/numStr.length)*100);
    return procent

}
document.write(getSuccessRate( "4jg67+--000")) */

///////////////////////////////////////////////////////

/*  function isAlphabet(letters) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  //  let result = alphabet.indexOf(letters);
  // if (result !== -1) return true;
  // else return false 
  
  // альтернативнный.........

  let result = alphabet.includes(letters);
  return result

  
}
console.log(isAlphabet("cdefg"));  */


///////////////////////////////////////////////////

/* function removeVowels(document) {
  // write code here
  let vowels = "aeiouy";
  let newDocument = document.toLowerCase()
  console.log(newDocument)
  let str = "";
   for(let i=0; i<newDocument.length; i++){
      if(vowels.includes(newDocument[i]) === false) 
        str += document[i];
        console.log(str)
   }
   
   return str;
}
console.log(removeVowels("AEne F eyHI")) */
 
/////////////////////////////////////////////////////

/* function abbr(str){
let upperStr = str.toUpperCase()
let abbr = upperStr[0]
for (i=0; i<upperStr.length; i++){
  
  if (upperStr[i] == " "){
    abbr += upperStr[i+1]  
  }
  
}

return abbr
}
console.log(abbr('aa dl arrrr UUU llfllf')) */

////////////////////////////////////////////////////////

/* function decryptMessage(message) {

 // write code here

let str = ""
for( let i=message.length-1; i>=0; i--){
  str += message[i]
}

return str
}
console.log(decryptMessage('!!! olleH')) */

////////////////////////////////////////////////////

/* function isWerewolf(target) {
  // write code here
  let newTarget = target.replace(/ /g, '')
  let returnStr = ""
  for (let i = newTarget.length-1; i>=0; i--){
    returnStr += newTarget[i]
  }
  return (newTarget.localeCompare(returnStr) === 0)
  // console.log(returnStr)
  // console.log(newTarget)
  альтернативнный
  // if(newTarget === returnStr) return true
  // else return false

}
console.log(isWerewolf('rot ato')) */


//////////////////////////////////////////////////

// МАСИВЫ...........



/* function makeStickers(countOfDetails, robotPart) {
  
  let n = countOfDetails
  let array = [];
  
  for (let i = 1 ; i <= n ; i++ ) {
    let details = ` ${robotPart} detail #${i}`
    array.push(details)
    
  }
     
  return(array)
  
}
makeStickers(3, "Head") */


//////////////////////////////////////////////////////

/* function doublePower(currentPowers) {
  // write code here
  let double = []
  for( let i = 0; i<currentPowers.length; i++){
     double.push((currentPowers[i]*2))
  }
  return(double)
}
console.log(doublePower([5,10,40])) */

//////////////////////////////////////////////////////

// function getSpeedStatistic(testResults) {
//   // write code here
//   let sumSpeed = null;
//   let maxSpeed = testResults[0];
//   let minSpeed = testResults[0];
//   let speed = []
  
  
/*   for (let i = 0; i < testResults.length; i++){
    
    sumSpeed += testResults[i]
        

    if (maxSpeed <= testResults[i] ) 
      maxSpeed = testResults[i]
    else if  (minSpeed > testResults[i]) 
      minSpeed = testResults[i]
  }
  
  //  maxSpeed = Math.max(...(testResults));
  //  minSpeed = Math.min(...(testResults));
  let averegeSpeed = (Math.floor(sumSpeed/testResults.length));
  // console.log(isNaN(averegeSpeed));
  // console.log(averegeSpeed);  
  // if(isNaN(averegeSpeed) === true)  averegeSpeed = 0

  if (testResults.length === 0) return speed = [0,0,0]
  
  speed.push(minSpeed, maxSpeed, averegeSpeed );
  
    
  return speed
}
console.log(getSpeedStatistic([1,56,-1])) */

///////////////////////////////////////////////////////////


// function compareRobots(firstRobotResults, secondRobotResults) {
//   // write code here
// let sum = []
// let sum1 = null
// let sum2 = null
//   for(let i = 0; i < firstRobotResults.length; i++){
    
//     sum1 += firstRobotResults[i]
   
//   }
//   for(let i = 0; i < secondRobotResults.length; i++){
    
//     sum2 += secondRobotResults[i]
   
//   }
//   sum.push(sum1, sum2)
//   console.log(sum)

//   if (sum[0] > sum[1]) 
//          return `First robot for sale!`
//   else if(sum[0]<sum[1]) 
//       return `Second robot for sale!`
//   else return `Both robots for sale!`


// }
// compareRobots([9,10,8], [20,5,1])

/////////////////////////////////////////////////////////////////

// function isSorted(boxes) {   //сортировка по порядку
  
// let boxesMap = boxes.map(item => (item))
//   document.write(boxesMap)
// let boxesMapSort = boxesMap.sort()
//   document.write(`<br>${boxesMapSort}`)


// for(let i=0; i<boxes.length; i++){
//   if (boxes[i] === boxesMapSort[i]) continue
  
//   else  document.write(false)
//   return false
//   }

// document.write(true)
// return true
// }
// isSorted([1, 4,'a','a','p', 'w'])

///////////////////////////////////////////////////////////////////////


// function getLocation(coordinates, commands) {
//   // write code here
 
//   let results = []
//   let x = coordinates[0]
//   let y = coordinates[1]
  
//    // for (let i=0 ; i<coordinates.length; i++ ) {
//   //  arr.push(coordinates[i])
  
//     // console.log(coordinates[i])
//   //  arr.push(coordinates[i])
//     for(let j=0; j<commands.length; j++){
//     //  ***************************************88
//       // if (commands[j]==='forward') { 
//       //   y+=1
//       //    continue; }
//       // if (commands[j] ==='back') {
//       //   y-=1
//       //    continue; }
//       // if (commands[j]==='right') {x+=1 
//       //   continue; }
//       // if (commands[j]==='left') x-=1 
//       //  continue; 
//       // *********************************
//       let arr = commands[j]
//       if (arr.includes('forward')) { 
//         y+=1
//          continue; }
//       if (arr.includes('back')) { 
//             y-=1
//              continue; }
//       if (arr.includes('right')) { 
//               x+=1
//                continue; }
//       if (arr.includes('left')) { 
//                 x-=1
//                  continue; }
     

//     }   
  
//   results.push(x, y)
//   return results
    
// }
// getLocation([0, 0], ['forward', 'right'])


// ////////////////////////////////////////////////////////

// function getPlan(currentProduction, months, percent) {
//   // write code here
//   let result = []
  
//   let currentProductionPercent = currentProduction 
//   for(let i =0; i<months; i++){
//     console.log(i)
//     currentProductionPercent = Math.floor(currentProductionPercent*((percent/100)+1))
//     console.log(currentProductionPercent)
//     result.push(currentProductionPercent)
//   }
//  return(result)
// }
// getPlan(1000, 6, 30);

// ///////////////////////////////////////////////////////////
// /Obgects////////////////////////////////


//  const user = {
//   firstName : "Ivan",
//   lastName : "Vasylchenko",

// };

// // user['fullName'] = `${user.firstName} ${user.lastName}`
// function addFullName() {
//   // write code here
 
//    user['fullName'] = `${user.firstName} ${user.lastName}`;
  
//   //  return user.fulltName
// }
// addFullName(user)
// console.log(user)

/////////////////////////////////////////


// const users = [
//    {
//      firstName: undefined,
//      lastName: 'Holy',
//      fullName: 'Jack Holy',
//    }
//   ];
   
// function restoreNames(users) {
 
//   for( let i = 0; i<users.length; i++){
//       let name;

//       for (let key in users[i]){

//           // console.log (key, users[i][key])
          
//           if( key === "fullName") name= users[i][key];
//       }
//         // console.log(name)
//         let arr = name.split(' ');
//         console.log(arr)
//         console.log(arr[0])
//         users[i].firstName= arr[0];

//   }
// }
// restoreNames(users)
// console.log(users);

/////////////////////////////////////////////////


// const people = [
//   {
//     name: 'Lilia',
//     gender: 'female',
//     age: 23 
//   }
// ];

// function removeFemaleAges(people) {
//   // write code here
//   for(let i=0; i<people.length; i++){
//     console.log(i)
//       for(let key in people[i]){
//         console.log(people[i][key])
//         // console.log(people[i][key]===female)
//           if(people[i][key]=== 'female') {delete people[i].age}
//       }
//   }
// }
// removeFemaleAges(people)
// console.log(people)

// //////////////////////////////////////////

// const robots = [
//   {core_version: 9},
//   {core_version: 13},
//   {core_version: 16},
//   {core_version: 9},
//   {core_version: 14},
//   ];

//   function getOutdated(robots, newVersion) {
//     // write code here
//     let arr=[];

//     for(let i = 0; i<robots.length; i++){
//       // console.log(robots[i])
//       for(let key in robots[i] ){
//         // console.log(`${key} ${robots[i][key]}`)
//         if (robots[i][key]<newVersion) {
//          arr.push(i)
//         }
//     }
//     // console.log(arr)
//   }

//   return arr
// }
//   getOutdated ( robots, 14 );

/////////////////////////////////////////////////////////////


// function countBoxes(boxes) {
//   // write code here
//   const obj = {};
    
//   for(let i = 0; i<boxes.length; i++){
    
//     obj[boxes[i]] = null
   
//   }
// //  console.log()
// // arrObj.push(Object.keys(obj))
//   // console.log(Object.keys(obj))
//   // console.log(obj)
  
//   for(let key in obj){
//     for( let i =0; i<boxes.length; i++){
//       if(boxes[i] === key){
//        obj[key] += 1
//       }
//     }
//   }
//   console.log(obj)
// }
// countBoxes('an11');

//////////////////////////////////////////////////////
const robot = {
  version: 16,
  name: 'Cleaner 3000',
  coords: [345, 12],
};

// function getRobotSchema(robot) {    //Правильно
  
// let arr
// let valeus
// Object.keys(robot).map(function(key){
//    valeus = typeof(robot[key])
  
//   robot[key] =valeus;  
// }) 
// arr = (Object.entries(robot));
// console.log(arr);
// }
// getRobotSchema(robot)

let arr = []
function getRobotSchema(robot){
  
 
  arr = (Object.entries(robot))     //Правильно
  
  for(let [key, valeus] of arr){
    valeus =typeof(valeus)
    robot[key]=valeus
    // console.log(robot)
  }
  
///////////////////////////////////////////////////
  // arr = (Object.keys(robot))    //Правильно
  // // console.log(arr)
  // let a = arr.map(function(key){
  //   robot[key] = typeof(robot[key])
  //   return(robot[key])
  // })
  // console.log(arr)
  // console.log(a)
  // arr = Object.entries(robot)
  // console.log(arr)
  ///////////////////////////////////////////////////////
  robot = Object.entries(robot)
  console.log(robot)
}
  getRobotSchema(robot)