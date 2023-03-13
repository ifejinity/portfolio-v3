document.querySelector("#projects").addEventListener("click", Projects);
function Projects() {
    sessionStorage.setItem("content", "projects")
    autoClose()
    Content.innerHTML = `
    <div class='content-child'>
        <h1>Projects</h1>
    </div>
    `;
}