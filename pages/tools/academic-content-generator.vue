<template>
    <div class="container py-3">
        <div class="row justify-content-center m-0">
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
                            <button type="button" class="btn btn-2 fw-semibold"
                                style="margin-right: 4px; border: none; border-radius: 10px; font-size: 14px; color: #0394fe;">
                                <i class="fas fa-light fa-rotate-right mx-2" style="font-size: auto;"></i>Clear
                                Inputs</button>
                            <button type="button" class="btn btn-2 fw-semibold"
                                style="margin-right: 4px; border: none; border-radius: 10px; font-size: 14px; color: #0394fe;">
                                <i class="fas fa-star mx-2"></i>Exemplar</button>
                        </div>
                    </div>
                </div>


                <h3 class="display-7 text-center mb-0 mt-3">Academic Content
</h3>
                <p class="text-center mb-2">Create custom academic material for your class tailored to your topic and requirements
                </p>

                <div class="row justify-content-center m-0">
                    <div class="col-md-12 px-2 mb-0">
                        <h5 class="display-7 mb-0 mt-3">Text Lenght:                            
                        </h5>
                        <div class="form-group mb-4">
                            <textarea class="form-control" rows="1" maxlength="8000" placeholder="300 words, 1 paragraph, 1 page, 2 pages" 
                            style="white-space: pre-line; font-size: 15px;"></textarea>
                        </div>                        
                    </div>
                    <div class="col-md-12 px-2">
                        <h5 class="display-7 mb-0 mt-0">Genre of Content:
                        </h5>
                        <div class="form-group">
                            <textarea class="form-control" rows="3" maxlength="8000" placeholder=" Step-by-Step Guide

Short Story

Convincing / Persuasive

News"
                             style="white-space: pre-line; font-size: 15px;"></textarea>
                        </div>                        
                        
                    </div>

                    <div class="col-md-12 px-2">
                        <h5 class="display-7 mb-0 mt-3">Topic, Objective or Criterion (try to be specific):
                        </h5>
                        <div class="form-group mb-4">
                            <textarea class="form-control" rows="3" maxlength="8000" placeholder="An essay detailing the occurrences of the Olympics games

A chronology of the happenings during the Independence of India between 1900 to 1945, etc." 
                            style="white-space: pre-line; font-size: 15px;"></textarea>
                        </div>                        
                    </div>

                    <div class="col-md-12 px-2">
                        <h5 class="display-7 mb-0 mt-3">Additional Criteria:
                        </h5>
                        <div class="form-group mb-4">
                            <textarea class="form-control" rows="6" maxlength="8000" placeholder="Include the following concepts…

Exclude anything related to …

Detail out each event with its timelines,

Include famous quotes and figure of speech,

Employ credibility, emotion, and logic,

Vividly depict the environment,

Keep a humorous tone," 
                            style="white-space: pre-line; font-size: 15px;"></textarea>
                        </div>                        
                        <button class="btn btn-block fw-bold p-3"
                            style="background-color: #0394fe; color: white; width: 100%; border-radius: 25px;">Generate</button>
                    </div>


                    

                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</template>

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
</style>

<script>
export default {
    head() {
        return {
            title: "Academic Content",
            meta: [
                {
                    hid: "description",
                    name: "description",                    
                },
            ],
        };
    },
};
</script>

