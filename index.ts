// Task #2
//let person_name: string = "Muhammad Zaid Zehri";
//console.log(`Hello ${person_name},Hello Zaid, would you like to learn some Python today?`);

// Task #3
//let person_name: string = "Muhammad Zaid Zehri";
// in lowerCase
//console.log(person_name.toLowerCase());
//in upperCase
//console.log(person_name.toUpperCase());
//in titleCase
//console.log(person_name.replace(/\b\w/g,c=> c.toUpperCase()));

// Task #4
//console.log('Francis Bacon once said, “Knowledge is power.”');

//Task #5
//let famous_person: string = "Francis Bacon";
//let message: string = `${famous_person} once said, "Knowledge is power."`;
//console.log(message)

//Task #6
//let person_name: string = " \t \n  Muhammad Zaid Zehri \t \n";
//console.log(person_name)
//console.log(person_name.trim())

//Task #7
//console.log(4+4)
//console.log(12-4)
//console.log(4*2)
//console.log(16/2)

// Task #8
// console.log("-------------------------------");
// console.log(5+3);
// console.log("-------------------------------");
// console.log(5+3);
// console.log("-------------------------------");
// console.log(5+3);
// console.log("-------------------------------");

//Task #9
//let favourite_number: number = 786;
//console.log(`My favourite number is: ${favourite_number}`);

//Task #10
// In this code i have printed my name with template literals
// let person_name: string = "Muhammad Zaid Zehri";
// console.log(`Hello ${person_name}! would you like to learn some Python today?`);

// // In this code i have printed the quotation of my favourite person
// console.log('Francis Bacon once said, “Knowledge is power.”');

//Task #11
// let names: string[] = ['Anas', 'Bilal', 'Taha', 'Zubair']
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// Task #12
// let names: string[] = ['Anas', 'Bilal', 'Taha', 'Zubair']
// console.log('How are you ' + names[0] + '?');
// console.log('How are you ' + names[1] + '?');
// console.log('How are you ' + names[2] + '?');
// console.log('How are you ' + names[3] + '?');

//Task #13
// let vehicles: string[] = ['Honda 125', 'Corolla Gli', 'Suzuki Cultus', 'Toyota Vitz']
// console.log('I would like to own '+ vehicles[0]);
// console.log('I would like to drive '+ vehicles[1]);
// console.log('I would like to purchase '+ vehicles[2]);
// console.log('I would like to sale '+ vehicles[3]);

//Task #14
// let persons: string[] = ['Anas', 'Bilal', 'Taha']
// console.log('Hi ' + persons[0] + '! I would like to invite you for dinner.')
// console.log('Hi ' + persons[1] + '! I would like to invite you for dinner.')
// console.log('Hi ' + persons[2] + '! I would like to invite you for dinner.')

//Task #15
// let persons: string[] = ['Anas', 'Bilal', 'Taha']
// console.log(persons[0] + ' is not coming for dinner tonight.')
// persons[0] = 'Ahmed';
// console.log(persons[0] + ' is coming for dinner tonight.')
// console.log(persons[1] + ' is coming for dinner tonight.')
// console.log(persons[2] + ' is coming for dinner tonight.')

//Task #16
// let persons: string[] = ['Kashif', 'Bilal', 'Osama']

// console.log('Hi ' + persons[0] + '! I found a bigger dinner table.')
// console.log('Hi ' + persons[1] + '! I found a bigger dinner table.')
// console.log('Hi ' + persons[2] + '! I found a bigger dinner table.')

// Add element to start of the array
// persons.unshift('Taha')

// Add element to the middle of the array
// persons.splice(2, 0, 'Basit')

// Add element to the end of the array
// persons.push('Rizwan')

