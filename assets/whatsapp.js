function gotowhatsapp() {

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;

    var url = "https://wa.me/918789529215?text=" +
        "Name: " + name + "%0a" +
        "Phone: " + phone + "%0a" +
        "Email: " + email + "%0a" +
        "Service: " + service;

    window.open(url, '_blank').focus();
}