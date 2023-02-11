// let definingData = JSON.parse(sessionStorage.getItem("CompanyuserDatas"));
// // Set time for greeting
let greetingPack = document.querySelector(".time");
// let namegreeting = document.querySelector(".namegreeting");
// let displayingType = (container, container2, type) =>{ 
//     container.textContent = "";
//     container.textContent = `Admin ${type}`
// }
let observer = document.querySelector(".tag");
let theName = document.querySelector(".entername")
let payOb = (container, container2, tag, tag2) =>{
    container.textContent = "";
    container.textContent =  `${tag}`
    container2.textContent = "";
    container2.textContent = `${tag2}`
}
// // Give addresses if the type of login was an admin
// if(definingData.type === "Admin"){
//    displayingType(namegreeting, definingData.displayName);
//    payOb(observer, theName, "Administrator", definingData.displayName)
// }else if(definingData.type === "Manager"){
//     displayingType(namegreeting, definingData.displayName);
//     payOb(observer,theName, "Manager", definingData.displayName)
// }else if(definingData.type === "HR Registrar"){
//     displayingType(namegreeting, definingData.displayName);
//     payOb(observer, theName, "HR Registrar", definingData.displayName);
// }
// Greet according to the time of the day
let greetings = new Date().toLocaleTimeString();
// console.log(greetings)
// console.log(greetings[0])
// console.log(greetings[1])
// console.log(greetings[greetings.length-2])
if(greetings[greetings.length-2] === "P" && (greetings[0] + greetings[1] || greetings[0] <= 4)){
    greetingPack.textContent = "";
    greetingPack.textContent = "Good Afternoon, "
};
if(greetings[greetings.length-2] === "P" && (greetings[0] + greetings[1] || greetings[0] > 4)){
    greetingPack.textContent = "";
    greetingPack.textContent = "Good Evening, "
}
if(greetings[greetings.length-2] === "A" && (greetings[0]+ greetings[1] || greetings[0] < 12)){
    console.log("Morning");
    greetingPack.textContent = "";
    greetingPack.textContent = "Good Morning, "
}
// ------------------------------------------------------------ //

let addNew = document.querySelector(".createNew");
let displayModal = () =>{
        let modal = document.querySelector(".modal");
        let modalpack = document.querySelector(".modal-pack")
        if(modal.classList.contains("displayblock")){
            modal.classList.remove('displayblock');
          
        }else{
            modal.classList.add("displayblock");
            modalpack.style.transform = "translateY(0rem)"
        }
}
addNew.addEventListener("click", displayModal);

window.onclick = (event) => {
    // console.log("hads")
    let modal = document.querySelector(".modal")
    let modalpack = document.querySelector(".modal-pack")
    if (event.target == modal) {
      modal.classList.remove("displayblock");
      modalpack.style.transform = "translateY(30rem)"
      let main = document.querySelector(".main");
      main.style.overflow = "scroll";
    }
}

let maneuver = (e) => {
    
}