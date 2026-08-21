/* =========================================
   BOTÃO VOLTAR AO TOPO
========================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   FECHAR MENU MOBILE AO CLICAR
========================================= */

const linksMenu = document.querySelectorAll(".navbar-nav .nav-link");
const menu = document.getElementById("menu");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const bootstrapMenu =
                bootstrap.Collapse.getInstance(menu);

            if (bootstrapMenu) {
                bootstrapMenu.hide();
            }

        }

    });

});


/* =========================================
   ANIMAÇÃO DOS CARDS AO APARECER
========================================= */

const elementos = document.querySelectorAll(
    ".info-card, .skill-card, .ability-card, .future-card, .contact-card"
);

const observador = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

                observador.unobserve(entrada.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(function (elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(25px)";
    elemento.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});