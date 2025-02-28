
let fname = document.getElementById("username");
let password = document.getElementById("password");
let logintext=document.getElementById("heading");

addEventListener("submit", (event)=> {
  event.preventDefault();
  let username = fname.value;
  let passwordValue = password.value;
 
  let h3=document.createElement("h3");
  if(username == "sagar" && passwordValue == "123"){
    h3.innerText="login successful";
    h3.style.color="green";
    logintext.after(h3);
  }else{
    h3.innerText="login failed";
    h3.style.color="red";
    logintext.after(h3);
  }
});