<template>
    <div class="container p-4">
        <div class="row m-0">
            <div class="col-md-12 mb-4 pt-2 pb-1 d-flex"
                style="background-color: rgb(255, 255, 255); color: rgb(54, 65, 82); box-shadow: none; border-radius: 8px; overflow: hidden; border: none rgba(224, 224, 224, 0.596);">
                <h4 class="mobilevw fw-semibold p-2 m-3"> Magic School Subscription</h4>
                <div class="m-2">
                    <!-- <label class="switch btn-color-mode-switch">
                        <input type="checkbox" name="color_mode" id="color_mode" value="1">
                        <label for="color_mode" data-on="Yearly Billing" data-off="Monthly Billing"
                            class="btn-color-mode-switch-inner"></label>
                    </label> -->
                    <label class="switch btn-color-mode-switch">
                        <input v-model="isYearlyBilling" type="checkbox" id="color_mode" name="color_mode" value="1">
                        <label for="color_mode" data-on="Yearly Billing" data-off="Monthly Billing"
                            class="btn-color-mode-switch-inner"></label>
                    </label>

                </div>
            </div>

            <div class="row justify-content-center align-items-center">
                <div class="col-md-4 mb-3">
                    <div class="card card-price p-3" style="width: 22rem; border: 2px solid #0394fe;">
                        <img class="card-img-top mx-auto d-block" src="/images/site_logo.png" alt="Card image cap"
                            style="width: 180px;">
                        <div class="card-body">
                            <h3 class="card-title fw-semibold mb-0" style="color: #0394fe;">MagicSchool Plus</h3>
                            <p class="card-text mt-0" style="font-size:small;">For users of MagicSchool who want unlimited
                                usage and plus features.</p>
                            <a href="https://checkout.stripe.com/c/pay/cs_live_a15E8ypAHLbxqhVKLvYfFqHYEES3cuix5sgXweabiZtf4ZtmExrMUb19Q2#fid2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FcXdwYCknZHVsTmB8Jz8ndW5aaWxzYFowNEs9UDJgTWY3YjVDdDZTVTZnVWZkQlx8bDZcUW81Q3FxU0ZraE9hXENfYWhjVG1canNoYkJoSUdUQDZTMnVObnJpfGBiSWpDVld2V2BUZ2RcblFpVGJIXTU1XXVAZ2lWNGEnKSdjd2poVmB3c2B3Jz9xd3BgKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl"
                                class="btn mt-3"
                                style="background-color: #0394fe; color: white; width: 100%; font-size: large; font-weight:500;">
                                <i class="fa fa-arrow-right" style="font-size: auto; float: left;"></i>
                                Subscribe Now!
                            </a>
                            <div class="mt-4 mb-0 fw-semibold" style="font-size: 20px;">
                                <span v-if="!isYearlyBilling">
                                    <span style="font-size: 1.5em;">$</span>
                                    <span style="font-size: 2em;">11.99</span>
                                    <span style="font-size: 0.8em;">/mo</span>
                                    <span style="font-size: 0.6em;"> (143.88 yearly)</span>
                                    <p class="mt-0 mb-5" style="font-size: 13px;">When billed monthly. Cancel anytime.</p>
                                </span>
                                <span v-else>
                                    <!-- Adjust the yearly price as needed -->
                                    <span style="font-size: 1.5em;">$</span>
                                    <span style="font-size: 2em;">8.33</span>
                                    <span style="font-size: 0.8em;">/mo</span>
                                    <span style="font-size: 0.6em;"> (99.96 yearly)</span>
                                    <p class="mt-0 mb-5" style="font-size: 13px;">Save 30% when billed yearly.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div class="col-md-12 mb-4 pt-2 pb-1"
                style="background-color: rgb(255, 255, 255); color: rgb(54, 65, 82); box-shadow: none; border-radius: 8px; overflow: hidden; border: none rgba(224, 224, 224, 0.596);">

                <div class="table-responsive">
                    <table class="table table-bordered">
                        <!-- <thead>
                            <tr class="text-center">
                                <th></th>
                                <th class="mt-0"><img src="/images/logo_magic_school.png" alt="Feature 1"
                                        style="max-width: 120px; max-height: 50px;">
                                </th>
                                <th><img src="/images/magicschoolplus.webp" alt="Feature 2"
                                        style="max-width: 120px; max-height: 70px;"></th>
                                <th><img src="/images/magicschoolent.webp" alt="Feature 3"
                                        style="max-width: 120px; max-height: 70px;"></th>
                            </tr>
                        </thead> -->
                        <tbody>
                            <tr class="text-center align-middle">
                                <td class="fw-semibold" style="font-size: 14px;">Features</td>
                                <td style="font-size: 14px;">Free</td>
                                <td style="font-size: 12px;">$11.99/mo billed monthly 8.33/mo ($99.96 yearly) - 30% off</td>
                                <td style="font-size: 12px;">Innovators Program (Special pricing and pilots through EOY)
                                </td>
                            </tr>
                            <tr class="text-center align-middle">
                                <td>60+ AI Tools & Growing (lesson planning, differentiation, writing feedback, IEP writing,
                                    and
                                    more!)</td>
                                <td><i class="fas fa-check-square" style="font-size: 22px;"></i></td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr class="text-center align-middle">
                                <td>Raina (educational chatbot)</td>
                                <td><i class="fas fa-check-square" style="font-size: 22px;"></i></td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr class="text-center align-middle">
                                <td>Chrome Extension</td>
                                <td><i class="fas fa-check-square" style="font-size: 22px;"></i></td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr class="text-center align-middle">
                                <td>Saved output history, resources, and threads</td>
                                <td>Limited</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr class="text-center align-middle">
                                <td>Exclusive early access to new features and premium tools</td>
                                <td><i class="fa fa-lock" style="font-size: 22px;"></i></td>
                                <td><i class="fas fa-check-square" style="font-size: 22px;"></i></td>
                                <td><i class="fas fa-check-square" style="font-size: 22px;"></i></td>
                            </tr>
                            <tr class="text-center align-middle">
                                <td>Raina customizations in all 60+ tools (differentiate, modify, resources, custom prompts)
                                </td>
                                <td><i class="fas fa-lock" style="font-size: 22px;"></i></td>
                                <td><i class="fas fa-check-square" style="font-size: 22px;"></i></td>
                                <td><i class="fas fa-check-square" style="font-size: 22px;"></i></td>
                            </tr>
                            <tr class="text-center align-middle">
                                <td>Integrations (Google exports, future MS exports & other LMS integrations)</td>
                                <td><i class="fas fa-lock" style="font-size: 22px;"></i></td>
                                <td><i class="fas fa-check-square" style="font-size: 22px;"></i></td>
                                <td><i class="fas fa-check-square" style="font-size: 22px;"></i></td>
                            </tr>
                            <tr class="text-center align-middle">
                                <td>Customizations & Feature Requests</td>
                                <td><i class="fas fa-lock" style="font-size: 22px;"></i></td>
                                <td><i class="fas fa-lock" style="font-size: 22px;"></i></td>
                                <td><i class="fas fa-check-square" style="font-size: 22px;"></i></td>
                            </tr>
                            <tr class="text-center align-middle">
                                <td>Support</td>
                                <td>Community (Facebook Group)</td>
                                <td>In-App chat</td>
                                <td>PD options, dedicated support with monthly check-ins, usage analytics, and more.</td>
                            </tr>
                            <tr class="text-center align-middle">
                                <td>SSO / Privacy</td>
                                <td>FERPA Compliant</td>
                                <td>FERPA Compliant</td>
                                <td>School/District DPA & any SSO</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p style="font-size: small;">*Usage will only be unlimited for 1 person per account. It will only be limited
                    if account sharing is suspected and other extreme cases.</p>
            </div>

            <div class="col-md-12 p-3 mb-4"
                style="background-color: rgb(255, 255, 255); color: rgb(54, 65, 82); box-shadow: none; border-radius: 8px; overflow: hidden; border: none rgba(224, 224, 224, 0.596);">
                <!-- Search bar field with search icon -->
                <div class="row m-0">
                    <h1 class="display-7 mt-3 fw-semibold" style="color: black;">Why MagicSchool?</h1>
                    <p style="font-size: 16.5px;"><b>The most used and <a href="https://love.magicschool.ai/all"
                                style="color: #0394fe;">loved</a> AI platform for educators worldwide.</b>Over a million
                        educators embracing AI with MagicSchool and growing.</p>
                    <p style="font-size: 16.5px;"><b>All of your AI needs in one place.</b> Your "one stop shop" for AI in
                        education. Continually updated with the latest and greatest features and tools.</p>

                    <p style="font-size: 16.5px;"><b>Save time, fight burnout, & promote sustainability.</b> An AI assistant
                        to lighten your load and help you shine where it counts the most - with your students!</p>

                    <p style="font-size: 16.5px;"><b>Build AI Competencies and Skills!</b> MagicSchool not only makes it
                        easy to use AI in your workflow, it also helps build skills and knowledge about AI in the process.
                    </p>
                </div>
            </div>

            <h2 class="px-4 mb-0 display-7 fw-semibold">Frequently Asked Questions (FAQ)</h2>
            <div class="col-md-12 p-3 mb-4">
                <div class="accordion" id="accordionExample">
                    <div class="card mb-3 border-0">
                        <div class="d-flex card-header border-0 bg-white fw-semibold collapsed" id="headingOne"
                            data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
                            aria-controls="collapseOne">
                            <h4 class="mb-0 pb-0 px-2 pt-3 text-left flex-grow-1 ">
                                But wait, is MagicSchool still free for teachers?
                            </h4>
                            <i class="p-4 fas fa-chevron-down ml-auto text-secondary"></i>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body border-0 px-4 pb-4 pt-0">
                                Yes! We will always offer a generous free version of MagicSchool for teachers after your
                                free Trial - but some of the new MagicSchool Plus features will be limited. Most
                                functionalities of the platform that you’ve grown to love remain free, with the new
                                additional features being incorporated into our Enterprise and Plus tiers.
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 border-0">
                        <div class="d-flex card-header border-0 bg-white fw-semibold collapsed" id="headingTwo"
                            data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            <h4 class="mb-0 pb-0 px-2 pt-3 text-left flex-grow-1 ">
                                How can I ensure I get all the features of MagicSchool Plus after my free trial?
                            </h4>
                            <i class="p-4 fas fa-chevron-down ml-auto text-secondary"></i>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body border-0 px-4 pb-4 pt-0">
                                We would love to bring all the features of MagicSchool Plus to you and your colleagues.
                                Apply for our AI Innovators program to secure a special discount for our school / district
                                licenses and a low-cost pilot program through the end of the school year. Click here to
                                apply for the innovators program now.
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 border-0">
                        <div class="d-flex card-header border-0 bg-white fw-semibold collapsed" id="headingThree"
                            data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            <h4 class="mb-0 pb-0 px-2 pt-3 text-left flex-grow-1 ">
                                If my school or district does not get a license, can I still get MagicSchool Plus?
                            </h4>
                            <i class="p-4 fas fa-chevron-down ml-auto text-secondary"></i>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                            data-parent="#accordionExample">
                            <div class="card-body border-0 px-4 pb-4 pt-0">
                                At the request of our users, we will also offer an individual subscriber model for
                                MagicSchool in case your school isn’t ready to partner. You can secure a founding members
                                discount if you sign up before 1/24/2024 in the app by clicking on the sidebar where it says
                                "Upgrade".
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0">
                        <div class="d-flex card-header border-0 bg-white fw-semibold collapsed" id="heading4"
                            data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            <h4 class="mb-0 pb-0 px-2 pt-3 text-left flex-grow-1 ">
                                How much does MagicSchool Plus cost?
                            </h4>
                            <i class="p-4 fas fa-chevron-down ml-auto text-secondary"></i>
                        </div>
                        <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
                            <div class="card-body border-0 px-4 pb-4 pt-0">
                                For school and district licenses, we're running low cost promotional pilots for those who
                                join our AI Innovators Program before the end of 2024. Details for school and district
                                pricing and volume-based discounts will be shared in our meeting after the application is
                                completed.
                                <h4 class="pt-3 mb-2 fw-bold">‍For individual subscribers, pricing is as follows:</h4>
                                <p class="mb-2"><b>Billed Monthly: </b> 11.99 per month</p>
                                <p class="mb-2"><b>Billed Yearly: </b> (30% discount): 8.33 per month ($99.96 yearly).</p>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0">
                        <div class="d-flex card-header border-0 bg-white fw-semibold collapsed" id="heading5"
                            data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            <h4 class="mb-0 pb-0 px-2 pt-3 text-left flex-grow-1 ">
                                How does pricing compare to other AI platforms?
                            </h4>
                            <i class="p-4 fas fa-chevron-down ml-auto text-secondary"></i>
                        </div>
                        <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
                            <div class="card-body border-0 px-4 pb-4 pt-0">
                                Many AI tools aren’t built with the needs of teachers in mind and are priced beyond their
                                reach. With Microsoft Copilot being priced at $30 a month and ChatGPT Plus priced at $20 per
                                month, we wanted to make accessible pricing option for teachers and a tool that integrates
                                into educator workflows more seamlessly. <br>
                                Our yearly cost is over 50% lower than both Microsoft Copilot and ChatGPT Plus.
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0">
                        <div class="d-flex card-header border-0 bg-white fw-semibold collapsed" id="heading6"
                            data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                            <h4 class="mb-0 pb-0 px-2 pt-3 text-left flex-grow-1 ">
                                What if I sign up for MagicSchool Plus and then my school / district becomes an innovators
                                partner and gets an Enterprise license for me?
                            </h4>
                            <i class="p-4 fas fa-chevron-down ml-auto text-secondary"></i>
                        </div>
                        <div id="collapse6" class="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
                            <div class="card-body border-0 px-4 pb-4 pt-0">
                                Great question! We’re happy to give you a prorated refund of your purchase price for our
                                individual subscriber model if your school signs on. Just make sure you sign up with your
                                school email address and let us know.
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0">
                        <div class="d-flex card-header border-0 bg-white fw-semibold collapsed" id="heading7"
                            data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                            <h4 class="mb-0 pb-0 px-2 pt-3 text-left flex-grow-1 ">
                                How will usage / words generated be limited across the different tiers?
                            </h4>
                            <i class="p-4 fas fa-chevron-down ml-auto text-secondary"></i>
                        </div>
                        <div id="collapse7" class="collapse" aria-labelledby="heading7" data-parent="#accordionExample">
                            <div class="card-body border-0 px-4 pb-4 pt-0">
                                For MagicSchool users on the free platform, limits will change dynamically based on overall
                                usage to ensure smooth access for our premium users. The calculation we use intends for the
                                majority of users not to hit a generation limit until nearing the end of the month and power
                                users to be limited sooner. Limits will reset monthly and users will get a warning as
                                they’re getting close to their limit.
                                <br><br>
                                For MagicSchool Plus and MagicSchool Enterprise users, you will have unlimited* access.
                                <br><br>*Only the top .1% of users will be capped to prevent account sharing and other
                                extreme cases.




                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0">
                        <div class="d-flex card-header border-0 bg-white fw-semibold collapsed" id="heading8"
                            data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                            <h4 class="mb-0 pb-0 px-2 pt-3 text-left flex-grow-1 ">
                                How will I know if I’m close to my limit if I’m a free user?
                            </h4>
                            <i class="p-4 fas fa-chevron-down ml-auto text-secondary"></i>
                        </div>
                        <div id="collapse8" class="collapse" aria-labelledby="heading8" data-parent="#accordionExample">
                            <div class="card-body border-0 px-4 pb-4 pt-0">
                                Since usage limits change dynamically based on total platform usage, we’re not able to share
                                that with you precisely (but you will get a warning when you're getting close as described
                                above). If you love MagicSchool, let your school administration know so they can join the AI
                                Innovators Program or if your school isn’t ready, subscribe to MagicSchool Plus.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Subscription",
            meta: [
                {
                    hid: "description",
                    name: "description",                    
                },
            ],
        };
    },
    data() {
        return {
            isYearlyBilling: true, // Initial state of the toggle switch
        };
    },
};
</script>

