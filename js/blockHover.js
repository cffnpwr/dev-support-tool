const contentsBlocks = document.getElementById("contentsBlocks").children;
for (const content of contentsBlocks) {
    content.onmouseenter = hoverIn;
    content.onmouseleave = hoverOut;
}

function hoverIn(e) {
    const target = e.target;
    console.log(e.target);

    if (target.classList.contains("hoverable") !== true)
        return;

    target.classList.remove("hoverable");
    target.classList.add("hovering");

    const notHovered = document.getElementsByClassName("hoverable");
    for (const nh of notHovered)
        nh.classList.add("blur", "-z-100");
}

function hoverOut(e) {
    const target = e.target;

    if (target.classList.contains("hovering") !== true)
        return;

    const notHovered = document.getElementsByClassName("hoverable");
    for (const nh of notHovered)
        nh.classList.remove("blur", "-z-100");

    target.classList.add("hoverable");
    target.classList.remove("hovering");
}