<template>
    <div class="container py-3">
        <dialog id="myDialog" class="dialog-box">
            <h2>Warning</h2>
            <p>{{ responseString }}</p>
            <button class="btn btn-block fw-bold p-3" style="background-color: #0394fe; color: white; width: 100%; border-radius: 25px;" @click="closeDialog()">{{ dialogBoxBtnText }}</button>
        </dialog>
        <div class="row justify-content-center m-0">
            <!-- Share & Back button -->
            <div class="col-md-2 p-0">
                <div class="cardcontent" style="padding: 24px;">
                    <div class="fs-5 lh-1.25">
                        <button type="button" class="btn btn-1 fw-semibold"
                                style="margin-right: 4px; border: none; border-radius: 25px; font-size: 15px; color: #0394fe;">
                            <a href="/" style="color: #0394fe;"><i class="fa fa-arrow-left mx-2"></i>Back</a></button>
                        <!-- <button type="button" class="btn btn-1 fw-semibold"
                                style="margin-right: 4px; border: none; border-radius: 25px; font-size: 15px; color: #0394fe;">
                            <i class="fas fa-light fa-share-nodes mx-2"></i>Share</button> -->
                    </div>
                </div>
            </div>
            <div class="col-md-8 p-0"
                 style="background-color: rgb(255, 255, 255); color: rgb(54, 65, 82); box-shadow: none; border-radius: 8px; overflow: hidden; border: none rgba(224, 224, 224, 0.596);">

                <div class="cardcontent" style="padding: 24px;">
                    <div class="d-flex flex-row justify-content-start fs-5 lh-1.25">
                        <div class="d-flex flex-row fs-5 lh-1.25">
                            <button type="button" class="btn btn-2 fw-semibold" @click="clearInputs" style="margin-right: 4px; border: none; border-radius: 10px; font-size: 14px; color: #0394fe;">
                                <i class="fas fa-light fa-rotate-right mx-2" style="font-size: auto;"></i>Clear
                                Inputs</button>
                            <button type="button" class="btn btn-2 fw-semibold"
                                    style="margin-right: 4px; border: none; border-radius: 10px; font-size: 14px; color: #0394fe;">
                                <i class="fas fa-star mx-2"></i>Exemplar</button>
                        </div>
                    </div>
                </div>

                <h3 class="display-7 text-center mb-0 mt-3">Lesson Plan</h3>
                <p class="text-center mb-2">Generate a lesson plan for a topic or objective you’re teaching.</p>

                <div class="row justify-content-center m-0">
                    <div>
                        <div class="col-md-12 px-2">
                            <h5 class="display-7 mb-0 mt-3">Grade Level:</h5>
                            <div class="form-group">
                                <select v-model="grade" class="form-control">
                                    <option value="Pre-K">Pre-K</option>
                                    <option value="Kindergarten">Kindergarten</option>
                                    <option value="1st grade">1st grade</option>
                                    <option value="2nd grade">2nd grade</option>
                                    <option value="3rd grade">3rd grade</option>
                                    <option value="4th grade">4th grade</option>
                                    <option value="5th grade">5th grade</option>
                                    <option value="6th grade">6th grade</option>
                                    <option value="7th grade">7th grade</option>
                                    <option value="8th grade">8th grade</option>
                                    <option value="9th grade">9th grade</option>
                                    <option value="10th grade">10th grade</option>
                                    <option value="11th grade">11th grade</option>
                                    <option value="12th grade">12th grade</option>
                                    <option value="University">University</option>
                                    <option value="Year 1">Year 1</option>
                                    <option value="Year 2">Year 2</option>
                                    <option value="Year 3">Year 3</option>
                                    <option value="Year 4">Year 4</option>
                                    <option value="Year 5">Year 5</option>
                                    <option value="Year 6">Year 6</option>
                                    <option value="Year 7">Year 7</option>
                                    <option value="Year 8">Year 8</option>
                                    <option value="Year 9">Year 9</option>
                                    <option value="Year 10">Year 10</option>
                                    <option value="Year 11">Year 11</option>
                                    <option value="Year 12">Year 12</option>
                                    <option value="Year 13">Year 13</option>
                                    <option value="Other">Other</option>

                                    <!-- Add more options as needed -->
                                </select>
                            </div>
                        </div>

                        <div class="col-md-12 px-2 mb-0">
                            <h5 class="display-7 mb-0 mt-3">Subject, Standard, or Topic:</h5>
                            <div class="form-group mb-4">
                            <textarea
                                v-model="subject"
                                class="form-control"
                                rows="4"
                                maxlength="8000"
                                placeholder="Subject, standard, or more detailed aim of what you're teaching. You can provide the detailed explanation and can use any standard worldwide or mention board. For instance, Following NCERT standard, Use the basic properties of trigonometry to calculate dimensions of different objects."
                                style="white-space: pre-line; font-size: 15px;"
                            ></textarea>
                            </div>
                        </div>
                        <div class="col-md-12 px-2">
                            <h5 class="display-7 mb-0 mt-0">Additional Requirements:</h5>
                            <div class="form-group mb-4">
                                <textarea
                                    v-model="additionalRequirements"
                                    class="form-control"
                                    rows="4"
                                    maxlength="8000"
                                    placeholder="Students are studying about rectangles,their last class focused on the squares and its properties, make sure lesson involves group work or home assignment, etc."
                                    style="white-space: pre-line; font-size: 15px;"
                                ></textarea>
                            </div>
                        </div>

                        <div class="col-md-12 px-2 mb-0">
                            <h5 class="display-7 mb-0 mt-0">Standards To Align To</h5>
                            <div class="form-group mb-4">
                            <textarea
                                v-model="standardsToAlign"
                                class="form-control"
                                rows="3"
                                maxlength="8000"
                                placeholder="Any standards across the globe (CCSS, IBDP, NCERT, IGCSE, CBSE, ICSE).
                            Or -- ICSE board in INDIA"
                                style="white-space: pre-line; font-size: 15px;"
                                ></textarea>
                            </div>
                        </div>

                        <!-- Chat Display -->
                        <div id="printArea" class="col-md-12 px-2 mt-4" v-if="responseReceived">
                            <div class="form-group mb-4">
                                <div v-for="(entry, index) in responseHistory" :key="index">
                                    <!-- Display user prompt -->
                                    <div v-if="index % 2 === 0 && index > 0" class="user-prompt">
                                        <h5 class="display-7 mb-0 mt-0 responseHistoryTitle">You</h5>
                                        <p class="userPromptHistoryText">{{ entry }}</p>
                                    </div>
                                    <!-- Display API response -->
                                    <div v-else-if="index > 0 && index != responseHistory.length-1" class="api-response">
                                        <h5 class="display-7 mb-0 mt-0 responseHistoryTitle" style="">Generated Response</h5>
                                        <pre class="responseHistoryText" style="font-family: 'Poppins', sans-serif; font-size: 14px">{{ entry }}</pre>
                                    </div>
                                    <div v-else-if="index > 0 && index == responseHistory.length-1" class="api-response">
                                        <h5 class="display-7 mb-0 mt-0 responseHistoryTitle" style="">Generated Response</h5>
                                        <pre class="responseHistoryText" style="font-family: 'Poppins', sans-serif; font-size: 14px">{{ typingText }}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Related Suggestions -->
                    <div class="col-md-12 px-2 mt-0" v-if="responseReceived">
                        <div v-if="suggestions.length > 0" class="d-flex mb-4">
                            <button v-for="(option, index) in suggestions"
                                    :key="index"
                                    type="button"
                                    class="btn suggestionBtn"
                                    :class="{ 'active': selectedSuggestion === option }"
                                    @click="selectSuggestion(option)">
                                {{ option }}
                            </button>
                        </div>
                    </div>

                    <div class="col-md-12 px-2 mb-0">
                        <div v-if="errorString != null">
                            <p style="color: red">{{errorString}}</p>
                        </div>
                        <button v-if="!responseReceived" class="btn btn-block fw-bold p-3 mb-3" style="background-color: #0394fe; color: white; width: 100%; border-radius: 25px;" @click="generateResponse" :disabled="waitingForResponse">Generate</button>
                        <div v-if="responseReceived" style="display: flex; align-items: center;" class="mb-3">
                            <input type="text" class="form-control" v-model="userPrompt" placeholder="Type your message..." @keyup.enter="generateResponse">
                            <button class="btn btn-primary" @click="generateResponse" :disabled="waitingForResponse">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <!-- Sticky buttons for copying and printing responses -->
                <div v-if="responseReceived" class="sticky-buttons">
                    <button type="button" class="btn btn-1 fw-semibold" @click="copyResponse" style="margin-right: 4px; border: none; border-radius: 25px; font-size: 15px; color: #0394fe;">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                    <button type="button" class="btn btn-1 fw-semibold" @click="exportToPDF" style="margin-right: 4px; border: none; border-radius: 25px; font-size: 15px; color: #0394fe;">
                        <i class="fas fa-file"></i> Export
                    </button>
                    <button type="button" class="btn btn-1 fw-semibold" @click="printResponse" style="margin-right: 4px; border: none; border-radius: 25px; font-size: 15px; color: #0394fe;">
                        <i class="fas fa-print"></i> Print
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data (){
        return {
            grade: 'Pre-K',
            subject: null,
            additionalRequirements: null,
            standardsToAlign: null,
            errorString: null,
            responseReceived: false,
            responseData: [],
            responseString: null,
            dialogBoxBtnText: null,
            suggestions: [],
            selectedSuggestion: null,
            generateAgain: false,
            userPrompt: '',
            responseHistory: [],
            userQueries: [],
            waitingForResponse: false,
            // typing animation variables
            typingText: '', // Text to be displayed with typing animation
            typingSpeed: 5, // Speed of typing animation (in milliseconds)
            currentIndex: 0, // Index of the current character being typed
            typingMessage: null,
        }
    },
    head() {
        return {
            title: "Lesson Plan",
            meta: [
                {
                    hid: "description",
                    name: "description",
                },
            ],
        };
    },
    mounted() {
        this.loadAvailableData();
    },
    methods:{
        async validateSession({ $axios }) {
            // Making a GET request to fetch posts
            try {
                const response = await this.$axios.get('toolsApp/verify_session_token', {
                    headers: {
                        'token': localStorage.getItem('oauthToken'),
                    }
                });
                console.log(response.data)
            } catch (error) {
                // Handle error
                console.log(error);
            }
        },
        async generateResponse({ $axios }) {
            // if(!this.responseReceived){
            //     this.responseHistory = [];
            // }
            this.errorString = null;
            this.suggestions = [];
            if(this.grade == '' || this.grade == null){
                this.errorString = "*Please fill all the fields.";
                return;
            }
            if(this.subject == '' || this.subject == null){
                this.errorString = "*Please fill all the fields.";
                return;
            }
            if(this.additionalRequirements == '' || this.additionalRequirements == null){
                this.errorString = "*Please fill all the fields.";
                return;
            }
            if(this.standardsToAlign == '' || this.standardsToAlign == null){
                this.errorString = "*Please fill all the fields.";
                return;
            }
            if(this.responseReceived == true &&( this.userPrompt == "" || this.userPrompt == null)){
                this.errorString = "*Please enter a prompt to proceed.";
                return;
            }
            else if (this.responseReceived == true && this.userPrompt != null) {
                this.userQueries.push(this.userPrompt);
            }
            this.responseHistory.push(this.userPrompt);
            this.userPrompt = '';
            // Making a GET request to fetch posts
            this.waitingForResponse = true;
            const data = {
                grade: this.grade,
                subject: this.subject,
                additional_requirements: this.additionalRequirements,
                standards_to_align: this.standardsToAlign
            }
            if(this.responseReceived == true){
                const messages = []
                for(var i = 0; i < this.responseData.length; i++){
                    messages.push({role: 'assistant',content: this.responseData[i]})
                    messages.push({role: 'user', content: this.userQueries[i]})
                }
                data['messages'] = messages;
            }
            console.log(data)
            try {
                const response = await this.$axios.post('toolsApp/get_lesson_planner_response', data, {
                    headers: {
                        'token': localStorage.getItem('oauthToken'),
                    }
                });
                console.log(response)
                this.waitingForResponse = false;
                if(response.data['Success']){
                    this.responseReceived = true;
                    this.responseData.push(response.data.response);
                    this.responseHistory.push(response.data.response);
                    // this.allResponses += '\n' + response.data.response;
                    for(var j = 0; j < response.data.suggestions.length; j++){
                        if(response.data.suggestions[j] != ''){
                            this.suggestions.push(response.data.suggestions[j]);
                        }
                    }
                    this.generateAgain = true;
                    this.userPrompt = '';
                    if(this.selectedSuggestion != null){
                        this.selectedSuggestion = null;
                    }
                    this.typeResponse();
                    console.log("Response history")
                    console.log(this.responseHistory)
                }
                else if(response.data['Failure'] == 'Invalid Token.'){
                    this.responseString = 'Please sign in to generate lesson plan.';
                    this.dialogBoxBtnText = 'Login';
                    localStorage.setItem('grade',this.grade);
                    localStorage.setItem('subject',this.subject);
                    localStorage.setItem('additionalRequirements',this.additionalRequirements);
                    localStorage.setItem('standardsToAlign',this.standardsToAlign);
                    localStorage.setItem('sessionToBeValidated',true);
                    // this.openDialog()
                    this.$router.push('/sign-in');
                }
                else{
                    this.responseString = response.data['Failure'];
                    // this.responseString = 'Testing';
                    this.dialogBoxBtnText = "Okay";
                    if(this.responseReceived == false){
                        this.responseHistory = [];
                    }
                    this.userPrompt = this.responseHistory[this.responseHistory.length-1];
                    this.responseHistory.splice(this.responseHistory.length-1,1);
                    this.openDialog()
                }
            } catch (error) {
                // Handle error
                console.log(error);
            }
        },
        openDialog() {
            var dialog = document.getElementById('myDialog');
            dialog.showModal();
        },
        closeDialog() {
            var dialog = document.getElementById('myDialog');
            if(this.dialogBoxBtnText == 'Login'){
                this.$router.push('/sign-in');
                dialog.close();
            }
            else{
                dialog.close();
            }
        },
        loadAvailableData(){
            if(localStorage.getItem('sessionToBeValidated') == 'true'){
                this.grade = localStorage.getItem('grade');
                this.subject = localStorage.getItem('subject');
                this.additionalRequirements = localStorage.getItem('additionalRequirements');
                this.standardsToAlign = localStorage.getItem('standardsToAlign');
                localStorage.setItem('sessionToBeValidated',false);
            }
        },
        selectSuggestion(option) {
            this.selectedSuggestion = option;
            this.userPrompt = option;
            // this.generateResponse();
        },
        copyResponse() {
            // const responseText = this.responseHistory.join('\n');
            var responseText = ""
            for(var i = 1; i < this.responseHistory.length; i++){
                if(i % 2 == 0){
                    responseText += 'User:\n' +this.responseHistory[i] + '\n\n';
                }
                else{
                    responseText += 'Generated Response:\n' +this.responseHistory[i] + '\n\n';
                }
            }
            navigator.clipboard.writeText(responseText).then(() => {
                // Show a success message or perform any other actions
                console.log('Response copied to clipboard!');
            }).catch(err => {
                // Handle any errors
                console.error('Unable to copy response: ', err);
            });
        },
        printResponse() {
            window.print();
        },
        exportToPDF() {
            const labeledData = this.responseHistory.flatMap((message, index) => {
                const label = index % 2 === 0 ? "User" : "Generated text";
                return [label, message];
            });
            var sourceHTML = document.getElementById("printArea").innerHTML;

            var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
            var fileDownload = document.createElement("a");
            document.body.appendChild(fileDownload);
            fileDownload.href = source;
            fileDownload.download = 'lesson-plan-generator.doc';
            fileDownload.click();
            document.body.removeChild(fileDownload);
        },
        // startTypingAnimation(response) {
        //     // if (this.currentIndex < this.responseHistory.length) {
        //     if (this.currentIndex < response.length) {
        //         const message = response[this.currentIndex];
        //         this.typeMessage(message);
        //     }
        // },
        // typeMessage(message) {
        //     let index = 0;
        //     const typingInterval = setInterval(() => {
        //         if (index < message.length) {
        //             this.revealedText += message[index];
        //             index++;
        //         } else {
        //             // Message fully typed, move to next message
        //             clearInterval(typingInterval);
        //             this.currentIndex++;
        //             this.revealedText = ''; // Reset revealed text for next message
        //             this.startTypingAnimation(this.typingMessage); // Continue typing next message
        //         }
        //     }, this.typingSpeed);
        // },
        clearInputs(){
            this.grade = 'Pre-K';
            this.subject = null;
            this.additionalRequirements = null;
            this.standardsToAlign = null;
            this.responseHistory = [];
            this.responseReceived = false;
            this.suggestions = [];
            this.selectedSuggestion = null;
            this.userQueries = [];
            this.userPrompt = '';
            this.dialogBoxBtnText = null;
            this.generateAgain = false;
        },
        typeResponse() {
            this.typingText = '';
            this.currentIndex = 0;
            const lastResponse = this.responseHistory[this.responseHistory.length - 1];
            if (lastResponse) {
                // Simulate typing effect
                const typingInterval = setInterval(() => {
                    // Append next character to typingText
                    this.typingText += lastResponse[this.currentIndex];
                    // Increment current index
                    this.currentIndex++;
                    // Check if all characters have been typed
                    if (this.currentIndex === lastResponse.length) {
                        clearInterval(typingInterval); // Stop typing animation
                    }
                }, this.typingSpeed);
            }
        },
    },
};
</script>

