// // Key components

// // Key Components:

// // Node: The fundamental unit of the DOM, representing an element, attribute, text, or comment.
// // Element: A specific type of node that represents an HTML element, such as <div>, <p>, or <img>.
// // Attribute: A property associated with an element, such as id, class, or src.
// // Text: A type of node that represents plain text content.
// // Comment: A type of node that represents a comment within the HTML.

// // let ul = document.querySelectorAll('li');

// // ul.forEach((item,index)=>{
// // console.log(index)
// // index++ls
// // item.style.color ='red'
// // item.textContent += ' '+index;
// // })

// let first = document.getElementById("first");

// first.style.color = "blue";
// first.textContent = "Cold palmer";
// first.innerHTML =
//   "<img width='200px' src='https://cms.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery'/>";

// let parent = document.getElementById('parent')

// let newItem = document.createElement('li')

// newItem.innerHTML = 'new item'

// parent.append(newItem)

// newItem.addEventListener('mouseover',()=>{
//     newItem.style.color = 'red'
//     newItem.style.fontSize= '30px'
// })

// newItem.addEventListener('mouseout',()=>{
//     newItem.style.color = 'black'
//     newItem.style.fontSize= '20px'

// })

// newItem.addEventListener('click',()=>{
//     newItem.style.color = 'green'
//     newItem.style.fontSize= '20px';
//     newItem.classList.add('bg')
// })

// function bgchange(){
//     newItem.classList.remove('bg')
// }

tasks = [];

const input = document.querySelector("input");
const button =
  document.getElementById("addTasks");
const form = document.querySelector("form");
const taskList =
  document.getElementById("taskList");

form.addEventListener('submit' ,(e)=>{
  e.preventDefault()
})

button.addEventListener("click", () => {
  userInput = input.value;
  if (userInput.length > 0){
    tasks.push(userInput);
  }
  input.value = "";
  publishList();
});

function publishList() {
    taskList.innerHTML = ''
  tasks.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = item;
    taskList.append(listItem);
  });
}