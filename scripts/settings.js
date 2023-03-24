let sdata = JSON.parse(sessionStorage.getItem("CompanyuserDatas"));

// console.log(sdata);
let susername = document.querySelector(".susername");
let semail = document.querySelector(".semail");
let spassword = document.querySelector(".spassword");
let sid = document.querySelector(".sid");
susername.value = sdata.userName;
semail.value = sdata.email;
spassword.value = sdata.password;
sid.value = sdata.idCardValue;

let eye = document.querySelector(".eyes");
eye.onclick = (e) =>{
    // console.log(e.srcElement.parentElement.previousElementSibling.type)
    if(e.srcElement.innerText === "visibility_off"){
        e.srcElement.innerText = "";
        e.srcElement.innerText = "visibility"
        e.srcElement.parentElement.previousElementSibling.type = "text"
    }else{
        e.srcElement.innerText = "";
        e.srcElement.innerText = "visibility_off";
        e.srcElement.parentElement.previousElementSibling.type = "password"
    }
}