<style>
.btn-1:hover {
    background-color: #d9dbe4;
}
.btn-2:hover {
    background-color: #d9dbe4;
}
/* Set placeholder text color */
.form-control::placeholder {
    color: #333333;
    /* Fallback color */
    opacity: 0.5;
    /* 50% black opacity */
}
/* Set text color when typing */
.form-control {
    color: #000000;
    /* Black text color */
}
.dialog-box {
    width: 450px;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.btn.active {
    background-color: #0394fe;
    color: white;
}
.suggestionBtn{
    background-color: #c4c4c4;
    margin-right: 10px !important;
}
.suggestionBtn:hover{
    background-color: #0394fe;
}
.user-prompt {
    text-align: right;
    margin-bottom: 10px;
}
.api-response {
    text-align: left;
    margin-bottom: 10px;
}
.responseHistoryText{
    background-color: #f6f6f6;
    border-radius: 15px;
    padding: 10px;
}
.userPromptHistoryText{
    font-size: 14px !important;
    background-color: #48B8E6;
    border-radius: 15px;
    padding: 10px;
    font-family: 'Poppins', sans-serif !important;
}
.api-response pre {
    white-space: pre-wrap;
    margin-bottom: 0 !important;
}
.sticky-buttons {
    position: fixed;
    top: 10.6%; /* Adjust this value as needed */
    right: 8%; /* Adjust this value as needed */
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
}
.responseHistoryTitle{
    font-size: 14px !important;
    font-weight: bold !important;
    font-family: 'Poppins', sans-serif;
}
</style>
