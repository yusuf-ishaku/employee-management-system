let definingData = JSON.parse(localStorage.getItem("CompanyuserDatas"));
// console.log(definingData);
let greetingPack = document.querySelector(".time");
let namegreeting = document.querySelector(".namegreeting");
if(definingData.type === "Admin"){
    namegreeting.textContent = "";
    namegreeting.textContent = `Admin ${definingData.userName}`
}
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
