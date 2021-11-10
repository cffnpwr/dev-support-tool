function genPreview() {
    const previewDiv = document.getElementById("previewDiv");
    previewDiv.innerHTML = "<h2>プレビュー</h2><div  class='border rounded'>" + document.getElementById("outputArea").textContent + "</div>";
}