// console.log('Hi ' + persons[0] + '! I want to invite you for dinner tonight.')
// console.log('Hi ' + persons[1] + '! I want to invite you for dinner tonight.')
// console.log('Hi ' + persons[2] + '! I want to invite you for dinner tonight.')
// console.log('Hi ' + persons[3] + '! I want to invite you for dinner tonight.')
// console.log('Hi ' + persons[4] + '! I want to invite you for dinner tonight.')
//Second Method
// let guestArr: string[] = ["Anas", "Bilal", "Taha"];
// let cannotAttend: string = "Anas";
// let newGuest: string = "Qasim";
// guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
// console.log(guestArr);
// guestArr.map((items)=>
// console.log(`Dear ${items}! I found a bigger table so, I am inviting more peoples.`)
// );
// //(part2)adding in beginning
// let guestbeg: string = "moiz";
// guestArr.unshift(guestbeg);
// console.log(guestArr);
// //(part3)adding in middle
// let guestMiddle: string = "Fatima";
// let middleIndex = guestArr.length / 2;
// guestArr.splice(middleIndex, 0, guestMiddle);
// console.log(guestArr);
// //(part4)Append
// guestArr.push("Zahid");
// console.log(guestArr);
// //part5
// guestArr.map((items) =>
//   console.log(
//     `Dear ${items}! You are invited in the more category list on the dinner.`
//   )
// );

//Task #17
// let persons: string[] = ['Kashif', 'Bilal', 'Osama', 'Taha', 'Hamza']

// console.log('I can invite only two people for dinner.')

// Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them
// know you’re sorry you can’t invite them to dinner.
// console.log('Hi '+ persons.pop() + ' I want to say sorry but i cant invite you for dinner.')
// console.log('Hi '+ persons.pop() + ' I want to say sorry but i cant invite you for dinner.')
// console.log('Hi '+ persons.pop() + ' I want to say sorry but i cant invite you for dinner.')

// Print a message to each of the two people still on your list,
// letting them know they’re still invited.
// console.log('Hi '+ persons[0] + ' You are invited for dinner tonight.')
// console.log('Hi '+ persons[1] + ' You are invited for dinner tonight.')

// Remove the last two names from your list, so you have an empty list. Print your list to make sure
// you actually have an empty list at the end of your program.

// persons.pop();
// persons.pop();
// console.log(persons);

//Task #18
// Store the locations in a array. Make sure the array is not in alphabetical order.
// let locations: string[] = ['Russia', 'Indonesia', 'Japan', 'America', 'China']

// // Print your array in its original order.
// locations.map((element)=>{
//     console.log(element);
// });
// console.log('---------------------');

// // Print your array in alphabetical order without modifying the actual list.
// let sorted_locations = [...locations].sort();
// sorted_locations.map((element)=>{
//     console.log(element);
// });
// console.log('---------------------');

// Show that your array is still in its original order by printing it.
// locations.map((element)=>{
//     console.log(element);
// });
// console.log('---------------------');

// Print your array in reverse alphabetical order without changing the order of the original list.
// let reverse_sorted_locations = [...locations].sort();
// reverse_sorted_locations.reverse().map((element)=>{
//     console.log(element);
// });
// console.log('---------------------');

// Show that your array is still in its original order by printing it.
// locations.map((element)=>{
//     console.log(element);
// });
// console.log('---------------------');

// Reverse the order of your list. Print the array to show that its order has changed.
// locations.reverse();
// locations.map((element)=>{
//     console.log(element);
// });
// console.log('---------------------');

// Reverse the order of your list again. Print the list to show it’s back to its original order.
// locations.reverse();
// locations.map((element)=>{
//     console.log(element);
// });
// console.log('---------------------');

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has
// been changed.
// locations.sort();
// locations.map((element)=>{
//     console.log(element);
// });
// console.log('---------------------');

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that
//  its order has changed.
// locations.sort().reverse();
// locations.map((element)=>{
//     console.log(element);
// });
// console.log('---------------------');

//Task #19
// let names: string[] = ['Anas', 'Bilal', 'Taha']
// console.log(names.length);

// Task #20
// let items: string[] = ['K2', 'Bike', 'English', 'Sofa']
// console.log(items)

// Task #21
// let items = {
//   name: 'Zaid',
//   email: 'xyz@gmail.com',
//   phone: 3222869256,
//   isMarried: true
// };

//Task #22
// const friends : string[] = ["ali", "bilal","qasim"]
// //console.log(friends{1})
// console.log(friends[0])

//Task #23
// let car = 'corolla'
// let cars = ['vitz', 'mehran', 'cultus']

