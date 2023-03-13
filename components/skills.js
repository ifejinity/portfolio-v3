document.querySelector("#skills").addEventListener("click", Skills);
function Skills() {
    sessionStorage.setItem("content", "skills")
    autoClose()
    Content.innerHTML = `
    <div class='content-child'>
        <h1>Skills</h1>
    </div>
    `;
}