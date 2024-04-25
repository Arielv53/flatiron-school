/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated April 24, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// ~ the "click" event
const today = document.querySelector("#today");
today.addEventListener("click", (event) => {
    console.log("today was clicking");
    console.log(event.target);
});

// ~ the "submit" event
document.querySelector("form").addEventListener("submit", (event) => {
    //  since the default behavior of "submit" is to redirect the page to a back end app, lets prevent that
    event.preventDefault();
    //  take the date that was inputted by the user, and set it as the text of #sometime
    const date = event.target["date"].value;    // target is where you are listening for event 
    const sometime = document.querySelector("#sometime");
    sometime.textContent = date;
    // sometime.textContent =
});
// ~ challenges
// 1. [easy] Add another click event handler.
// 2. [medium] Add some non-click, non-submit event listener to the page.

document.body.addEventListener("keyup", (event) => {
    const display = document.createElement('p');
    display.textContent = "Keyup was clicked!";
    document.querySelector("h1").append(display);
  });

// 3. [hard] Add an image, and a form with one text input to the page.
//    On submit, have the image change to the URL specified in the text input.

document.querySelector("#picture").addEventListener("submit", (event) => {
    event.preventDefault();
    const newPic = event.target['url'].value;

    const newImg = document.querySelector("img");
    newImg.src = newPic;
    
});


// 4. [bonus] Add an event handler to #today so that whenever some or all of its text is copied,
//    that text is set as the content of #sometime.