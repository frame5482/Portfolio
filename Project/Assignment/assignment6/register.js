window.onload = validateForm;

function  validateForm () {
    const form = document.getElementById("myRegister");
    const errorMsg = document.getElementById("errormsg");

    form.onsubmit = function (e) {

        let firstname = form.firstname.value.trim();
        let lastname = form.lastname.value.trim();
        let gender = form.gender.value; 
        let birthday = form.bday.value.trim();
        let email = form.email.value.trim();
        let username = form.username.value.trim();
        let password = form.password[0].value; 
        let repassword = form.password[1].value;

        if (firstname === "" ||lastname === "" ||!gender ||birthday === "" ||email === "" || username === "" || password === "" ||repassword === ""  ) {
            errorMsg.textContent = " กรุณากรอกข้อมูลให้ครบทุกช่อง";
            return false;
        }

        if (password !== repassword) {
            errorMsg.textContent = " รหัสผ่านไม่ตรงกัน";
            return false;
        }
         localStorage.setItem("regUsername", username);
        localStorage.setItem("regPassword", password);
        errorMsg.textContent = "";
        form.submit();
    };
};