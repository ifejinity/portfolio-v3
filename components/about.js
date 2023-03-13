const Content = document.querySelector(".content");
document.querySelector("#about").addEventListener("click", About);
function About() {
    sessionStorage.setItem("content", "about")
    autoClose()
    Content.innerHTML = `
    <div class='content-child'>
        <h1>About Me</h1>
        <div class='content-header'>
            <div class='img-header'>
                <img src='./resources/jeffrey-image.jpg' alt='jeffrey-image'/> 
            </div>
            <div class='socmed-container'>
                <div class='socmed-text'>
                    <h1>I am Jeffrey Lonzanida</h1>
                </div>
                <a href='https://www.facebook.com/ifejinity' target='blank'><i class="fa-brands fa-facebook"></i></a>
                <a href='https://instagram.com/ifejinity' target='blank'><i class="fa-brands fa-square-instagram"></i></a>
                <a href='https://www.tiktok.com/@jefflonzanida' target='blank'><i class="fa-brands fa-tiktok"></i></a>
                <a href='https://github.com/ifejinity' target='blank'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/jeffrey-lonzanida-700559253' target='blank'><i class="fa-brands fa-linkedin"></i></a>
                <a href='mailto:mrlonzanida08@gmail.com' target='blank'><i class="fa-solid fa-envelope"></i></a>
                <a href='tel:09306904474'><i class="fa-solid fa-phone"></i></a>
            </div>
        </div>
        <div class='about-description'>
            <p>I am currently pursuing a Bachelor of Science in Information Technology at the University of Rizal System Binangonan Campus, where I am actively working to cultivate and expand upon a variety of qualities that I believe are essential for success in this field. These qualities include endless patience, average creativity and problem-solving skills, a strong desire to learn, logical thinking, and self-discipline.</p>
            <br>
            <p>Through my coursework and practical experiences, I have come to appreciate the importance of patience in the face of complex and often challenging technological issues. I am committed to developing and strengthening my problem-solving skills, utilizing my creativity to find innovative solutions that can enhance system performance and efficiency.</p>
            <br>
            <p>I believe that the key to success in the field of Information Technology is a strong desire to learn and a passion for exploring new technologies, platforms, and programming languages. I am constantly seeking out new learning opportunities, whether through independent study, online courses, or hands-on projects.</p>
            <br>
            <p>Logical thinking is another essential quality that I possess, as it allows me to analyze complex problems and break them down into manageable pieces. This logical approach also helps me to develop efficient and effective solutions that can streamline processes and improve overall performance.</p>
            <br>
            <p>Finally, I recognize that self-discipline is critical to success in any academic pursuit, and I am committed to remaining focused and motivated throughout my studies. By cultivating these qualities and working hard to develop my skills and knowledge, I am confident that I can succeed in this exciting and dynamic field."</p>
            <br>
        </div>
        <div class='my-logo'> 
            <div class='logo-description'>
                <h2>My Logo</h2>
                <p>The design of my logo is inspired by or draws on elements of the name Jeffrey, such as the letters J, E, F, R, and Y. It may also incorporate other visual motifs or patterns that reflect my personal style or brand.</p>
            </div>
            <div class='logo-img'>
                <img src='./resources/logo-meaning.jpg' alt='logo-meaning'>
            </div>
        </div>
    </div>
    `;
}