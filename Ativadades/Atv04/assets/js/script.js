function typeWriter(element, text, speed = 100, callback) {
    let i = 0;
    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            setTimeout(callback, 1000);
        }
    }

    typing();
}

function startAnimation() {
    const nome = document.getElementById("nome");
    const cargo = document.getElementById("cargo");

    typeWriter(nome, "Karlos Henryque", 80, () => {
        typeWriter(cargo, "Desenvolvedor Full-Stack", 60, () => {
            setTimeout(() => {
                startAnimation(); 
            }, 1500);
        });
    });
}

window.addEventListener("DOMContentLoaded", startAnimation);