//  True Statements
// it will return true bcz car name is 'corolla'
// console.log(car === 'corolla')
// it will return true bcz car name is string type
// console.log((typeof car) === 'string')
// it will return true bcz cars array contains 3 elements
// console.log(cars.length === 3)
// it will return true bcz first element of cars array is 'vitz'
// console.log(cars[0] === 'vitz')
// it will return true bcz first element of cars array is not 'mehran'
// console.log(cars[0] !== 'mehran')

// console.log('---------------');

// False Statements
//  it will return false bcz car name is not 'cultus'
// console.log(car === 'cultus')
//  it will return false bcz car name is not boolean type
// console.log((typeof car) === 'boolean')
//  it will return false bcz cars array contains 3 elements
// console.log(cars.length === 4)
//  it will return false bcz first element of cars array is not 'cultus'
// console.log(cars[0] === 'cultus')
//  it will return false bcz first element of cars array is 'vitz'
// console.log(cars[0] === 'mehran')

// //Task #24
// let name1: string = 'Abdullah'
// let mynum: number = 50;
// let myarr = ['car', 'bike', 'plane']

// // Tests for equality and inequality with strings
// console.log(name1 === 'Abdullah');
// console.log(name1 !== 'Abdullah');

// console.log('-----------------');

// // Tests for equality and inequality with strings
// console.log(name1.toLowerCase() === 'abdullah');
// console.log(name1.toLowerCase() !== 'abdullah');

// console.log('-----------------');

// Numerical tests involving equality and inequality, greater than and less than, greater than
// or equal to, and less than or equal to
// console.log(mynum == 50);
// console.log(mynum != 50);
// console.log(mynum > 40);
// console.log(mynum < 40);
// console.log(mynum >= 50);
// console.log(mynum <= 40);

// console.log('-----------------');

// // Tests using "and" and "or" operators
// console.log((mynum == 30) && (mynum >= 50));  //if both cond gets true then results true
// console.log((mynum == 50) || (mynum < 10));   //if anyone cond gets true then results true

// console.log('-----------------');

// // Test whether an item is in a array
// console.log(myarr.indexOf('car') !== -1);
// console.log(myarr.indexOf('train') !== -1);

//Task #25
// let alien_color: string = 'green'

// Write an if statement to test whether the alien’s color is green. If it is, print a message
// that the player just earned 5 points.
// if(alien_color === 'green'){
//     console.log('player just earned 5 points.');
// }else{

// }

// Write one version of this program that passes the if test and another that fails.
// (The version that fails will have no output.)

//Task 26
//let alien_color: string = 'green'

/* If the alien’s color is green, print a statement that the player just earned 5 points for 
shooting the alien. */
/*  If the alien’s color isn’t green, print a statement that the player just earned 10 points. */
/* Write one version of this program that runs the if block and another that runs the else block. */
// if(alien_color === 'green'){
//     console.log('player just earned 5 points for shooting the alien.');
// }else{
//     console.log('player just earned 10 points.');
// }

// let alien_color1: string = 'red'
// if(alien_color1 === 'green'){
//     console.log('player just earned 5 points for shooting the alien.');
// }else{
//     console.log('player just earned 10 points.');
// }

//Task #27
// let alien_color1: string = 'green'

// if(alien_color1 == "green"){
//     console.log("player earned 5 points.");
// }else if(alien_color1 == "yellow"){
//     console.log("player earned 10 points.");
// }else if(alien_color1 == "red"){
//     console.log("player earned 15 points.");
// }

// console.log('----------------');

// let alien_color2: string = 'yellow'

// if(alien_color2 == "green"){
//     console.log("player earned 5 points.");
// }else if(alien_color2 == "yellow"){
//     console.log("player earned 10 points.");
// }else if(alien_color2 == "red"){
//     console.log("player earned 15 points.");
// }

// console.log('----------------');

// let alien_color3: string = 'red'

// if(alien_color3 == "green"){
//     console.log("player earned 5 points.");
// }else if(alien_color3 == "yellow"){
//     console.log("player earned 10 points.");
// }else if(alien_color3 == "red"){
//     console.log("player earned 15 points.");
// }

//Task #28
// let age: number = 30;

// if(age < 2){
//     console.log("person is a baby.");
// }else if(age >= 2 && age < 4){
//     console.log("person is a toddler.");
// }else if(age >= 4 && age < 13){
//     console.log("person is kid.");
// }else if(age >= 13 && age < 20){
//     console.log("person is teenager.");
// }else if(age >= 20 && age < 65){
//     console.log("person is adult");
// }else if(age >= 65){
//     console.log("person is an elder.");
// }

