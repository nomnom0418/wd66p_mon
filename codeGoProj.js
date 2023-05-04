let MainHeading = document.getElementById('main-heading');
MainHeading.innerHTML = ("log in".toUpperCase());

const container = document.querySelector('div');


const userLogin = document.createElement('input');
userLogin.setAttribute("type", "text");
userLogin.setAttribute("value", "User Name / EMAIL");
userLogin.setAttribute("class", "userNameOrEmail")
container.append(userLogin);

const inputPass = document.createElement('input');
inputPass.setAttribute("type", "text");
inputPass.setAttribute("value", "password");
inputPass.setAttribute("class", "password");
container.append(inputPass);

const secDiv = document.createElement('div');
secDiv.setAttribute("class", "secDiv");
container.append(secDiv);


const loginBtn = document.createElement('button');
loginBtn.setAttribute("type", "Button");
loginBtn.setAttribute("class", "loginBtn");
container.append(loginBtn);
loginBtn.innerText="LOG IN";

const signUp = document.createElement('text');
signUp.setAttribute("type", "text");
signUp.setAttribute("class", "signUp");
container.append(signUp);
signUp.innerText="SIGN UP";


secDiv.appendChild(loginBtn);
secDiv.appendChild(signUp);