document.querySelector("#projects").addEventListener("click", Projects);
function Projects() {
    sessionStorage.setItem("content", "projects")
    autoClose()
    Content.innerHTML = `
    <div class='content-child'>
        <h1>Projects</h1>
        <div class='projects-container'>
            <div class='swiper mySwiper'>
                <div class='swiper-wrapper'>
                    <div class='swiper-slide'>
                        <img src='./resources/affordapos.png'/>
                        <div class='projects-description'>
                            <h3>Affordapos</h3>
                            <div class='tech-use'>
                                <p style='background-color:#FFB84C'>Javascript</p>
                                <p style='background-color:#5BC0F8'>CSS3</p>
                                <p style='background-color:#AF0171'>Sass</p>
                                <p style='background-color:#F94A29'>HTML5</p>
                            </div>
                            <div class='projects-button'>
                                <button>Visit</button>
                            <button>Code</button>
                            </div>
                        </div>
                    </div>
                    <div class='swiper-slide'>
                        <img src='./resources/jumpninja.jpg'/>
                        <div class='projects-description'>
                            <h3>Jump Ninja</h3>
                            <div class='tech-use'>
                                <p style='background-color:#367E18'>C#</p>
                                <p style='background-color:#181818'>Unity</p>
                            </div>
                            <div class='projects-button'>
                                <button>Download</button>
                                <button>Code</button>
                            </div>  
                        </div>
                    </div>
                    <div class='swiper-slide'>
                        <img src='./resources/freelance.png'/>
                        <div class='projects-description'>
                            <h3>Freelance Marketplace</h3>
                            <div class='tech-use'>
                                <p style='background-color:#3E54AC'>Php</p>
                                <p style='background-color:#95BDFF'>Mysql</p>
                                <p style='background-color:#FFB84C'>Javascript</p>
                                <p style='background-color:#5BC0F8'>CSS3</p>
                                <p style='background-color:#F94A29'>HTML5</p>
                            </div>
                            <div class='projects-button'>
                                <button>Code</button>
                            </div>  
                        </div>
                    </div>
                    <div class='swiper-slide'>
                        <img src='./resources/bslts.jpg'/>
                        <div class='projects-description'>
                            <h3>Ecommerce Website for BSLTS</h3>
                            <div class='tech-use'>
                                <p style='background-color:#3E54AC'>Php</p>
                                <p style='background-color:#95BDFF'>Mysql</p>
                                <p style='background-color:#FFB84C'>Javascript</p>
                                <p style='background-color:#5BC0F8'>CSS3</p>
                                <p style='background-color:#F94A29'>HTML5</p>
                                <p style='background-color:#D800A6'>Prestashop</p>
                            </div>
                            <div class='projects-button'>
                                <button>Code</button>
                            </div> 
                        </div>
                    </div>
                    <div class='swiper-slide'>
                        <img src='./resources/policeclearance.png'/>
                        <div class='projects-description'>
                            <h3>Police Clearance System</h3>
                            <div class='tech-use'>
                                <p style='background-color:#367E18'>C#</p>
                                <p style='background-color:#8758FF'>VB.Net</p>
                                <p style='background-color:#95BDFF'>Mysql</p>
                            </div>
                            <div class='projects-button'>
                                <button>Code</button>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class='swiper-pagination'></div>
            </div>
        </div>
    </div>
    `;
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const btn = document.querySelectorAll(".swiper-wrapper button")
    function Link() {
        for (let btns of btn) {
            btns.addEventListener("click", function () {
                if (this == btn[0]) {
                    location.href="http://affordapos.rf.gd/"
                }

                if(this == btn[1])
                {
                    location.href="https://github.com/ifejinity/affordaPOS"
                }

                if (this == btn[2]) {
                    location.href="https://drive.google.com/file/d/1YEQ3budB1gJu7xkxpCQe9XA5tXP5ig6e/view?usp=share_link"
                }
                
                if (this == btn[3]){
                    location.href="https://github.com/ifejinity/jump-ninja"
                }

                if (this == btn[4]){
                    location.href="https://github.com/ifejinity/freelance-marketplace"
                }

                if (this == btn[5]){
                    location.href="https://github.com/ifejinity/e-commerce-website-for-BSLTS-Prestashop-"
                }

                if (this == btn[6]){
                    location.href="https://github.com/ifejinity/policeclearancesystem"
                }
            })
        }
    }

    Link(btn)
}