//Task #29
// let favorite_fruits: string[] = ['apple', 'mango', 'orange']

// if(favorite_fruits.indexOf('cherry') !== -1){
//     console.log("You really like cherry!");
// }

// if(favorite_fruits.indexOf('watermelon') !== -1){
//     console.log("You really like watermelon!");
// }

// if(favorite_fruits.indexOf('orange') !== -1){
//     console.log("You really like orange!");
// }

// if(favorite_fruits.indexOf('pineapple') !== -1){
//     console.log("You really like pineapple!");
// }

// if(favorite_fruits.indexOf('kivi') !== -1){
//     console.log("You really like kivi!");
// }

//Task #30
// let usernames: string[] = ['editor', 'subscriber', 'admin', 'guest']

// usernames.map((element)=>{
//     if(element === 'admin'){
//         console.log('Hello admin, would you like to see a status report?');
//     }else{
//         console.log(`Hello ${element}, thank you for logging in again.`);
//     }
// })
///////////////////////////////////////Second Method/////////////////////////////////////////////////
// let users : string [] = ["Eric", "Ali","Subhan","Admin"]
// for(let user of users){
//     if(user ==="Admin"){
//         console.log("Hello Admin, Would you like to see status report?")
// } else{
//     console.log(`Hello ${user}, Thank you for logging in again`)
// }
// }

//Task #31
// let users = []

// if(users.length == 0){
//     console.log("We need to find some users!");
// }

//Task #32
// let current_users: string[] = ['abdul','amjad','Kashif','Jameel','osama']
// let new_users: string[] = ['ahmed','amjad','kashif','Bilal','zaid']

// let current_users1 = current_users.map((val)=>{
//     return val.toLowerCase();
// })

// new_users.map((user)=>{
//     if(current_users1.indexOf(user.toLowerCase()) !== -1){
//         console.log(`${user} will need to enter a new username.`);
//     }else{
//         console.log(`${user} username is available.`);
//     }
// })
//Second Method
// let current_users: string[] = ["abdul", "amjad", "Kashif", "Jameel", "osama"];
// let new_users: string[] = ["ahmed", "amjad", "kashif", "Bilal", "zaid"];
// let current_users_lower: string[] = current_users.map((user) =>
//   user.toLowerCase()
// );
// for (let new_user of new_users) {
//   if (current_users_lower.includes(new_user.toLowerCase())) {
//     console.log(`${new_user} will need to enter a new username.`);
//   } else {
//     console.log(`${new_user} username is available.`);
//   }
// }

//Task #33
// let numers = [1,2,3,4,5,6,7,8,9]

// numers.map((val)=>{
//     if(val == 1){
//         console.log('1st');
//     }else if(val == 2){
//         console.log('2nd');
//     }else if(val == 3){
//         console.log('3rd');
//     }else if(val == 4){
//         console.log('4th');
//     }else if(val == 5){
//         console.log('5th');
//     }else if(val == 6){
//         console.log('6th');
//     }else if(val == 7){
//         console.log('7th');
//     }else if(val == 8){
//         console.log('8th');
//     }else if(val == 9){
//         console.log('9th');
//     }
// })

//Task #34
// let pizza_flavours: string[] = ['Pepperoni', 'B b q chicken', 'Pizza Margherita']

// pizza_flavours.map((val)=>{
//     console.log(val);
// })

// pizza_flavours.map((val)=>{
//     console.log('I like the ' + val + ' pizza.');
// })
// console.log("I really love pizza!");

//Task #35
// let animals: string[] = ['cow', 'cat', 'parrot']

// animals.map((animal)=>{
//     console.log(animal);
// })

// animals.map((animal)=>{
//     console.log(animal + ' is best as a pet.');
// })

// console.log('Any of these animals would make a great pet!');

//Task #36
// const make_shirt = (size: number, text: string) =>{
//     console.log(`The size of the shirt is: ${size} and the text on the shirt is: "${text}"`);
// }

// make_shirt(12, 'I love my DAD.');

