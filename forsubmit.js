document.addEventListener('DOMContentLoaded', function() {
    var textarea = document.getElementById('info');
    
    function showLoginAlert(event) {
        alert("Lütfen Giriş Yapınız");
        event.preventDefault(); // Etkinliği iptal et
        textarea.blur(); // Odaktan çık
    }
    
    function preventInput(event) {
        event.preventDefault(); // Giriş etkinliğini iptal et
    }

    textarea.addEventListener('focus', showLoginAlert);
    textarea.addEventListener('keydown', preventInput);
    textarea.addEventListener('input', preventInput);
});
