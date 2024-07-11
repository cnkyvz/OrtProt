const container = document.getElementById('testimonialContainer');
const dots = document.querySelectorAll('.dot');
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    container.scrollLeft = scrollLeft - walk;
    updateDots();
});

container.addEventListener('scroll', updateDots);

function updateDots() {
    const containerWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    const scrollLeft = container.scrollLeft;
    const numberOfDots = dots.length;
    const scrollRatio = scrollLeft / (scrollWidth - containerWidth);
    const activeIndex = Math.round(scrollRatio * (numberOfDots - 1));

    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
