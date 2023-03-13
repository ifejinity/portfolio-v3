document.querySelector("#awards").addEventListener("click", Awards);
function Awards() {
    sessionStorage.setItem("content", "awards")
    autoClose()
    Content.innerHTML = `
    <div class='content-child'>
        <h1>Awards and Certifications</h1>
        <div class='certificate-container'>
            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/15.jpg' alt='With Honors and Most Outstanding ICT Student(S.Y. 2018-2019)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>With Honors and Most Outstanding ICT Student(S.Y. 2018-2019)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/1.jpg' alt='Deans Lister(1st Sem S.Y. 2021-2022)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Deans Lister(1st Sem S.Y. 2021-2022)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/2.jpg' alt='Deans Lister(2nd Sem S.Y. 2020-2021)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Deans Lister(2nd Sem S.Y. 2020-2021)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/3.jpg' alt='Deans Lister(1st Sem S.Y. 2021-2022)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Deans Lister(1st Sem S.Y. 2021-2022)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/4.jpg' alt='Deans Lister(2nd Sem S.Y. 2021-2022)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Deans Lister(2nd Sem S.Y. 2021-2022)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/5.jpg' alt='Rank 9 Grade 10-Courage(2nd Grading S.Y. 2016-2017)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Rank 9 Grade 10-Courage(2nd Grading S.Y. 2016-2017)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/6.jpg' alt='Rank 9 Grade 10-Courage(3rd Grading S.Y. 2016-2017)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Rank 9 Grade 10-Courage(3rd Grading S.Y. 2016-2017)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/7.jpg' alt='2nd place Dart(Boys Category) CASAP Taytay Sports Festival 2017' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>2nd place Dart(Boys Category) CASAP Taytay Sports Festival 2017</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/8.jpg' alt='Ikalawang Pwesto (Pag likha ng Poster na may temang "Filipino and Wika ng Saliksik")' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Ikalawang Pwesto (Pag likha ng Poster na may temang "Filipino and Wika ng Saliksik")</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/9.jpg' alt='With Honors (S.Y. 2017-2018)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>With Honors (S.Y. 2017-2018)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/10.jpg' alt='Rank 1 Grade 12-ICT (First Quarter S.Y. 2018-2019)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Rank 1 Grade 12-ICT (First Quarter S.Y. 2018-2019)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/11.jpg' alt='Rank 1 Grade 12-ICT (Second Quarter S.Y. 2018-2019)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Rank 1 Grade 12-ICT (Second Quarter S.Y. 2018-2019)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/12.jpg' alt='Top 1 Grade 11-ICT (Second Sem 2nd Grading S.Y. 2017-2018)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Top 1 Grade 11-ICT (Second Sem 2nd Grading S.Y. 2017-2018)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/13.jpg' alt='Top 1 Grade 11-ICT (First Sem 1st Grading S.Y. 2017-2018)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Top 1 Grade 11-ICT (First Sem 1st Grading S.Y. 2017-2018)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/14.jpg' alt='Top 1 Grade 11-ICT (First Sem 2nd Grading S.Y. 2017-2018)' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Top 1 Grade 11-ICT (First Sem 2nd Grading S.Y. 2017-2018)</p>
                </div>
            </div>

            <div class='certificate-holder'>
                <div class='certificate-img'>
                    <img src='../resources/figma.jpg' alt='Webinar on Introduction to UI/UX Designing Using Figma' class='modal-target'>
                </div>
                <div class='certificate-description'>
                    <p class='certificate-title'>Webinar on Introduction to UI/UX Designing Using Figma</p>
                </div>
            </div>
        </div>
    </div>
    `;
}