<template>
    <header id="header" class="border-bottom-0 white" data-sticky-shrink="false">
        <div id="header-wrap">
            <div class="container mt-2 mb-2">
                <div class="header-row">
                    <!-- Logo
						============================================= -->
                    <div id="logo">
                        <NuxtLink to="/">
                            <nuxt-img class="logo-default" src="/images/logo_magic_school.png" alt="Noble CoSpace logo"
                                format="webp" />
                            <!-- <nuxt-img
                                class="logo-sticky"
                                src="/images/logo_magic_school.png"
                                alt="Noble CoSpace logo"
                                format="webp"
                            /> -->
                        </NuxtLink>
                    </div>
                    <!-- #logo end -->

                    <div class="primary-menu-trigger">
                        <button class="cnvs-hamburger" type="button" title="Open Mobile Menu">
                            <span class="cnvs-hamburger-box"><span class="cnvs-hamburger-inner"></span></span>
                        </button>
                    </div>

                    <!-- Primary Navigation
						============================================= -->
                    <nav class="primary-menu">
                        <ul class="menu-container">
                            <!-- <li
                                class="menu-item"
                                :class="{ current: activeRoute === '/' }"
                            >
                                <NuxtLink class="menu-link" to="/"
                                    ><div>Home</div></NuxtLink
                                >
                            </li> -->
                            <li class="menu-item" :class="{
                                current: activeRoute === '/partner',
                            }">
                                <NuxtLink class="menu-link" to="/partner">
                                    <div>Work With Us</div>
                                </NuxtLink>
                            </li>
                            <li class="menu-item dropdown">
                                <a class="menu-link dropdown-toggle" href="#" id="communityDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Community
                                </a>
                                <!-- Add dropdown content here -->
                                <div class="dropdown-menu" aria-labelledby="communityDropdown">
                                    <NuxtLink class="dropdown-item" to="/ai-pioneer">AI Pioneer</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/love-shop">Love</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/another-item">Shop</NuxtLink>
                                </div>
                            </li>
                            <!-- <li class="menu-item dropdown">
                                <a class="menu-link dropdown-toggle" href="#" id="resourcesDropdown" role="button"
                                    data-toggle="dropdown">
                                    Resources
                                </a>
                                <div class="dropdown-menu">
                                    <NuxtLink class="dropdown-item" to="/about-item-1">Magic Tools</NuxtLink>
                            <li class="dropdown-item dropdown">
                                <a class="dropdown-toggle" href="#" id="useCasesDropdown" role="button"
                                    data-toggle="dropdown" data-bs-display="static">
                                    Use Cases
                                </a>
                                <div class="dropdown-menu" aria-labelledby="useCasesDropdown">
                                    <NuxtLink class="dropdown-item" to="/use-case-1">All Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-case-1">Science Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-case-1">Math Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-case-1">English Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-case-1">Elective Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-case-1">School Administrators</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-case-1">Elementary Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-case-1">Higher Education</NuxtLink>                                    
                                    <NuxtLink class="dropdown-item" to="/use-case-1">Technology Coaches</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-case-1">Sports Coaches</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-case-1">Counselors</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-case-1">ESL Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-case-1">Social Studies Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-case-1">Special Education Teachers</NuxtLink>
                                    
                                </div>
                            </li>
                            <NuxtLink class="dropdown-item" to="/blog">Blog</NuxtLink>
                            <NuxtLink class="dropdown-item" to="/blog">PD Resources</NuxtLink>
                            <NuxtLink class="dropdown-item" to="/blog">MagicStudent</NuxtLink>
                                </div>
                            </li> -->
                            <li class="menu-item dropdown">
                                <a class="menu-link dropdown-toggle" href="#" id="resourcesDropdown" role="button"
                                    data-toggle="dropdown">
                                    Resources
                                </a>
                                <div class="dropdown-menu">
                                    <NuxtLink class="dropdown-item" to="/about-item-1">Magic Tools</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/blog">Blog</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/blog">PD Resources</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/blog">MagicStudent</NuxtLink>

                                </div>
                            </li>
                            <li class="menu-item dropdown">
                                <a class="menu-link dropdown-toggle" href="#" id="useCasesDropdown" role="button"
                                    data-toggle="dropdown">
                                    Use Cases
                                </a>
                                <div class="dropdown-menu">
                                    <NuxtLink class="dropdown-item" to="/use-cases/all-teachers">All Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/science-teachers">Science Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/math-teachers">Math Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/english-teachers">English Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/elective-teachers">Elective Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/school-administrators">School Administrators</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/elementary-teachers">Elementary Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/higher-education">Higher Education</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/technology-coaches">Technology Coaches</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/sports-coaches">Sports Coaches</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/counselors">Counselors</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/esl-teachers">ESL Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/social-studies-teachers">Social Studies
                                        Teachers</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/use-cases/special-education-teachers">Special
                                        Education Teachers</NuxtLink>
                                </div>
                            </li>

                            <li class="menu-item dropdown">
                                <a class="menu-link dropdown-toggle" href="#" id="aboutDropdown" role="button"
                                    data-bs-toggle="dropdown">
                                    About
                                </a>
                                <div class="dropdown-menu">
                                    <NuxtLink class="dropdown-item" to="/about-item-1">Mission</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/about-item-2">Privacy</NuxtLink>
                                    <NuxtLink class="dropdown-item" to="/blog">Team</NuxtLink>
                                </div>
                            </li>

                            <div class="header-misc d-flex justify-content-center">
                                <NuxtLink class="top-phone bg-black mx-2" to="/forms/membership">
                                    <span class="d-md-inline-block">
                                        Login
                                    </span>
                                </NuxtLink>
                                <NuxtLink class="top-phone " style="background-color: #4f34fb;" to="/forms/membership">

                                    <span class="d-md-inline-block mx-2">
                                        Sign Up
                                    </span>
                                </NuxtLink>
                            </div>
                            <!-- <div class="header-misc">
                        <NuxtLink class="top-phone" style="background-color: #4f34fb;" to="/forms/membership">                            
                            <span class="d-md-inline-block">
                                Sign Up
                            </span></NuxtLink>                                                       
                    </div> -->
                            <!-- <li
                                class="menu-item"
                                :class="{ current: activeRoute === '/trainings' }"
                            >
                                <NuxtLink class="menu-link" to="/trainings"
                                    ><div>Trainings</div></NuxtLink
                                >
                            </li> -->
                            <!-- <li
                                class="menu-item"
                                :class="{ current: activeRoute === '/blog' }"
                            >
                                <NuxtLink class="menu-link" to="/blog"
                                    ><div>Blog</div></NuxtLink
                                >
                            </li> -->
                        </ul>
                    </nav>
                    <!-- #primary-menu end -->
                </div>
            </div>
        </div>
        <div class="header-wrap-clone"></div>
    </header>
</template>

<script>
export default {
    name: "Header",
    computed: {
        activeRoute() {
            return this.$route.path;
        },
    },
};
</script>
<style lang="scss">
.absol {
    position: absolute;
    top: 10px;
    margin-left: 140px;
    width: 200px;
    height: 100px;
    //   border: 3px solid #73AD21;
}

.dropdown:hover .dropdown-menu {
    display: block;
}


#header.sticky-top {
    position: fixed !important;
    width: 100%;
    top: 0;
    z-index: 1000;
}

#logo img {
    height: 65px !important;
}</style>