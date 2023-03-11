

const Content = document.querySelector(".content");
document.querySelector("#about").addEventListener("click", About);
function About() {
    Content.innerHTML = `
    <div class='content-child'>
        <div class='content-header'>
            <div class='img-header'>
                <img src='./resources/jeffrey-image.jpg' alt='jeffrey-image'/> 
            </div>
            <div class='socmed'>

            </div>
        </div>
        <h1>About Me</h1>
        <p>I am currently pursuing a Bachelor of Science in Information Technology at the University of Rizal System Binangonan Campus, where I am actively working to cultivate and expand upon a variety of qualities that I believe are essential for success in this field. These qualities include endless patience, average creativity and problem-solving skills, a strong desire to learn, logical thinking, and self-discipline.</p>
        <br>
        <p>Through my coursework and practical experiences, I have come to appreciate the importance of patience in the face of complex and often challenging technological issues. I am committed to developing and strengthening my problem-solving skills, utilizing my creativity to find innovative solutions that can enhance system performance and efficiency.</p>
        <br>
        <p>I believe that the key to success in the field of Information Technology is a strong desire to learn and a passion for exploring new technologies, platforms, and programming languages. I am constantly seeking out new learning opportunities, whether through independent study, online courses, or hands-on projects.</p>
        <br>
        <p>Logical thinking is another essential quality that I possess, as it allows me to analyze complex problems and break them down into manageable pieces. This logical approach also helps me to develop efficient and effective solutions that can streamline processes and improve overall performance.</p>
        <br>
        <p>Finally, I recognize that self-discipline is critical to success in any academic pursuit, and I am committed to remaining focused and motivated throughout my studies. By cultivating these qualities and working hard to develop my skills and knowledge, I am confident that I can succeed in this exciting and dynamic field."</p>
    </div>
    `;
}
document.querySelector("#skills").addEventListener("click", Skills);
function Skills() {
    Content.innerHTML = `
    <div class='content-child'>
        <h1>Skills</h1>
    </div>
    `;
}

document.querySelector("#projects").addEventListener("click", Projects);
function Projects() {
    Content.innerHTML = `
    <div class='content-child'>
        <h1>Projects</h1>
    </div>
    `;
}

document.querySelector("#education").addEventListener("click", Education);
function Education() {
    Content.innerHTML = `
    <div class='content-child'>
        <h1>Education</h1>
    </div>
    `;
}

const navBtn = document.querySelector("#burger")
const nav = document.querySelector(".nav-item-wrapper")
navBtn.addEventListener("click", OpenNav)
function OpenNav() {
    nav.classList.toggle("nav-item-wrapper-open");
}