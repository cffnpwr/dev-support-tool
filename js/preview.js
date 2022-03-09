function changeScrollState() {
    const pAndCDOM = document.getElementById("previewAndCode");
    const heightDOM = document.getElementById("height");
    const previewHeightDOM = document.getElementById("previewHeight");

    const height = heightDOM.clientHeight;
    const previewHeight = previewHeightDOM.clientHeight;

    if ((height / 2) < previewHeight) {
        if (!heightDOM.classList.contains("lg:fixed"))
            return;
    } else {
        if (!heightDOM.classList.contains("lg:w-full"))
            return;
    }

    pAndCDOM.classList.toggle("lg:relative");
    heightDOM.classList.toggle("lg:fixed");
    heightDOM.classList.toggle("lg:top-18");
    heightDOM.classList.toggle("lg:w-1/2");
    heightDOM.classList.toggle("lg:pr-20");
    heightDOM.classList.toggle("lg:w-full");
}