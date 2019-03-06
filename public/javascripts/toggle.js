document.getElementById("myDiv").addEventListener("click", myFunction);

function myFunction() {
  if (document.getElementById("myDiv").getAttribute("class") == "red") {
    document.getElementById("myDiv").classList.remove('red');
    document.getElementById("myDiv").classList.add('blue');
  }

  else {
    document.getElementById("myDiv").classList.remove('blue');
    document.getElementById("myDiv").classList.add('red');
  }
}