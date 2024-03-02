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


                <h3 class="display-7 text-center mb-0 mt-3">Decodable Texts
                </h3>
                <p class="text-center mb-2 mx-2">Generate a decodable text based on the Science of Reading to support early literacy.
                </p>

                <div class="row justify-content-center m-0">
                    <div class="col-md-12 px-2">
                        <h5 class="display-7 mb-0 mt-3">Objective / Pattern / Example Word:</h5>
                        <div class="form-group">
                            <select class="form-control">
                                <option value="grade1">1 m /m/ am</option>
                                <option value="grade2">2 t /t/ at, mat</option>
                                <option value="grade3">3 s /s/ sat</option>
                                <option value="grade3">4 p /p/ sat, tap</option>
                                <option value="grade3">5 I /ĭ/ sit, tip</option>
                                <option value="grade3">6 f /f/ fit, if</option>
                                <option value="grade3">7 n /n/ nip, tin</option>
                                <option value="grade3">8 o /ŏ/ on, pot</option>
                                <option value="grade3">9 d /d/ mad, dim</option>
                                <option value="grade3">10 r /r/ rat, rid</option>
                                <option value="grade3">11 u /ŭ/ pup, sum</option>
                                <option value="grade3">12 c /k/ cod, cub</option>
                                <option value="grade3">13 g /g/ gut, dig</option>
                                <option value="grade3">14 b /b/ ban, bib</option>
                                <option value="grade3">15 e /ĕ/ set, bed</option>
                                <option value="grade3">16 h /h/ hem, hip</option>
                                <option value="grade3">17 l /l/ lid, lag</option>
                                <option value="grade3">18 k /k/ kid, kin</option>
                                <option value="grade3">19 j /j/ jug, jam</option>
                                <option value="grade3">20 w /w/ wag, wit</option>
                                <option value="grade3">21 y /y/ yam, yet</option>
                                <option value="grade3">22 x /ks/ ax, fox</option>
                                <option value="grade3">23 v /v/ van, vex</option>
                                <option value="grade3">24 z /z/ zap, zit</option>
                                <option value="grade3">25 ck /k/ duck, lock</option>
                                <option value="grade3">26 qu /kw/ quack, quiz</option>
                                <option value="grade3">27 -s /s/ pets, fits</option>
                                <option value="grade3">28 -s /z/ bans, runs</option>
                                <option value="grade3">29 k /k/ blends skid, tusk</option>
                                
                                <!-- Add more options as needed -->
                            </select>
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
            title: "Decodable Texts",
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