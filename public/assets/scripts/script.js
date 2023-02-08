// Get all the access handles
let persons = document.querySelectorAll(".person");

// Loop through
persons.forEach((person) =>{
    // Add a click function
    person.addEventListener("click", ()=>{
        // click function checks the text content of the first child to determine which user was clicked
       if(person.firstElementChild.textContent === "Person 1"){
        console.log("admin clicked");
        location.href="./public/assets/pages/admin.html"
       }
       else if(person.firstElementChild.textContent === "Person 2"){
        console.log("Manager clicked");
        location.href = "./public/assets/pages/manager.html"
       }
       else if(person.firstElementChild.textContent === "Person 3"){
        console.log("HR clicked");
        location.href = "./public/assets/pages/hr.html"
       }
    })
});