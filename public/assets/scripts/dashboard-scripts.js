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
// console.log(greetings)
// console.log(greetings[0] + greetings[1])
if(greetings[greetings.length-2] === "P" && (greetings[0] + greetings[1]) <= 4){
    greetingPack.textContent = "";
    greetingPack.textContent = "Good Afternoon, "
};
if(greetings[greetings.length-2] === "P" && (greetings[0] + greetings[1]) > 4){
    greetingPack.textContent = "";
    greetingPack.textContent = "Good Evening, "
}
if(greetings[greetings.length-2] === "A" && (greetings[0]+ greetings[1] < 12)){
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