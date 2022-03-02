function changeScrollState() {
    const pAndCDOM = document.getElementById("previewAndCode");
    const heightDOM = document.getElementById("height");
    const previewHeightDOM = document.getElementById("previewHeight");

    const height = heightDOM.clientHeight;
    const previewHeight = previewHeightDOM.clientHeight;

    console.log(height / 2);
    console.log(previewHeight);
    if ((height / 2) < previewHeight) {
        if (!heightDOM.classList.contains("fixed"))
            return;
    } else {
        if (!heightDOM.classList.contains("w-full"))
            return;
    }

    pAndCDOM.classList.toggle("relative");
    heightDOM.classList.toggle("fixed");
    heightDOM.classList.toggle("top-18");
    heightDOM.classList.toggle("w-1/2");
    heightDOM.classList.toggle("pr-20");
    heightDOM.classList.toggle("w-full");
}