// document.getElementById('showResultBtn').addEventListener('click', function() {
//     const resultDiv = document.getElementById('result');
//     if (0.1 + 0.2 === 0.3) {
//         resultDiv.textContent = "The result is true.";
//     } else {
//         resultDiv.textContent = "The result is false.";
//     }
// });


// let age = 25;
// if(age>18){
//     console.log("You can vote" , true);
// }

// let a = prompt("Enter a number");
// if(a%5==0){
//     console.log(true);
// }else{
//     console.log(false);
// }

// const product1 = {
//     name:"Parker Jotter Standard CT Ball Pen",
//     color:"Black",
//     rating:4,
//     offer:"5%",
//     price:270
// };

// console.log(product1);

// let count = 0;
// let arrow = (str)=>{
//     for(let i=0; i<str.length-1; i++){
//         if(str[i]==='a' || str[i]==='e' || str[i]==='o' || str[i]==='u' || str[i]==='i'){
//             count++;
//         }
//     }
//     return count;
// }

// let str = prompt("Enter a String");
// console.log(arrow(str));

// let arr = [1,2,3,4,5,5,6,7];

// arr.forEach(function printVal(val){
//     console.log(val);
// })

// arr.forEach((val)=>{
//     console.log(val);
// })

// let arr1 = [1,2,3,4,5,6,7,8,9,10];

// arr1.forEach((square)=>{
//     console.log(square*square);
// })

let h2=document.querySelector("h1");
h2.innerText = h2.innerText + " to my page";
console.dir(h2.innerText);

// let newBtn = document.createElement("button");
// newBtn.innerText("click me!");

// newBtn.style.color="white";
// newBtn.style.backgroundColor="red";
// document.querySelector("body").prepend(newBtn);


let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    currMode = (currMode === "light") ? "dark" : "light";
    console.log(currMode);
});


let promise = new Promise((resolve, reject)=>{
    console.log("I am Promise");
})


//Callbacks
function fetchData(callback) {
    setTimeout(() => {
      callback("Data fetched by Callback!");
    }, 2000);
  }
  
  fetchData((message) => {
    console.log(message);  // Logs "Data fetched!" after 2 seconds
  });
  

  //Callback Hell
// asyncFunction1((result1) => {
//     asyncFunction2(result1, (result2) => {
//       asyncFunction3(result2, (result3) => {
//         // And so on...
//       });
//     });
//   });
  

//Promises
const fetchData1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success/failure
      if (success) {
        resolve("Data fetched by Promise!");
      } else {
        reject("Error occurred");
      }
    }, 4000);
  });
  
  fetchData1
    .then((message) => {
      console.log(message);  // Logs "Data fetched!" after 2 seconds
    })
    .catch((error) => {
      console.log(error);  // Logs "Error occurred" if the promise is rejected
    });
  

    //async/await
    async function fetchData2() {
        const result = await new Promise((resolve, reject) => {
          setTimeout(() => resolve("Data fetched by Async/Await!"), 6000);
        });
        console.log(result);  // Logs "Data fetched!" after 2 seconds
      }
      
      fetchData2();
      