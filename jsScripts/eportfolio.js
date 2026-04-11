document.addEventListener("DOMContentLoaded", () => {
    if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));

    window.addEventListener("pageshow", () => {
        window.scrollTo(0, 0);
    });

    const headerText = "Hi! My name is Adrian Mayo";
    const typewriterDelay = 80;
    const headerTypewriter = document.getElementById("headerTypewriter");
    const aboutPortfolioBox = document.getElementById("aboutPortfolioBox");

    if (!aboutPortfolioBox) {
        return;
    }

    let headerFinishDelay = typewriterDelay * (headerText.length + 6);

    if (typeof typeWriter === "function" && headerTypewriter) {
        typeWriter("#headerTypewriter", headerText, typewriterDelay);
    } else if (headerTypewriter) {
        headerTypewriter.textContent = headerText;
        headerFinishDelay = 600;
    }

    setTimeout(() => {
        if (typeof fadeIn === "function") {
            fadeIn(aboutPortfolioBox);
            return;
        }
        aboutPortfolioBox.classList.add("fadeIn");
    }, headerFinishDelay);
});
