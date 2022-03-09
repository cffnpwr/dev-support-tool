document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        document.getElementById("nowLoading").classList.add("hidden");
    }
}