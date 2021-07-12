function genPreview() {
    const previewDiv = document.getElementById("previewDiv");
    previewDiv.innerHTML = "<h2>プレビュー</h2>" + document.getElementById("outputArea").textContent;
}