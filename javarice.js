// Animate hero text and image when page loads

window.addEventListener("load", function() {

    const text = document.querySelector(".portfolio-text");
    const image = document.querySelector(".image-wrapper");
    const info = document.querySelector(".hero-info");

    text.style.opacity = "0";
    text.style.transform = "translateX(-100px)";

    image.style.opacity = "0";
    image.style.transform = "translateX(100px)";

    info.style.opacity = "0";
    info.style.transform = "translateY(50px)";

    setTimeout(() => {
        text.style.transition = "1s";
        text.style.opacity = "1";
        text.style.transform = "translateX(0)";
    }, 200);

    setTimeout(() => {
        image.style.transition = "1s";
        image.style.opacity = "1";
        image.style.transform = "translateX(0)";
    }, 400);

    setTimeout(() => {
        info.style.transition = "1s";
        info.style.opacity = "1";
        info.style.transform = "translateY(0)";
    }, 600);

});


// ✅ CONTACT FORM POPUP
function showMessage(){
    alert("✅ Thank you for contacting me! Your message has been sent.");
}