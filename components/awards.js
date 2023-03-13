document.querySelector("#awards").addEventListener("click", Awards);
function Awards() {
    sessionStorage.setItem("content", "awards")
    autoClose()
    Content.innerHTML = `
    <div class='content-child'>
        <h1>Awards and Certifications</h1>
        
    </div>
    `;
}