<style lang="scss" scoped>
label {
    font-size: 13px;
    color: #424242;
    font-weight: 500;
}

.btn-color-mode-switch {
    display: inline-block;
    margin: 0px;
    position: relative;
}

.btn-color-mode-switch>label.btn-color-mode-switch-inner {
    margin: 0px;
    width: 300px;
    height: 60px;
    background: #f1f1f1;
    border-radius: 50px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    /*box-shadow: 0px 0px 8px 0px rgba(17, 17, 17, 0.34) inset;*/
    display: block;
}

.btn-color-mode-switch>label.btn-color-mode-switch-inner:before {
    content: attr(data-on);
    position: absolute;
    font-size: 15px;
    font-weight: 150;
    top: 4px;
    right: 20px;
    padding: 13px 10px;
}

.btn-color-mode-switch>label.btn-color-mode-switch-inner:after {
    content: attr(data-off);
    width: 150px;
    height: 60px;
    font-size: 15px;
    color: white;
    background: #000;
    border-radius: 50px;
    position: absolute;
    left: 1px;
    top: 0px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 6px -2px #111;
    padding: 17px 0px;
}

.btn-color-mode-switch>.alert {
    display: none;
    background: #FF9800;
    border: none;
    color: #fff;
}

.btn-color-mode-switch input[type="checkbox"] {
    cursor: pointer;
    width: 50px;
    height: 25px;
    opacity: 0;
    position: absolute;
    top: 0;
    z-index: 1;
    margin: 0px;
}

