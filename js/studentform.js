function validate() {
    // let loader = document.querySelector(".loader");
    let full_name1 = document.querySelector(".full_name");
    let father_name1 = document.querySelector(".father_name");
    let edu_bg1 = document.querySelector(".edu_bg");
    let address1 = document.querySelector(".address");
    let birthdate1 = document.querySelector(".birthdate");
    let from_email1 = document.querySelector(".from_email");
    let phone_no1 = document.querySelector(".phone_no");
    let gender1 = document.querySelector(".gender");
    let courses1 = document.querySelector(".course");
    let btn = document.querySelector(".submit");
    let courseValue = document.querySelector(".course");
    let courseTextTag = document.querySelector(".coursetext");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (full_name1.value == "" || father_name1.value == "" || edu_bg1.value == "" || address1.value == "" || birthdate1.value == "" || phone_no1.value.length < 11 || gender1.value == "" || courses1.value == "") {
        emptyerror();
      } else {
        // loader.style.display = "flex";
        sendmail(full_name1.value,father_name1.value,edu_bg1.value,address1.value,birthdate1.value,from_email1.value,phone_no1.value,gender1.value,courses1.value);
        // success();
        // loader.style.display = "none";
        courseTextTag.textContent = courseValue.value;
        document.getElementsByClassName("form-container")[0].style.display = "none";
        document.getElementById("overlay-submit").style.display = "block";

        
      }
    });
  }
  validate();

  function sendmail(full_name2,father_name2,edu_bg2,address2,birthdate2,from_email2,phone_no2,gender2,course2) {
    emailjs.send("service_duqg691", "template_519ps96", {
      full_name: full_name2,
      father_name: father_name2,
      edu_bg: edu_bg2,
      address: address2,
      birthdate: birthdate2,
      from_email: from_email2,
      phone_no: phone_no2,
      gender: gender2,
      course: course2,
    });
  }

  function emptyerror() {
    swal({
      icon: "error",
      title: "Invalid!",
      text: "Your Imformations incompleted!",
    });
  }
 
  /*function success() {
    swal({
      icon: "success",
      title: "Successfully",
      text: "Successfully submitted",
      button: "OK!",
    });
  }*/