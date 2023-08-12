// ! 1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for(let i = 5; i <= 100; i++) {
    console.log(i);
}

// ! 2.მოცემულია მასივი: let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]; ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და 	ნაკლებია 10ზე

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i <= array1.length; i++) {
    if (array1[i] > 0 && array1[i] < 10) {
    console.log(array1[i]);
    }
}

// ! 3.მოცემულია მასივi let array3= [1, 2, 3, 4, 5]; ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array3= [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array3.length; i++) {
    sum += array3[i]
}
console.log(sum);


// !4.მოცემულია მასივი: let array4 = [1, 2, 3, 7, 6, 9];
// !გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

let array4 = [1, 2, 3, 7, 6, 9];
let sum1 = 0;
let X = 0
for(let i = 0; i < array4.length; i++) {
    sum1 += array4[i]
    X = sum1 / array4.length
}
console.log(X);

// ! 5
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};
console.log(user.studentstatus);

// ! 6 თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
// hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

let user1 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}
if(user1.age < 18 && user1.studentstatus == 'active') {
    console.log('hello');
} else if (user1.name == 'levan') {
    console.log('hello levani');
} else if (user1.studentstatus == 'active' || user1.age < 25){
    console.log('hello world');
} else {
    console.log('error');
}


// ! 7.მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];

for(let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if(array[i][j] > 0) {
            console.log(array[i][j]);
        }
    }
}
// ! 8.კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;
// მოცემულია მასივი
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for(let i = 0; i < users.length; i++) {
    if(users[i].status == true) {
        console.log(users[i]);
    }
}


// ! 9.მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. ახალი if ის სინტაქსით დაწერეთ, 
// თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true, ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; 

let x = 'მარიამ'
if(x == 'მარიამ') {
    console.log(true);
} else {
    console.log(false);
}

// !10

let y = 'მარიამ'
const z = 'მარიამ' ? true : false
console.log(z);