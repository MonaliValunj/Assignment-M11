//STEP 1
/* let month = prompt('Enter the month:(January,February,March,April,May,June,July,August,\nSeptember,October,November,December)')
console.log(month)

if ('January' === month || 'March' === month || 'May' === month || 'July' === month || 'Agust' === month || 'October' === month || 'December' === month) {
console.log(`${month} has 31 days`)
}
else if ('February' === month) {
console.log(`${month} has 28 days`)
} 
else if ('April' === month || 'June' === month || 'September' === month || 'November' === month) {
   console.log(`${month} has 30 days`)
}
else{
console.log('Please enter the month again:')
} */

//STEP 2
/* let date = new Date('2024-01-24')
//converted the Date object to a string And then took the long form of the month name
let month = date.toLocaleString('default', { month: 'long' })
console.log(month)
 */

//STEP 3
/* let today = new Date()
let day = today.getDay()

console.log(today)
console.log(day)
if(day === 0 || day === 6){ // 6 = Saturday, 0 = Sunday
    console.log("its weekend")
}else{
    console.log("Its not weekend")
} */

//STEP 4
/* let today = new Date()      //get today day
let yesterday = new Date(today)
yesterday.setDate(today.getDate() - 1)       
console.log
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let yesterdayDayOfWeek = daysOfWeek[yesterday.getDay()];
let todaysdayOfWeek = daysOfWeek[today.getDay()]
console.log(`Today is ${todaysdayOfWeek}`)
console.log( `Yesterday was ${yesterdayDayOfWeek}`);
 */


//STEP 5
/* 
let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let today = new Date();
let day = weekdays[today.getDay()]
let firstLetterOfDay = day.charAt(0);

console.log("Today is: " + firstLetterOfDay)
 */