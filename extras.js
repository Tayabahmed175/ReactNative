let employees = [
  { name: "Ali", experience: 6, basicSalary: 50000, rating: 4 },
  { name: "Ahmed", experience: 3, basicSalary: 45000, rating: 5 },
  { name: "Usman", experience: 7, basicSalary: 60000, rating: 4 }
];

let updateSalary = (employee) => {
  let arr = [];
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].experience >= 5 && employee[i].rating == 4) {
      employee[i].basicSalary += employee[i].basicSalary * 0.015;
      arr.push(employee[i]);
    }
  }
  return arr;
};

console.log(updateSalary(employees));

1

let prods = [
    {Name:'Wavy',qty:2},
    {Name:'Cake',qty:3},
    {Name:'coke',qty:0},
];

let chkAvail = (prod) => {
    for(let i=0; i<prod.length;i++){
    if(prod[i].qty > 0)
        console.log(`${prod[i].Name}: Available`);
    else
         console.log(`${prod[i].Name}: Out of Stock`);
}
}
chkAvail(prods);


2
let prodPrices = [40 ,50,60 ,80];

let addBill = (listProdPrices) => {
    let sum = 0;
    for(let i = 0; i< listProdPrices.length; i++){
        sum += listProdPrices[i];
    }
    return sum;
}
console.log(addBill(prodPrices));



3
let Names = [
    { fName: 'Tayyab', lName: 'Ahmed' },
    { fName: 'Masooma', lName: 'Kiran' },
    { fName: 'Areeba', lName: 'Ahmed' },
];

let combineName = (listName) => {
    for (let i = 0; i < listName.length; i++) {
        console .log(listName[i].fName+ ' ' +listName[i].lName)

    }
}

combineName(Names);

let employee = [
    { id: 1, name: "Tayyab", age: 22 },
    { id: 2, name: "Masooma", age: 19 },
    { id: 3, name: "Areeba", age: 25 },
    { id: 4, name: "Ahmed", age: 17 },
    { id: 5, name: "Ali", age: 30 }
];

let findEmployee = (listEmployee,iD) => {
    for(let i=0; i<listEmployee.length; i++){
        if(listEmployee[i].id == iD){
            console.log(listEmployee[i]);
        }
    }
}
findEmployee(employee,2);


let students = [
    { id: 1, name: "Tayyab", marks: 78 },
    { id: 2, name: "Masooma", marks: 92 },
    { id: 3, name: "Areeba", marks: 65 },
    { id: 4, name: "Ahmed", marks: 40 },
    { id: 5, name: "Ali", marks: 55 }
];

let chkPassedStd = (listStudents) => {
    let passed = [];
    let failed = [];
    for (let i = 0; i < listStudents.length; i++) {
        if (listStudents[i].marks >= 50) {
        passed.push(listStudents[i]);
        } else {
          failed.push(listStudents[i]);
        }
    }
    return {passed,failed};
}

let result = chkPassedStd(students);
console.log ("Passed",result.passed );
console.log ("Failed",result.failed );

let students = [
    { id: 1, name: "Tayyab", marks: 78 },
    { id: 2, name: "Masooma", marks: 92 },
    { id: 3, name: "Areeba", marks: 65 },
    { id: 4, name: "Ahmed", marks: 40 },
    { id: 5, name: "Ali", marks: 55 }
];

let chkPassedStd = (listStudents) => {
    for (let i = 0; i<listStudents.length; i++ ){
        if(listStudents[i].marks >= 50){
            console.log('Passed Students', listStudents[i]);
        }else{
             console.log('Fail Students' , listStudents[i]);
        }
    }
}

chkPassedStd(students);

let defaultSettings = {
    email: true,
    sms: true,
    push: true
};

let userChanges = {
    sms: false,
    push: false
};

let applyPreferences = (listDefault, listChanges) => {
    let finalSettings = { ...listDefault };

    for (let key in listChanges) {
        finalSettings[key] = listChanges[key];
    }

    return finalSettings;
};

console.log(applyPreferences(defaultSettings, userChanges));






function cbFunction(){
    console.log('YOOOO!');
    console.log('Welcome');
}

setTimeout(cbFunction,5000);

function add (a,b,sub){
    console.log (a+b);
    sub(a,b);
}

function sub (c,d){
  console.log (c-d);
}

add(2,2,sub);

function iterateArray(item){
    item += 10;
    console.log(item);
}

let ages =[20,30,40,50];
ages.forEach(iterateArray);
console.log(ages)
 
 let ages =[20,30,40,50];

 ages.forEach((item,ind,arr) => {
    arr[ind] += 10;
 });

 console.log(ages);

let marks = [23,50,60];

let newMarks = marks.map((item) => item+5);
console.log(newMarks);
