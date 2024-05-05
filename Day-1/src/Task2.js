//Day 1 Task 2
// Write a javascript function to create a copy of an object. 
// The function will take input and an object and return a copy of the same object
// The copy should take care of any common references 
let userDetails = {
    name:"Breann",
    age:20,
    gender:"Female",
    entertainment:"hotstar",
    socialmedia : {
        facebook:"breann",
        Twitter :{
            ac1:"haihilauh",
            ac2:"kjhdgkbuas",

        }
    }
    
}


let randomdetails = userDetails;
randomdetails.address = "global city";
//1 spread operator
let ud1 = {...userDetails}

//2 object.assign
let randomDetails2 = Object.assign({},userDetails);
randomDetails2.name = "Kunal";


// json.parse stringify
let randomdetails3 = JSON.parse(JSON.stringify(userDetails));
randomdetails3.name = "Annirudha";
randomdetails3.socialmedia.Twitter.ac2 = "hjsdbkjsadv";


//copy check
let copyCheck = userDetails === randomdetails;
console.log(copyCheck);
let copyCheck2 = ud1 === randomdetails3;
console.log(copyCheck2);

//log
console.log(randomDetails2);
console.log(randomdetails3);
