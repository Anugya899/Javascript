function validateForm() {
    let x = document.forms["Myform"]["fname"].value;
    let y = document.forms["Myform"]["lname"].value;
    let z= document.forms["Myform"]["email"].value;
    let a= document.forms["Myform"]["password"].value;
    let b = document.forms["Myform"]["repeatpassword"].value;
    if (x == "") {
      alert("FirstName must be filled out");
      return false;
    }
    else if (y == "") {
        alert("LastName must be filled out");
        return false;
      }
    else if (z == "") {
        alert("E-mail cannot be blank");
        return false;
      }
    else if (a == "") {
        alert("Password cannot be blank");
        return false;
    }   
    else if (a.length<8){
        alert("Password length should be greater than 8");
        return false;
    }
    else if (b == "") {
        alert("RepeatPassword cannot be blank");
        return false;
      }
      else if (b!=a){
        alert("Password and repeat password should be the same");
      }
    }
