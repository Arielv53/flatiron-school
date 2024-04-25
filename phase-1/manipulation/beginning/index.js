/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`
// an application programming interface is a bridge btw us and a data source
// apis let us (C)reate, (r)ead, (u)pdate, and (d)elete data in such external sources
document  // an api for communication btw JS and HTML

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("h1"));   // read by tag name
console.log(document.querySelector("#today"));   //  read by id
console.log(document.querySelector(".address"));   //   read by class
console.log(document.querySelectorAll("p"));    //   read multiple elements
console.log(document.querySelectorAll("#today").textContent);    //    

const p = document.querySelector("#today");    //   saving a node to a variable
console.log(p.textContent);

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#forever").textContent = "april 24, 2024";

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#forever").remove();

// ~ Create + Append a node
// -> createElement(), append()
const newh2 = document.createElement("h2");
//  (ex)  parent.append(child);
newh2.textContent = "sometime in the future";
document.body.append(newh2);

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining


function displayList() {

const list = document.querySelector("#dates");
const newList = document.createElement("li");
newList.textContent = "Books";
newList.textContent = "The shining";
list.append(newList);

};

displayList();

// 2. Replace the <strong> element with a newly created one.


document.querySelector()
