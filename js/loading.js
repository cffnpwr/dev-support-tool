document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        const nl = document.getElementById("nowLoading");

        nl.classList.add("fadeout");
        setTimeout(function () {
            nl.classList.add("hidden");
        }, 1000);
    }
}