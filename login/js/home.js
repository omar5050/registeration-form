// Home
var userName = sessionStorage.getItem('fname');
  document.getElementById('fname').innerHTML = userName;


  function logout(){
      sessionStorage.removeItem('fname')
      window.open('../index.html',"_self")
  }