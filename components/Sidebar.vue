<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-md-3 px-0 mx-0 side">
                <div class="b-example-divider b-example-vr"></div>
                <div class="flex-shrink-0 p-3 sticky-sidebar">
                    <nuxt-img class="logo-default d-block mx-auto" src="/images/site_logo1.png" alt="logo" format="png"
                        style="width: 130px;" />
                    <ul class="list-unstyled ps-0 ">
                        <li class="mb-1 d-flex ">
                            <nuxt-link to="/" :class="{ 'active-link': activeRoute === '/' }"
                                class="btn btn-toggle d-inline-flex align-items-center border-0 collapsed">
                                <img class="mx-3" src="/images/tools_icons/image026.png" width="24" height="24" alt="">
                                Magic Tools
                            </nuxt-link>
                        </li>
                        <li class="mb-1 d-flex">
                            <nuxt-link to="/history" :class="{ 'active-link': activeRoute === '/history' }"
                                class="btn btn-toggle d-inline-flex align-items-center border-0 collapsed">
                                <img class="mx-3" src="/images/tools_icons/image017.png" width="24" height="24" alt="">
                                Output History
                            </nuxt-link>
                        </li>
                        <li class="mb-1 d-flex">
                            <nuxt-link to="/subscription" :class="{ 'active-link': activeRoute === '/subscription' }"
                                class="btn btn-toggle d-inline-flex align-items-center border-0 collapsed">
                                <img class="mx-3" src="/images/tools_icons/image011.png" width="24" height="24" alt="">
                                Upgrade
                            </nuxt-link>
                        </li>
                        <li class="mb-1 d-flex">
                            <nuxt-link to="/about" :class="{ 'active-link': activeRoute === '/about' }"
                                class="btn btn-toggle d-inline-flex align-items-center border-0 collapsed">
                                <img class="mx-3" src="/images/tools_icons/image025.png" width="24" height="24" alt="">
                                About
                            </nuxt-link>
                        </li>
                        <!-- <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                Upgrade
                            </button>
                        </li> -->
                        <li class="border-top my-3"></li>
                        <li class="mb-1 d-flex">
                            <nuxt-link to="/terms" :class="{ 'active-link': activeRoute === '/terms' }"
                                class="btn btn-toggle d-inline-flex align-items-center border-0 collapsed"
                                style="font-size: small;">
                                <!-- <img class="mx-3" src="/images/tools_icons/image025.png" width="24" height="24" alt=""> -->
                                Terms &amp; Conditions
                            </nuxt-link>
                        </li>
                        <li class="mb-1">
                            <div class="dropdown">
                                <button class="btn btn-toggle dropdown-toggle" type="button" id="accountDropdownMenuButton"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="accountDropdownMenuButton">
                                    <li>
                                        <nuxt-link to="/profile" class="dropdown-item">Profile</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/logout" class="dropdown-item">Logout</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/login" class="dropdown-item">Sign In</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

            <!-- Sidebar toggle button for all screens -->
            <div class="col-md-3">
                <button class="d-md-none my-3 mx-3" data-bs-toggle="offcanvas" data-bs-target="#sidebar"
                    aria-controls="sidebar"
                    style="background-color: #0394fe; border: 1px solid #0394fe; border-radius: 4px;">
                    <i class="fas fa-bars text-white"></i>
                </button>
            </div>

            <!-- Sidebar for mobile screens -->
            <div class="col-md-3 px-0 mx-0">
                <div class="b-example-divider b-example-vr offcanvas offcanvas-collapse" id="sidebar">
                    <div class="flex-shrink-0 p-3 sticky-sidebar">
                        <nuxt-img class="logo-default d-block mx-auto" src="/images/site_logo1.png" alt="logo" format="png"
                            style="width: 130px;" />
                        <ul class="list-unstyled ps-0">
                            <li class="mb-1 d-flex">
                                <nuxt-link to="/" :class="{ 'active-link': activeRoute === '/' }"
                                    class="btn btn-toggle d-inline-flex align-items-center border-0 collapsed">
                                    <img class="mx-3" src="/images/tools_icons/image026.png" width="24" height="24" alt="">
                                    Magic Tools
                                </nuxt-link>
                            </li>
                            <li class="mb-1 d-flex">
                                <nuxt-link to="/history" :class="{ 'active-link': activeRoute === '/history' }"
                                    class="btn btn-toggle d-inline-flex align-items-center border-0 collapsed">
                                    <img class="mx-3" src="/images/tools_icons/image017.png" width="24" height="24" alt="">
                                    Output History
                                </nuxt-link>
                            </li>
                            <li class="mb-1 d-flex">
                                <nuxt-link to="/subscription" :class="{ 'active-link': activeRoute === '/subscription' }"
                                    class="btn btn-toggle d-inline-flex align-items-center border-0 collapsed">
                                    <img class="mx-3" src="/images/tools_icons/image011.png" width="24" height="24" alt="">
                                    Upgrade
                                </nuxt-link>
                            </li>
                            <li class="mb-1 d-flex">
                                <nuxt-link to="/about" :class="{ 'active-link': activeRoute === '/about' }"
                                    class="btn btn-toggle d-inline-flex align-items-center border-0 collapsed">
                                    <img class="mx-3" src="/images/tools_icons/image025.png" width="24" height="24" alt="">
                                    About
                                </nuxt-link>
                            </li>
                            <!-- <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                Upgrade
                            </button>
                        </li> -->
                            <li class="border-top my-3"></li>
                            <li class="mb-1 d-flex">
                                <nuxt-link to="/terms" :class="{ 'active-link': activeRoute === '/terms' }"
                                    class="btn btn-toggle d-inline-flex align-items-center border-0 collapsed"
                                    style="font-size: small;">
                                    <!-- <img class="mx-3" src="/images/tools_icons/image025.png" width="24" height="24" alt=""> -->
                                    Terms &amp; Conditions
                                </nuxt-link>
                            </li>
                            <li class="mb-1">
                                <div class="dropdown">
                                    <button class="btn btn-toggle dropdown-toggle" type="button"
                                        id="accountDropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        Account
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="accountDropdownMenuButton">
                                        <li>
                                            <nuxt-link to="/profile" class="dropdown-item">Profile</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/logout" class="dropdown-item">Logout</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/login" class="dropdown-item">Sign In</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    computed: {
        activeRoute() {
            return this.$route.path;
        },
    },
};
</script>

