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


                <h3 class="display-7 text-center mb-0 mt-3">5E Model Lesson Plan
                </h3>
                <p class="text-center mb-2 mx-2">Generate a 5E model lesson plan for your science class. Engage, Explore, Explain, Elaborate, Evaluate.
                </p>

                <div class="row justify-content-center m-0">

                    <div class="col-md-12 px-2">
                        <h5 class="display-7 mb-0 mt-3">Grade Level:</h5>
                        <div class="form-group">
                            <select class="form-control">
                                <option value="grade1">Pre-K</option>
                                <option value="grade2">Kindergarten</option>
                                <option value="grade3">1st grade</option>
                                <option value="grade3">2st grade</option>
                                <option value="grade3">3st grade</option>
                                <option value="grade3">4st grade</option>
                                <option value="grade3">5st grade</option>
                                <option value="grade3">6st grade</option>
                                <option value="grade3">7st grade</option>
                                <option value="grade3">8st grade</option>
                                <option value="grade3">9st grade</option>
                                <option value="grade3">10st grade</option>
                                <option value="grade3">11st grade</option>
                                <option value="grade3">12st grade</option>
                                <option value="grade3">University</option>
                                <option value="grade3">Year 1</option>
                                <option value="grade3">Year 2</option>
                                <option value="grade3">Year 3</option>
                                <option value="grade3">Year 4</option>
                                <option value="grade3">Year 5</option>
                                <option value="grade3">Year 6</option>
                                <option value="grade3">Year 7</option>
                                <option value="grade3">Year 8</option>
                                <option value="grade3">Year 9</option>
                                <option value="grade3">Year 10</option>
                                <option value="grade3">Year 11</option>
                                <option value="grade3">Year 12</option>
                                <option value="grade3">Year 13</option>
                                <option value="grade3">Other</option>
                            </select>
                        </div>
                    </div>                   
                
                    <div class="col-md-12 px-2">
                        <h5 class="display-7 mb-0">Subject or Topic:</h5>
                        <div class="form-group">
                            <textarea class="form-control" rows="6" maxlength="8000" placeholder="Subject, standard, or more detailed aim of what you're teaching.
                            You can provide the detailed explanation and can use any standard worldwide or mention board. For instance, Following NCERT standard, Use the basic properties of trigonometry to calculate dimensions of different objects."
                                style="white-space: pre-line; font-size: 15px;"></textarea>
                        </div>                        
                    </div>

                    <div class="col-md-12 px-2">
                        <h5 class="display-7 mb-0">Additional Requirements:</h5>
                        <div class="form-group">
                            <textarea class="form-control" rows="4" maxlength="8000" placeholder="Students are studying about rectangles,

their last class focused on the squares and its properties,

make sure lesson involves group work or home assignment, etc."
                                style="white-space: pre-line; font-size: 15px;"></textarea>
                        </div>                        
                    </div>

                    <div class="col-md-12 px-2 mb-4">
                        <h5 class="display-7 mb-0">Standards To Align To:</h5>
                        <div class="form-group">
                            <textarea class="form-control" rows="1" maxlength="8000" placeholder="Any standards across the globe (CCSS, IBDP, NCERT, IGCSE, CBSE, ICSE).

Or --

ICSE board in INDIA"
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
            title: "5E Model Lesson Plan",
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

