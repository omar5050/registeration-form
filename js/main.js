





// signIn Input Users
// var loginInBtn = document.getElementById('loginInBtn');
var loginInputEmail = document.getElementById('loginInputEmail');
var loginInputPass = document.getElementById('loginInputPass');



// array to store dataUsers
var usersContainer;

if (localStorage.getItem("usersKey")!= null) {
  usersContainer = JSON.parse(localStorage.getItem("usersKey"));
  console.log(usersContainer);

} else {
  usersContainer = [];
}








  /***************************************************************** */




// 2- loginFunction

// function login(){
 
// }


// function checkUserEmail(){
   
//     var emailvalue = inputEmail.value;
//     for(var i=0; i<usersContainer.length; i++){
//     if(usersContainer[i].inputEmail.includes(emailvalue)){
//       return true;
//     }
//     else{
//       return false
//     }
//   }
// }
  
function login(){
  if(searchEmail() == true){ // true
    console.log('login')
    enterHome()
       
  }
  if(isEmpty()==true){
    alert('All inputs is required');
  }
  else{
    console.log('not found')
  }
}
  
 function searchEmail()
 {    
    
    for(var i=0 ; i<usersContainer.length ; i++)
    {//  true            
      if(usersContainer[i].inputEmail == loginInputEmail.value && usersContainer[i].inputPass == loginInputPass.value)
      {
        sessionStorage.setItem('fname', usersContainer[i].inputName);
        return true
      }
      
    }
    return false
 }

function enterHome(){
  window.open("login/login.html","_self")
}


function isEmpty() {
  if (loginInputEmail.value == "" || loginInputPass.value == ""){
    return true
  }
}


/*function addUsers() {
  var users = {
    inputName: inputName.value,
    inputEmail: inputEmail.value,
    inputPass: inputPass.value,
  };
  usersContainer.push(users);
  localStorage.setItem("usersKey", JSON.stringify(usersContainer));
  console.log(usersContainer);
}
*/