<style lang="scss" scoped>
/* Add styles for the offcanvas sidebar */
.offcanvas-collapse {
    position: fixed;
    top: 0;
    /* Adjust based on your navbar height */
    bottom: 0;
    right: 100%;
    left: auto;
    width: 280px;
    /* Adjust the width as needed */
    padding-right: 1rem;
    padding-left: 1rem;
    overflow-y: auto;
    visibility: hidden;
    background-color: #f7f5f2;
    /* Adjust the background color */
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;
    transition-property: left, visibility;
}

.offcanvas-collapse.show {
    left: 0;
    visibility: visible;
}

.active-link {
    background-color: #d9dbe4 !important;
    color: #0394fe !important;
    border-radius: 10px !important;
}

.btn-toggle:hover,
.btn-toggle:active {
    background-color: #d9dbe4 !important;
    color: #0394fe !important;
    border-radius: 10px !important;

}


.sticky-sidebar {
    position: fixed;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
    /* Set your desired background color */
}

.container-fluid {
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: auto;
}

.col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
}

.flex-shrink-0 {
    width: 280px;
}

.btn-toggle {
    width: 100%;
    text-align: left;
    padding: 0.5rem 1rem;
    border-radius: 10px !important;
}

@media (max-width: 768px) {
    .side {
        display: none;
    }
}

// .btn-toggle:hover {
//     background-color: #e9ecef;
//     /* Set your desired hover background color */
// }

// .btn-toggle:active {
//     background-color: #d6d8db;
//     /* Set your desired active background color */
// }

// .btn-toggle:focus {
//     outline: none;
//     box-shadow: none;
// }

// .link-body-emphasis {
//     color: #495057;
//     /* Set your desired text color */
// }

// .link-body-emphasis:hover {
//     color: #007bff;
//     /* Set your desired hover text color */
//     text-decoration: none;
// }

// .list-unstyled {
//     padding-left: 0;
//     list-style: none;
// }

// .btn-toggle-nav {
//     padding-left: 20px;
// }

// .border-top {
//     border-top: 1px solid #dee2e6;
//     /* Set your desired border color */
// }

// .my-3 {
//     margin-top: 1rem;
//     margin-bottom: 1rem;
// }</style>
