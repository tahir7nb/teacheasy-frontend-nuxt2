<template>
    <div class="container p-4">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-12 mb-4 pt-2 pb-1"
                style="background-color: rgb(255, 255, 255); color: rgb(54, 65, 82); box-shadow: none; border-radius: 8px; overflow: hidden; border: none rgba(224, 224, 224, 0.596);">
                <div class="p-3">
                    <h3 class="p-2 mb-0 pb-0">User Profile</h3>
                    <hr>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card top-phone bg-white text-black px-1" style="border-radius: 15px;">
                                <h4 class="pb-0 px-2 pt-2 mb-0">Profile Picture</h4>
                                <hr>
                                <div class="text-center">
                                    <div class="d-flex justify-content-center align-items-center flex-column">
                                        <div class="rounded-circle mb-2"
                                            style="width: 150px; height: 150px; overflow: hidden; border: 2px solid #ced4da; position: relative;">
                                            <img :src="imageUrl || '/images/profile.webp'" alt="Profile Picture"
                                                style="width: 100%; height: 100%; object-fit: cover;">
                                        </div>
                                        <p class="pb-0 m-2" style="font-size: small;">Upload/Change Your Profile Image</p>
                                        <input type="file" ref="fileInput" style="display: none;"
                                            @change="handleImageUpload">
                                        <button @click="openFileInput" class="btn btn-primary text-white">Upload
                                            Image</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card top-phone bg-white text-black px-1" style="border-radius: 15px;">
                                <h4 class="pb-0 px-2 pt-2 mb-0">Account Details</h4>
                                <hr>
                                <h4 class="pb-0 px-2 pt-2 mb-0">Basic information</h4>
                                <div class="col-md-12 px-2">
                                    <h4 class="display-7 mb-0 mt-3">Name:</h4>
                                    <div class="form-group">
                                        <input type="text" class="form-control">
                                    </div>
                                    <h4 class="display-7 mb-0 mt-3">Email:</h4>
                                    <div class="form-group">
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
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
    data() {
        return {
            imageUrl: null
        };
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = () => {
                this.imageUrl = reader.result;
            };
            reader.readAsDataURL(file);
        },
        openFileInput() {
            this.$refs.fileInput.click();
        }
    }
};
</script>
  
<style scoped>/* Add your custom CSS styling here */</style>
  