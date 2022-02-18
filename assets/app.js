const frm = document.querySelector("#frm");

frm.addEventListener("submit", event => {
    event.preventDefault();
    const frm = event.target;
    const formData = {
        name: frm.name.value,
        phone: frm.phone.value,
        email: frm.email.value,
        date: frm.date.value
    };

    const URL = `https://api.whatsapp.com/send?phone=${formData.phone}&text=Hi, ${formData.name}%20you%20have%20scheduled%20an%20appointment%20on%20${formData.date}%20with%20the%20following%20instructions%20&source=&data=`;

    window.open(URL, "_blank");
});