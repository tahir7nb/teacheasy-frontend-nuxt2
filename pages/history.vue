<template>
    <div class="container p-4">
        <div class="row m-0">
            <div class="col-md-12 p-3 mb-4"
                style="background-color: rgb(255, 255, 255); color: rgb(54, 65, 82); box-shadow: none; border-radius: 8px; overflow: hidden; border: none rgba(224, 224, 224, 0.596);">
                <!-- Search bar field with search icon -->
                <div class="row m-0">
                    <h4 class="display-7 mb-0 mt-3 fw-semibold" style="color: #364152;">History Filters:</h4>
                    <div class="col-md-4 p-2">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search" aria-describedby="searchIcon">
                            <span class="input-group-text" id="searchIcon">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>

                    <!-- Dropdown field -->
                    <div class="col-md-4 p-2">
                        <select class="form-select">
                            <option value="grade1">All</option>
                            <option value="grade2">Multiple Choice Assesments</option>
                            <option value="grade3">Report Card Comments</option>
                            <option value="grade3">Lesson Plan</option>
                        </select>
                    </div>

                    <!-- Start Date and End Date fields with calendar icons and default dates -->
                    <div class="col-md-4 p-2">
                        <div class="row m-0">
                            <div class="col-md-6 mb-2">
                                <div class="input-group">
                                    <input type="text" class="form-control datepicker" placeholder="Start Date"
                                        aria-describedby="startDateIcon">
                                    <span class="input-group-text" id="startDateIcon">
                                        <i class="fas fa-calendar"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group">
                                    <input type="text" class="form-control datepicker" placeholder="End Date"
                                        aria-describedby="endDateIcon">
                                    <span class="input-group-text" id="endDateIcon">
                                        <i class="fas fa-calendar"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-12 p-3 mb-4"
                style="background-color: rgb(255, 255, 255); color: rgb(54, 65, 82); box-shadow: none; border-radius: 8px; overflow: hidden; border: none rgba(224, 224, 224, 0.596);">
                <table class="table table-bordered-none">
                <thead>
                    <tr class="fw-semibold">
                        <th>Title</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Table data (replace with your actual data) -->
                    <tr>
                        <td>Sample Title 1</td>
                        <td>2024-01-29</td>
                        <td>
                            <!-- Preview button (replace with your actual functionality) -->
                            <button class="btn" style="background-color:#0394fe; color: white;">Preview</button>
                            <!-- Delete icon (replace with your actual functionality) -->
                            <i class="fas fa-trash-alt ml-2 text-secondary px-3"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>Sample Title 2</td>
                        <td>2024-01-30</td>
                        <td>
                            <!-- Preview button (replace with your actual functionality) -->
                            <button class="btn" style="background-color:#0394fe; color: white;">Preview</button>

                            <!-- Delete icon (replace with your actual functionality) -->
                            <i class="fas fa-trash-alt ml-2 text-secondary px-3"></i>
                        </td>
                    </tr>
                    <!-- Add more rows as needed -->
                </tbody>
            </table>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Output History",
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

<style lang="scss" scoped>
/* Add any custom styles here */
</style>
