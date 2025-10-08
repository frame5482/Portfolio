window.onload = checkLogin;

function checkLogin () {
    const form = document.getElementById("myLogin");

    form.onsubmit = function (e) {
        e.preventDefault(); 

        let inputUser = form.username.value.trim();
        let inputPass = form.password.value;
        let regUser = localStorage.getItem("regUsername");
        let regPass = localStorage.getItem("regPassword");

        
        if (inputUser === regUser && inputPass === regPass) {
            alert("เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับ " + inputUser);
        } else {
            alert("Username หรือ Password ไม่ถูกต้อง กรุณาลองใหม่");
        }
    };
};