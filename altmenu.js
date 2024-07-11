document.addEventListener('DOMContentLoaded', function () {
    const protezHakkindaLink = document.getElementById('protezhakkinda');
    const dropdownContainer = document.getElementById('protez-options');
    let closeTimeout;

    protezHakkindaLink.addEventListener('mouseover', function (e) {
        e.preventDefault();
        clearTimeout(closeTimeout);
        dropdownContainer.classList.add('show');
    });

    protezHakkindaLink.addEventListener('mouseleave', function () {
        closeTimeout = setTimeout(function() {
            dropdownContainer.classList.remove('show');
        }, 200); // 200 milisaniyelik bir gecikme ekleyelim
    });

    dropdownContainer.addEventListener('mouseleave', function () {
        closeTimeout = setTimeout(function() {
            dropdownContainer.classList.remove('show');
        }, 200); // 200 milisaniyelik bir gecikme ekleyelim
    });

    dropdownContainer.addEventListener('mouseenter', function () {
        clearTimeout(closeTimeout);
    });
});
