<template>
    <!-- <div class="content-wrap pt-0 pb-0"> -->
    <div class="container px-4 py-3">
        
        <div class="row">
            <div class="col-md-12 cardbox-1"
                style="background-color: rgb(255, 255, 255); color: rgb(54, 65, 82); box-shadow: none; border-radius: 8px; overflow: hidden; border: none rgba(224, 224, 224, 0.596);">
                <div class="cardcontent py-2">
                    <div class="input-group mb-1">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="search-icon">
                            <i class="fas fa-search"></i> <!-- Assuming you are using Bootstrap Icons (bi) library -->
                        </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Search" aria-describedby="search-icon">
                </div>
                    <div class="header-misc d-flex flex-row justify-content-center fs-5 lh-1.25">
                        <div class="d-flex flex-wrap pt-3 m-0 fs-5 lh-1.25"> <!-- Use flex-wrap for responsiveness -->
                            <button type="button" class="btn top-phone btn-lig btn-outline-secondary mb-2 mx-1"
                                style="font-size: 13px; font-weight: 500; border: none !important;  background-color: #04a5fd !important; border-radius: 10px !important;">All</button>
                            <button type="button" class="btn top-phone btn-lig btn-outline-secondary mb-2 mx-1"
                                style="font-size: 13px; font-weight: 500; border: none !important;  background-color: #04a5fd !important; border-radius: 10px !important;">Planning</button>
                            <button type="button" class="btn top-phone btn-lig btn-outline-secondary mb-2 mx-1"
                                style="font-size: 13px; font-weight: 500; border: none !important;  background-color: #04a5fd !important; border-radius: 10px !important;">Content</button>
                            <button type="button" class="btn top-phone btn-lig btn-outline-secondary mb-2 mx-1"
                                style="font-size: 13px; font-weight: 500; border: none !important;  background-color: #04a5fd !important; border-radius: 10px !important;">Questions</button>
                            <button type="button" class="btn top-phone btn-lig btn-outline-secondary mb-2 mx-1"
                                style="font-size: 13px; font-weight: 500; border: none !important;  background-color: #04a5fd !important; border-radius: 10px !important;">Intellectual Prep</button>
                            <button type="button" class="btn top-phone btn-lig btn-outline-secondary mb-2 mx-1"
                                style="font-size: 13px; font-weight: 500; border: none !important;  background-color: #04a5fd !important; border-radius: 10px !important;">Student Support</button>
                            <button type="button" class="btn top-phone btn-lig btn-outline-secondary mb-2 mx-1"
                                style="font-size: 13px; font-weight: 500; border: none !important;  background-color: #04a5fd !important; border-radius: 10px !important;">Communication</button>
                            <button type="button" class="btn top-phone btn-lig btn-outline-secondary mb-2 mx-1"
                                style="font-size: 13px; font-weight: 500; border: none !important;  background-color: #04a5fd !important; border-radius: 10px !important;">Communication Tools</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="row">
            <h3 class="display-7 mt-3">Favorites</h3>
            <div class="row"></div>
        </div>
        <div class="row">
            <h3 class="display-7 mt-4">AI Tools</h3>
        </div>
        
        <div>
        <div class="row mb-3">
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/mc-assessment">
                <div class="card cad-hovr bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image001.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Original Multiple Choice Assessment",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Generate a multiple-choice evaluation on any subject, standard(s), or criteria!",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
            
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/eoy-student-comments">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image002.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Easy Report Card Comment Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create feedback for report cards highlighting a student's strengths and areas for improvement.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>

            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/lesson-plan-generator">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image003.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Lesson Plan Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create a lesson plan for a subject or topic you're teaching next.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/rewriter">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image004.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Text Rewriter",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Modify any text as per your specific criteria!",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
            
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/youtube">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image005.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Youtube Video Questions Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create questions that is based on a YouTube video.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>

            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/informational-text-generator">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image006.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Original Informational Texts Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create custom informational material for your class tailored to your topic and requirements.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/academic-content-generator">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image007.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Academic Content Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create custom academic material for your class tailored to your topic and requirements.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
            
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/text-dependent-questions">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image008.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Text Dependent Question Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create multiple questions for students based on any input text or paragraph",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>

            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/rubric-generator">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image009.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Rubric Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Generate a rubric (set of evaluation criterion) in a table format for any assignment you're designing for your class.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/iep-suggestion">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image010.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Individualized Education Plan (IEP)",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create a draft of an individualized education program (IEP) tailored to a special student's requirements.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
            
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/student-work-feedback">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image011.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Student Work Feedback",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Identify strengths / areas to improve in student work based on specific criteria.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>

            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/text-leveler">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image012.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Text Level Modifier",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Modify any text to suit your student's reading skills and grade level.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
        </div>

       
        <div class="row mb-3">
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/professional-email">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image013.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Professional Email Communication",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Compose a formal email to your colleagues, other professionals or student’s family",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
            
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/translator">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image015.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Text Translator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Translate any text into another language instantly.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>

            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/summarizer">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image016.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Text Summarizer",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Summarise any given text to the length you desire",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/math-problem">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image017.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Math Story Word Problems",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Generate customised maths story / word problems, connecting it to a particular story on any concept you're teaching",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
            
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/teacher-jokes">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image018.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Nerd Jokes",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create teacher jokes for your class or colleagues and be the most awesome!",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>

            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/colleague-song-generator">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image019.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Song Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create an original song on any topic to the tune of your favourite song!",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/dok-questions">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image020.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Depth of Knowledge Quiz Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create questions for all 4 Depth of Knowledge (DOK) levels for any topic or standard.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
            
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/unit-plan-generator">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image021.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Unit Plan Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create a draft for a unit plan based on the subject and objective, based on length of the unit you’re teaching.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>

            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/proofreader">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image022.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Text Proofreader",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Proofread any text, fixing the grammar, spelling, and punctuation, as well as improving the clarity.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/jeopardy">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image023.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Topic Review Game",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Generate a review game for an entertaining recap session with students!",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
            
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/vocab-list-topic">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image024.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Vocab List Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Generate a list of key vocab words based on any subject, topic, standard, or even text for students to learn.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>

            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/pbl-project">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image025.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Project Based Learning (PBL)",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Guided by the principles of Project Based Learning (PBL), generate a complete project plan.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/group-work">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image026.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Group Work Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create a group work activity for students to collaborate on for any subject, topic or objective.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
            
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/5e-science">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image027.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("5E Model Lesson Plan",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Generate a 5E model lesson plan for your science class. Engage, Explore, Explain, Elaborate, Evaluate.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>

            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/letter-of-recommendation">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image028.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Letter of Recommendation",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Generate a letter recommendation for a student using specific details.",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
        </div>

       
        <!-- <div class="row mb-3">
            <div class="col-md-4 mb-2 px-1">
                <nuxt-link to="/tools/mc-assessment">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-2" style="cursor: pointer;">
                    <img src="/images/tools_icons/image028.png" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1 px-2">
                        <h4 class="card-title mb-0" style="font-size: small;">{{truncateText("Multiple Choice Assesments",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{ truncateText("Create a multiple choice assessment based on any topic,",60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
            </nuxt-link>
            </div>
        </div> -->

        
        <!-- <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/unit-plan-generator">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-unit-plan-generator.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Unit Plan Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a draft of a unit plan based on topic, standards and objectives, and length of unit.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/proofreader">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-proofreader.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Text Proofreader",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Take any text and have it proofread, correcting grammar, spelling, punctuation and adding clarity.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/choice-board">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-choice-board.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Choice Board (UDL)",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Create a choice board for a student assignment based on the principles of UDL.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/jeopardy">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-jeopardy.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Jeopardy Review Game",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Create a jeopardy review game for a fun way to review content with students!", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/math-spiral-review">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-math-spiral-review.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Math Spiral Review",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a spiral review problem set for any math standards or topics.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/vocab-list-topic">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-vocab-list-topic.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Vocabulary List Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a list of vocabulary words based on a subject, topic, or text that are important for students to learn.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/pbl-project">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-pbl-project.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Project Based Learning (PBL)",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Based on the principles of Project Based Learning (PBL), create a full project plan.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div> -->
            <!-- <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/group-work">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-group-work.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Group Work Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate group work activity for students based on a a topic, standard, or objective.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div> -->
        <!-- </div> -->

        <!-- cardr row 4
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/standards-unpacker">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-standards-unpacker.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Standards Unpacker",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Unpack any standard into component parts to understand what students need to learn.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/email-responder">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-email-responder.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("E-mail Responder",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a customized professional e-mail communication in response to an email that you received.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div> -->

        
        <!-- <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/5e-science">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-5e-science.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("5E Model Lesson Plan",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText(" Generate a 5E model lesson plan for your science class.  Engage, Explore, Explain, Elaborate, Evaluate. ", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/letter-of-recommendation">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-letter-of-recommendation.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Letter of Recommendation",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a letter of recommendation to a university or institution for a student using specific content about them.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/social-stories">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-social-stories.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Social Stories",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a social story about a particular event to help a student understand what to expect in that situation.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/decodable-text">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-decodable-text.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Decodable Texts",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a decodable text based on the Science of Reading to support early literacy.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/youtube-summarizer">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-youtube-summarizer.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("YouTube Video Summarizer",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Get a summary of a YouTube video in whatever length you choose.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/real-world-connections">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-real-world-connections.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Real World Connections",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate real world examples to increase student investment.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/multiple-explanations">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-multiple-explanations.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Multiple Explanations",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate clear explanations of concepts that you're teaching in class to help student understanding.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/vocab-based-text-generator">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-vocab-based-text-generator.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Vocabulary Based Texts",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate original texts for your class that include a custom list of vocabulary to help practice words in context.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

       
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/sentence-starters">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-sentence-starters.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Sentence Starters",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Provide sentence starters for any topic, assignment, standard, or objective.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/behavior-intervention-suggestion">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-behavior-intervention-suggestion.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Behavior Intervention Suggestions",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a list of suggestions for behavior intervention based on the behaviors of a student that needs support.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/teacher-observation">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-teacher-observation.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Teacher Observations",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate areas of strength and suggestions for next steps for a teacher based on a classroom observation.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/exemplar">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-exemplar.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Exemplar & Non-Exemplar",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Have AI write exemplar & non-exemplar responses to specific assignments to help & quot see & quot; what is expected.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/science-lab">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-science-lab.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Science Labs",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate an engaging science lab based on topics and standards of your choice.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/multi-step-assignment">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-multi-step-assignment.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Multi-Step Assignment",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a full assignment based on any topic, including a warmup, academic content, vocabulary, and questions.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/quote-of-the-day">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-quote-of-the-day.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Quote of the Day",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate quote of the day suggestions based on any topic.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/make-relevant">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-make-relevant.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Make it Relevant!",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate several ideas that make what you’re teaching relevant to your class based on their interests and background.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/text-analysis-assignment-generator">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-text-analysis-assignment-generator.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Text Analysis Assignment",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a text based analysis assignment that includes a writing prompt along with text dependent questions.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/team-builder">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-team-builder.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Team Builder / Ice Breaker",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Create a team builder / Ice Breaker for virtual or in-person meetings.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

       
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/sel-lesson">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-sel-lesson.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("SEL Lesson Plan",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a Social Emotional Learning (SEL) lesson plan for students in any grade level.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/sports-practice">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-sports-practice.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Coach's Sports Practice",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a plan for practice for any sport that you’re coaching!", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/assignment-scaffolder">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-assignment-scaffolder.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Assignment Scaffolder",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Take any assignment and empower students by breaking it down into manageable steps, fostering stronger understanding and enabling greater independence.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/clear-directions">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-clear-directions.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Clear Directions",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Make your directions more concise and sequential so they’re easier to understand for your students.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/class-newsletter">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-class-newsletter.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Class Newsletter",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a newsletter to send to families weekly.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/common-misconceptions-generator">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-common-misconceptions-generator.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Common Misconceptions",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate the most common misconceptions and how to address them on any topic.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/accommodation-suggestion">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-accommodation-suggestion.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Accommodation Suggestions",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a list of accommodations for a student who needs support.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/bip-suggestion">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-bip-suggestion.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("BIP Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate suggestions for a Behavior Intervention Plan (BIP).", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/3d-science">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-3d-science.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Three Dimensional (3D) Science Assessments",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Write a three dimensional science assessment using NGSS standards.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>            
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/thank-you-note">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-thank-you-note.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Thank You Note",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a customized thank you note to show your appreciation!", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/scaffolder">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-scaffolder.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Text Scaffolder",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Take any text and scaffold it for readers who are behind grade level or need extra support.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>            
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/conceptual">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-conceptual.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Conceptual Understanding",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate ideas about how to help your students build conceptual understanding.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/data-table-analysis">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-data-table-analysis.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Data Table Analysis",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a table with data of your choice for your class with associated questions.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>            
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/restorative-reflection">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-restorative-reflection.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Restorative Reflection",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Create a student reflection assignment based on restorative practices for disciplinary incidents.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>        

        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/ai-resistant-assignment">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-ai-resistant-assignment.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("AI-Resistant Assignments",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Receive suggestions on making assignments more challenging for AI chatbots..", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>  
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/sat-reading-practice">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-sat-reading-practice.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("SAT Reading Practice Test",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a practice SAT reading passage and associated questions.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>    
            </div>

            
        <div class="row mb-3">
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/syllabus-generator">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-syllabus-generator.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Syllabus Generator",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a syllabus based on information provided about your class for the school year.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>            
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/gift-suggestion">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-gift-suggestion.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("Gift Suggestion",25)}}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("A gift suggestion recommendation tool for teachers shopping for all of their loved ones.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>
        </div>

        <div class="row mb-3">            
            <div class="col-md-6 mb-3">
                <nuxt-link to="/tools/sat-reading-custom">
                <div class="card bg-white magic-cards d-flex flex-row align-items-center px-3">
                    <img src="https://app.magicschool.ai/tools/icon-tool-sat-reading-custom.svg" height="50" width="50" class=""
                        alt="Card Image">
                    <div class="card-body flex-grow-1">
                        <h4 class="card-title mb-0">{{truncateText("",25)}}{{truncateText ("SAT Reading Practice Test", 30) }}</h4>
                        <p class="card-text" style="font-size: small;">{{truncateText("Generate a practice SAT reading passage and associated questions.", 60) }}</p>
                    </div>
                    <i class="fas fa-star ml-auto mb-auto mt-3"></i>
                </div>
                </nuxt-link>
            </div>    
            </div> -->

        


    </div>
</div>
    <!-- </div> -->
</template>
<script>
export default {
    head() {
        return {
            title: "Tools",
            meta: [
                {
                    hid: "description",
                    name: "description",                    
                },
            ],
        };
    },
  name: "Index",
  methods: {
    truncateText(text, maxLength) {
      return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    },
  },
};
</script>
<style>
/* .cardcontent> :last-child {
    margin-bottom: 24px;
} */
/* 
.btn {
    border-radius: 25px !important;
} */

/* .cardcontent .btn-light {
  background-color: #d5dce6;
} */

/* .cardcontent:hover {
    background-color: #eaeef2;
}

.cardcontent:active,
.cardcontent:focus {
    background-color: #d5dce6;
} */

/* .flex-row {
    flex-direction: row;
}

.flex-wrap {
    flex-wrap: wrap;
}

.text-sm {
    font-size: 875.rem;
    line-height: 1.25rem;
} */
</style>