.btn-color-mode-switch input[type="checkbox"]:checked+label.btn-color-mode-switch-inner {
    background: #f1f1f1;
    color: #000;
}

.btn-color-mode-switch input[type="checkbox"]:checked+label.btn-color-mode-switch-inner:after {
    content: attr(data-on);
    left: 150px;
    background: #000;
}

.btn-color-mode-switch input[type="checkbox"]:checked+label.btn-color-mode-switch-inner:before {
    content: attr(data-off);
    right: auto;
    left: 20px;
}

.btn-color-mode-switch input[type="checkbox"]:checked+label.btn-color-mode-switch-inner {
    /*background: #66BB6A; */
    /*color: #fff;*/
}

.btn-color-mode-switch input[type="checkbox"]:checked~.alert {
    display: block;
}

@media (max-width: 768px) {
    .card-price {
        // left: 40px;
    }

    .mobilevw {
        display: none;
    }

    .switch {
        left: 30px;
    }

    .table-responsive {
        overflow-x: auto;
        overflow-y: auto;
    }

    .table {
        width: 100%;
        margin-bottom: 1rem;
        color: #212529;
        border-collapse: collapse;
    }

    .table td,
    .table th {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
    }

    .table thead th {
        vertical-align: bottom;
        border-bottom: 2px solid #dee2e6;
    }

}
</style>
