const form = document.getElementById('form');
const username = document.getElementById('username');
const mobile = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('re-password');

// form.addEventListener('submit' , (event) => {
    
//     event.preventDefault();
//     validate();
// });
const btn = document.getElementById('submit');
btn.addEventListener('click',() =>{
    console.log("btn click");
    validate();
})

function validate () {
console.log("hello");
const usernameval = username.value.trim();
const mobileval  = mobile.value.trim();
const passwordval = password.value.trim();
const cpasswordval  = cpassword.value.trim();
console.log(usernameval);
if(usernameval === ""){
    // setErrorFor(username,"username cannot be blank")
    alert("usernmae cannot be blank");
}else{
    setSuccessFor(username);
}
}
// function setErrorFor(input,message){
//     const formcontrol = input.parentElement;
//     const small = formcontrol.QuerySelector('small');
//     small.innerText = message;
//     formcontrol.className = 'form-control error'
// }
