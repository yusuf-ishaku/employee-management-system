let definingData = JSON.parse(sessionStorage.getItem("CompanyuserDatas"));
// // // Set time for greeting
let greetingPack = document.querySelector(".time");
let namegreeting = document.querySelector(".namegreeting");
let displayingType = (container, name, type ) =>{ 
    container.textContent = "";
    container.textContent = `${type} ${name}`
}
let observer = document.querySelector(".tag");
let theName = document.querySelector(".entername")
let payOb = (container, container2, tag, tag2) =>{
    container.textContent = "";
    container.textContent =  `${tag}`
    container2.textContent = "";
    container2.textContent = `${tag2}`
}
// Give addresses if the type of login was an admin
if(definingData.type === "Admin"){
    displayingType(namegreeting, definingData.displayName, definingData.type);
    payOb(observer, theName, "Administrator", definingData.displayName);
    let analytics = document.querySelectorAll(".pk");

    analytics.forEach((element) => {
        element.addEventListener("click", () => {
            if (element.classList.contains("profile")) {
                console.log("profile")
            } if (element.classList.contains("hr")) {
                console.log("hr")
            } if (element.classList.contains("favourites")) {
                console.log("manager");
            }
        })
})
}else if(definingData.type === "Manager"){
    displayingType(namegreeting, definingData.displayName, definingData.type);
    payOb(observer, theName, "Manager", definingData.displayName);
    let cr = document.querySelector(".createNew");
    cr.setAttribute("aria-disabled", "true");
    let analytics = document.querySelectorAll(".pk");

    analytics.forEach((element) => {
        if (element.classList.contains("profile")) {
            element.onclick = () => {
                console.log("this is manager")
            }
        }
        if (element.classList.contains("hr")) {
            element.onclick = () => {
                console.log("viewing hr")
            }
        } if (element.classList.contains("favourites")) {
            console.log("manager");
            element.style.display = "none";
        }
    });
}else if(definingData.type === "HR Registrar"){
    displayingType(namegreeting, definingData.displayName, definingData.type);
    payOb(observer, theName, "HR Registrar", definingData.displayName);
    let analytics = document.querySelectorAll(".pk");

    analytics.forEach((element) => {
        if (element.classList.contains("profile")) {
            console.log("profile");
            element.onclick = () => {
                console.log("this is hr")
            }
        } if (element.classList.contains("hr")) {
            // console.log("hr");
            element.style.display = "none";
        } if (element.classList.contains("favourites")) {
            element.style.display = "none";
        }
    })
}
// Greet according to the time of the day
// let greetings = new Date().toLocaleTimeString();
// console.log(greetings)
// console.log(greetings[0])
// console.log(greetings[1])
// console.log(greetings[greetings.length-2])
// if(greetings[greetings.length-2] === "P" && (greetings[0] + greetings[1] || greetings[0] <= 4)){
//     greetingPack.textContent = "";
//     greetingPack.textContent = "Good Afternoon, "
// };
// if(greetings[greetings.length-2] === "P" && (greetings[0] + greetings[1] || greetings[0] > 4)){
//     greetingPack.textContent = "";
//     greetingPack.textContent = "Good Evening, "
// }
// if(greetings[greetings.length-2] === "A" && (greetings[0]+ greetings[1] || greetings[0] < 12)){
//     console.log("Morning");
//     greetingPack.textContent = "";
//     greetingPack.textContent = "Good Morning, "
// }
// ------------------------------------------------------------ //

let addNew = document.querySelector(".createNew");
let displayModal = (e) =>{
    let deter= e.srcElement;
    if(!deter.hasAttribute("aria-disabled")){
        let modal = document.querySelector(".modal");
        let modalpack = document.querySelector(".modal-pack")
        if(modal.classList.contains("displayblock")){
            modal.classList.remove('displayblock');
            
        }else{
            modal.classList.add("displayblock");
            modalpack.style.transform = "translateY(0rem)"
            document.querySelector(".main-part").style.top = "0"
        }
    }     
}
addNew.addEventListener("click", displayModal);
let modalclose = document.querySelector(".modal-close");
modalclose.onclick = (event) =>{
    // console.log("rad")
    let modal = document.querySelector(".modal");
    let modalpack = document.querySelector(".modal-pack")

      modal.classList.remove("displayblock");
      modalpack.style.transform = "translateY(30rem)"
      let main = document.querySelector(".main");
      main.style.overflow = "scroll";
      const mediaStream = video.srcObject;
      // Through the MediaStream, you can get the MediaStreamTracks with getTracks():
      const tracks = mediaStream.getTracks();

      // Tracks are returned as an array, so if you know you only have one, you can stop it with: 
      tracks[0].stop();

      // Or stop all like so:
      tracks.forEach(track => track.stop())
}
window.onclick = (event) => {
    // console.log("hads")
    let modal = document.querySelector(".modal")
    let modalpack = document.querySelector(".modal-pack")
    if (event.target == modal) {
      modal.classList.remove("displayblock");
      modalpack.style.transform = "translateY(30rem)"
      let main = document.querySelector(".main");
      main.style.overflow = "scroll";
      const mediaStream = video.srcObject;
      // Through the MediaStream, you can get the MediaStreamTracks with getTracks():
      const tracks = mediaStream.getTracks();

      // Tracks are returned as an array, so if you know you only have one, you can stop it with: 
      tracks[0].stop();

      // Or stop all like so:
      tracks.forEach(track => track.stop())
    }
};


let maneuver = (e) =>{
    // console.log(e.parentElement.id)
    // console.log(e.id);
    let thevalue = e.parentElement.id;
    localStorage.removeItem("value");
    localStorage.setItem("value", JSON.stringify(thevalue));
    location.href = "./chartingpage.html";
}





let aside = document.querySelector(".aside")

let toggler = document.querySelector("#toggler");

let close = document.querySelector(".icon-close");
close.addEventListener("click", () =>{
    let mo = aside.getAttribute("data-visible");
    if(mo == "false"){
        aside.setAttribute("data-visible", "true");
        close.style.display = "inline-block"
    }else if(mo == "true"){
        aside.setAttribute("data-visible", "false");
        close.style.display = "none";
    }
    console.log(window.innerWidth)
});

let defineDisplay = () =>{
    if(window.innerWidth > 992){
        let mo = aside.getAttribute("data-visible");
        if(mo == "true"){
            aside.setAttribute("data-visible", "false");
            close.style.display = "none";
        }
        console.log("red")
    }
};

setInterval(defineDisplay, 100);

toggler.addEventListener("click", () =>{
    let mo = aside.getAttribute("data-visible");
    if(mo == "false"){
        aside.setAttribute("data-visible", "true");
        close.style.display = "inline-block";
    }else if(mo == "true"){
        aside.setAttribute("data-visible", "false");
        close.style.display = "none";
    }
})





