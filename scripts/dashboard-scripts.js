let definingData = JSON.parse(sessionStorage.getItem("CompanyuserDatas"));
// // // Set time for greeting
let greetingPack = document.querySelector(".time");
let namegreeting = document.querySelector(".namegreeting");
let settingHeader = document.querySelector(".user-name");
let displayingType = (container,container2, name, type ) =>{ 
    container.textContent = "";
    container.textContent = `${type} ${name}`;
    container2.textContent = `${type}`
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
    displayingType(namegreeting,settingHeader, definingData.displayName, definingData.type);
    payOb(observer, theName, "Administrator", definingData.displayName);
    let analytics = document.querySelectorAll(".pk");
    analytics.forEach((element) => {
        element.addEventListener("click", () => {
            if (element.classList.contains("profile")) {
                alert("profile")
            } if (element.classList.contains("hr")) {
                // alert("hr")
                location.href = "../pages/hr-list.html"
            } if (element.classList.contains("favourites")) {
                // alert("manager");
                location.href = "../pages/managers-list.html"
            }
        });
    let allLink = document.querySelectorAll(".page-link");
    allLink.forEach(elem =>{
        if(!elem.classList.contains("safe")){
            elem.style.display = "none"
        }
    })
})
}else if(definingData.type === "Manager"){
    displayingType(namegreeting, definingData.displayName, definingData.type);
    payOb(observer, theName, "Manager", definingData.displayName);
    let cr = document.querySelector(".createNew");
    document.querySelector(".unsafe").style.display = "none"
    cr.style.display = "none"
    let analytics = document.querySelectorAll(".pk");

    analytics.forEach((element) => {
        
        if (element.classList.contains("profile")) {
            element.onclick = () => {
                alert("this is manager")
            }
        }
        if (element.classList.contains("hr")) {
            element.style.display = "none";
            element.onclick = () => {
                alert("viewing hr")
            }
        } if (element.classList.contains("favourites")) {
            // alert("manager");
            element.style.display = "none";
        }
    });
}else if(definingData.type === "HR Registrar"){
    displayingType(namegreeting, definingData.displayName, definingData.type);
    payOb(observer, theName, "HR Registrar", definingData.displayName);
    let analytics = document.querySelectorAll(".pk");
    // document.querySelector(".unsafe").style.display = "flex !important";
    let unsafe = document.querySelector(".unsafe");
    
    unsafe.classList.add("the-flex")
    console.log(unsafe)
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
    let allLink = document.querySelectorAll(".page-link");
    allLink.forEach(elem =>{
        if(!elem.classList.contains("safe")){
            elem.style.display = "none"
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
if(definingData.type === "Admin")addNew.style.display = "none"
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
};






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
        // console.log("red")
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

let pageLinks = document.querySelectorAll(".page-link");
// console.log(pageLinks);
let pages = document.querySelectorAll(".pages");
// console.log(pages);

let displayPage = (page, tag) =>{
    pages.forEach((elem) =>{
        if(elem.classList.contains("showing"))elem.classList.remove("showing");
        page.classList.add("showing");
    });
    pageLinks.forEach((elem) =>{
        if(elem.classList.contains("active")){elem.classList.remove("active")}else{tag.classList.add("active")};
    })
};
let settings = document.querySelectorAll(".settings");
settings.forEach((elem, x) =>{
    elem.onclick = () =>{
        settings[x].addEventListener("click", displayPage(settings[1], settings[0]))
    }
});
let homes = document.querySelectorAll(".home");
homes.forEach((elem,x) =>{
    elem.onclick = () =>{
        homes[x].addEventListener("click", displayPage(homes[1], homes[0]))
    }
});
let tasks = document.querySelectorAll(".tasks");
tasks.forEach((elem,x) =>{
    elem.onclick = () =>{
        tasks[x].addEventListener("click", displayPage(tasks[1], tasks[0]))
    }
})
let redas = document.querySelectorAll(".reda");
redas.forEach((elem,x) =>{
    elem.onclick = () =>{
        redas[x].addEventListener("click", displayPage(redas[1], redas[0]))
    }
})
let lives = document.querySelectorAll(".live");
lives.forEach((elem, x) =>{
    elem.onclick = () =>{
        lives[x].addEventListener("click", displayPage(lives[1], lives[0]))
    }
})
let er = document.querySelectorAll(".unsafe");
er.forEach((elem, x) =>{
    elem.onclick = () =>{
        er[x].addEventListener("click", displayPage(er[1], er[0]))
    }
})
