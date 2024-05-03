// functions thats takes the parameter 
//we constructs a candidtes that contain entity thats are name, age, phoneno, qualification,expereince
// we make shallow as well as deep copy of that elements 
//we create a  code that return name as the strings and number as the number 



const candidate1 ={
    name: "Aditya",
    age: 21,
    phoneno: 73387235,
    qualification:"Bsc",
    experience: "1 year"
}
const candidate2 ={
    name: "kunal",
    age: 22,
    phoneno: 78347925,
    qualification:"Bcom",
    experience: "2 year"

}
const candidate3 ={
    name: "Breann",
    age: 24,
    phoneno: 733872325,
    qualification:"Bsc physics",
    experience: "4 year"
}
const candidate4 ={
    name: "Anniruddha",
    age: 22,
    phoneno: 733287235,
    qualification:"Bsc",
    experience: "1 year"
}
function createCandidatesObjects(name,
age,
phoneno,
qualification,
experience ,
){
    let tempCanditates ={
        name: name,
        age: age,
        phoneno: phoneno,
        qualification: qualification,
        experience: experience,
    };
    return tempCanditates;
}
//fuction for the name,age,phoneno,qualification,experience 
function Candidate (name,age,phoneno,qualification,experience){
    this.name=name;
    this.age=age;
    this.phoneno=phoneno;
    this.qualification=qualification;
    this.experience=experience;

    return this;
}
let candidate6 =  {...candidate2}
candidate6.experience = "5 year" ;

//changes the input in the tab of name , phoneno, qualification
const candidate5 = { ...candidate3};
candidate5.name='asmi';
candidate5.phoneno=783972934;
candidate5.qualification='bcom';
//task 2
// create a javascript function that takes input as object and return the stucture of that object
function getCandidate (anyobject){
    console.log(`name is ${anyobject.name} age is ${anyobject.age} phone no will ${anyobject.phoneno} 
    Qualification is ${anyobject.qualification} they have  experience of ${anyobject.experience}`)
}


//create a code that return name as string and number as the number :
//following code thats represent 
let name = "aditya "
let age ="22"

console.log("name="+typeof(aditya));
console.log("age="+typeof(22));