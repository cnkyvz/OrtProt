document.addEventListener('DOMContentLoaded', function() {
    var image = document.querySelector('img[usemap]');
    var map = document.querySelector('map');
    var areas = map.getElementsByTagName('area');

    function resizeMap() {
        var imageWidth = image.offsetWidth;
        var imageHeight = image.offsetHeight;

        for (var i = 0; i < areas.length; i++) {
            var coords = areas[i].originalCoords.split(',');
            var newCoords = coords.map(function(coord, index) {
                return (index % 2 === 0) ? coord * imageWidth / image.naturalWidth : coord * imageHeight / image.naturalHeight;
            });
            areas[i].coords = newCoords.join(',');
        }
    }

    for (var i = 0; i < areas.length; i++) {
        areas[i].originalCoords = areas[i].coords;
        areas[i].addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    window.addEventListener('resize', resizeMap);
    resizeMap();
});
