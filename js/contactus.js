function ShowFunction(){
  let from_name = document.querySelector(".from_name");
  let email = document.querySelector(".email");
  let subject = document.querySelector(".subject");
  let message = document.querySelector(".message");
  let btn = document.querySelector(".submit");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (from_name.value == "" || email.value == "" || message.value == "") {
      emptyerror();
    } else {
      // loader.style.display = "flex";
      sendmail(from_name.value,email.value,subject.value,message.value);
      success();
     
      // document.getElementById('all_container').style.display = "none";	
      // document.getElementById('submited_success').style.display = "block";
      // loader.style.display = "none";
  
      
    }
  });
}
ShowFunction();

function sendmail(from_name1,email1,subject1,message1) {
  emailjs.send("service_8h0kxzb", "template_aongd8n", {
    from_name: from_name1,
    email: email1,
    subject: subject1,
    message: message1,
    
  });
}

function emptyerror() {
  swal({
    icon: "error",
    title: "Invalid!",
    text: "Fields cannot be empty!",
  });
}

function success() {
  swal({
    icon: "success",
    title: "Successfully",
    text: "Successfully sent message",
    button: "OK!",
  });
}
