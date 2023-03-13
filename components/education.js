document.querySelector("#education").addEventListener("click", Education);
function Education() {
    sessionStorage.setItem("content", "education")
    autoClose()
    Content.innerHTML = `
    <div class='content-child'>
        <h1>Education</h1>
    </div>
    `;
}