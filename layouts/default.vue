<template>
    <div id="wrapper">
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ENZ5MRCN2F"></script>
        <!-- <PreHeader /> -->
        <!-- <Header /> -->
        <!-- <div class="content-wrapper">
        <Sidebar />
        <section id="content">
          <Nuxt />
        </section>
      </div> -->
      <div class="container-fluid" style="min-height: 100vh;">
            <div class="row">
                <div class="col-md-2 px-0">
                    <!-- <Header /> -->
                    <Sidebar />
                </div>
                <div class="col-md-10 p-0" style="background-color: #f7f5f2;">
                    <section id="content p-0">
                        <Nuxt />
                    </section>
                </div>
                <!-- <Footer /> -->
            </div>
        </div>
        <!-- <Footer /> -->

        <!-- JavaScripts
          ============================================= -->
        <script src="/js/functions.js"></script>
    </div>
</template>



<script>
export default {
    name: "default",
    methods: {
        async initTheme() {
            const Semicolon = await new Promise((res) => {
                // wait for SEMICOLON to be defined
                const check = () => {
                    if (typeof SEMICOLON !== "undefined") {
                        res(SEMICOLON);
                    } else {
                        setTimeout(check, 100);
                    }
                };

                check();
            });

            Semicolon.Core.runBase();
            Semicolon.Core.runModules();
        },
    },
    watch: {
        $route() {
            this.$nextTick(() => {
                setTimeout(this.initTheme, 200);
            });
        },
    },
    mounted() {
        this.initTheme();

        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-ENZ5MRCN2F");
    },
};
</script>
