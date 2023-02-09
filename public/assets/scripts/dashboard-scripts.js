let definingData = JSON.parse(localStorage.getItem("CompanyuserDatas"));
// Set time for greeting
let greetingPack = document.querySelector(".time");
let namegreeting = document.querySelector(".namegreeting");
// Give addresses if the type of login was an admin
if(definingData.type === "Admin"){
    namegreeting.textContent = "";
    namegreeting.textContent = `Admin ${definingData.userName}`
}
// Greet according to the time of the day
let greetings = new Date().toLocaleTimeString();
if(greetings[greetings.length-2] === "P" && greetings[0] <= 4){
    greetingPack.textContent = "";
    greetingPack.textContent = "Good Afternoon, "
};
if(greetings[greetings.length-2] === "P" && (greetings[0] > 4 && greetings[0] < 12)){
    greetingPack.textContent = "";
    greetingPack.textContent = "Good Evening, "
}
if(greetings[greetings.length-2] === "A" && (greetings[0] < 12)){
    console.log("Morning");
    greetingPack.textContent = "";
    greetingPack.textContent = "Good Morning, "
}
// ------------------------------------------------------------ //

let addNew = document.querySelector(".createNew");
addNew.addEventListener("click", () =>{
    console.log("REa")
})