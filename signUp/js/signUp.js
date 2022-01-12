// SignUp input Users
var inputName = document.getElementById("inputName");
var inputEmail = document.getElementById("inputEmail");
var inputPass = document.getElementById("inputPass");
var SignUpBtn = document.getElementById("SignUpBtn");

// array to store dataUsers
var usersContainer;

if (localStorage.getItem("usersKey") != null) {
  usersContainer = JSON.parse(localStorage.getItem("usersKey"));
  console.log(usersContainer);
} else {
  usersContainer = [];
}

// signUp
function signUp() {
  if(checkUserEmail(usersContainer) == true){
    alert('email found')
  }
  else if(isEmpty()){
    alert('All inputs is required')
  }
 else{
   addUsers();
 }
}

// functions
// 1- add users
function addUsers() {
  var users = {
    inputName: inputName.value,
    inputEmail: inputEmail.value,
    inputPass: inputPass.value,
  };
  usersContainer.push(users);
  localStorage.setItem("usersKey", JSON.stringify(usersContainer));
  console.log(usersContainer);
}

function checkUserEmail(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].inputEmail == inputEmail.value) {
      return true;
    } 
  }
  return false;
}

function isEmpty() {
  if (inputEmail.value == "" ||inputName.value == "" ||inputPass.value == ""){
    return true
  }
}



// usersContainer.pop()
// localStorage.setItem('usersKey', JSON.stringify(usersContainer));







