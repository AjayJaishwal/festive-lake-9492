document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("loginContainer");
    const otpContainer = document.getElementById("otpContainer");
    otpContainer.style.display = "none";
    console.log(registrationForm)
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log("y0")
        const contactDetail = document.getElementById("contactDetail").value;
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const isValidEmail = regex.test(contactDetail);
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        const isValidPhone = phoneRegex.test(contactDetail);
        if (isValidPhone || isValidEmail){
            const otpContainer = document.getElementById("otpContainer");
            console.log("y1")
            otpContainer.style.display = "block";
        } else {
            console.log("y2")
        }
        // Reset the form
        registrationForm.reset();
    });
});