//Task #37
// let make_shirt = (size = 'L', msg = 'I love TypeScript') =>{
//     if(size == 'L' || size == 'M'){
//         console.log(`Size: ${size}, msg: ${msg}`);
//     }else{
//         console.log(`Size: ${size}, msg: this is different msg.`);
//     }
    
// }

// make_shirt('L');
// make_shirt('M');
// make_shirt('S');

//Task #38
// let describe_city = (city :string, country :string = "Pakistan")=>{
//     console.log(`${city} is in ${country}`);
    
// }

// describe_city('karachi');
// describe_city('Hyderabad');
// describe_city('Delhi', 'India');

//Task #39
// let describe_city = (city :string, country :string)=>{
//     console.log(`"${city}, ${country}"`);
// }

// describe_city('karachi', 'Pakistan');
// describe_city('Hyderabad', 'Pakistan');
// describe_city('Delhi', 'India');

//Task #40
// let make_album = (name:string, title:string, tracks = 0)=>{
//     if (tracks == 0) {
//         return {
//             name, title
//         }
//     }else{
//         return {
//             name, title, tracks
//         }
//     }
// }

// let album1 = make_album('abdul', 'nature');
// let album2 = make_album('bilal', 'forest');
// let album3 = make_album('hamza', 'ground', 3);

// console.log(album1);
// console.log(album2);
// console.log(album3);
//Second Method//
// function make_album(artist:string,title:string):{artist:string;title:string}{
//     const dictionaries={
//         artist:artist.charAt(0).toUpperCase()+artist.slice(1),
//         title:title.charAt(0).toUpperCase()+title.slice(1),
//     };
//     return dictionaries;
// }
// let album =make_album("ali","light")
// console.log(album)
// album =make_album("adnan","red wine")
// console.log(album)
// album =make_album("zafar","nature")
// console.log(album)

//Task #41
// let magicians: string[] = ['Bilal', 'Taha', 'Osama']

// let show_magicians  = (arr: string[])=>{
//     magicians.map((name)=>{
//         console.log(name);
//     })
// }
// show_magicians(magicians);
//Second Method//
// function show_magicians(magicians:string[]):void{
//     for(const magician of magicians){
//         console.log(magician.charAt(0).toUpperCase()+magician.slice(1));

//     }
// }
// const magician:string[]= ['bilal', 'taha', 'osama']
// show_magicians(magician)

//Task 42
// var magicians = ['Bilal', 'Taha', 'Osama'];
// var make_great = function () {
//     magicians = magicians.map(function (val) {
//         return 'The Great ' + val;
//     });

// };
// make_great();
// var show_magicians = function () {
//     magicians.map(function (name) {
//         console.log(name);
//     });
// };
// show_magicians();
// function show_magicians(magicians:string[]):void{
//         for(const magician of magicians){
//              console.log(magician.charAt(0).toUpperCase()+magician.slice(1));
//              }
//              }
// function make_great(magicians:string[]):void{
//     for(let i=0; i<magicians.length;i++){
//         magicians[i]=magicians[i] +  " the great"
//     }
// }             
// const magicians2:string[]=['Bilal', 'Taha', 'Osama'];
// make_great(magicians2)
// show_magicians(magicians2)

//Task #43//
// let magicians: string[] = ['Bilal', 'Taha', 'Osama']

// let make_great = ()=>{
//     magicians1 = magicians.map((val)=>{
//         return 'The Great '+ val
//     })
//     return magicians1;
// }
// let magicians1 = make_great();

// let show_magicians = (magicians)=>{
//     magicians.map((name)=>{
//         console.log(name);
//     })
// }
// show_magicians(magicians);
// show_magicians(magicians1);

//Task #44
// let sandwich = (...items:string[])=>{
//     console.log("You have ordered sandwich with following ingrediants:");
//     items.map((item)=>{
//         console.log(item);
//     })
// }

// sandwich('chicken');
// console.log('----------');
// sandwich('tomato', 'potato');
// console.log('----------');
// sandwich('onion','cherry','cheeze');

//Task 45
//  let car;
//  let make_car = (manufacturer:string, model:string, ...options: { color: string; engine: string; petrol: string; }[] )=>{ //:any
//      car = {manufacturer, model, options: options[0]}
//  }
//  make_car('suzuki', 'corolla', {color:'black', engine: '1200', petrol: '40'});
// console.log(car);