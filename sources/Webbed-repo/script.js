document.addEventListener("mousemove", (event) => {
    const bg = document.querySelector(".motion-bg");
    const { clientX, clientY } = event;
    
    const moveX = (clientX / window.innerWidth - 0.5) * 100;
    const moveY = (clientY / window.innerHeight - 0.5) * 100;

    bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
