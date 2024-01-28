<template>
    <div class="admin-function-output-setting-detail-page-main-container">
        <div class="admin-function-output-setting-detail-page-main-container-semi-container">
            <form action="">
                <div class="admin-output-setting-function-detail-page-session">
                    <label
                        for="session" 
                        class="admin-output-setting-function-detail-page-session-label"
                    >
                        No. of Students/Invigilator:
                    </label>
                    <input type="text" class="admin-output-setting-function-detail-page-session-input">
                </div>
                <div class="admin-output-setting-function-detail-page-session">
                    <label
                        for="session" 
                        class="admin-output-setting-function-detail-page-session-label"
                    >
                        No. of Invigilator in Special Venues:
                    </label>
                    <input type="text" class="admin-output-setting-function-detail-page-session-input">
                </div>
                <div class="admin-output-setting-function-detail-page-session">
                    <label
                        for="session" 
                        class="admin-output-setting-function-detail-page-session-label"
                    >
                        Venue Selection Policy:
                    </label>
                    <input type="text" class="admin-output-setting-function-detail-page-session-input">
                </div>
                <div class="admin-output-setting-function-detail-page-session">
                    <label
                        for="session" 
                        class="admin-output-setting-function-detail-page-session-label"
                    >
                        Venue Selection Order:
                    </label>
                    <input type="text" class="admin-output-setting-function-detail-page-session-input">
                </div>
                <div class="output-setting-selection-radio-flex">
                    <div class="admin-output-setting-function-detail-page-session">
                        <input type="radio" class="admin-output-setting-function-detail-page-session-input">
                        <label
                            for="output-radio" 
                            class="admin-output-setting-function-detail-page-session-label"
                        >
                            Mix Exams in Venue
                        </label>
                    </div>
                    <div class="admin-output-setting-function-detail-page-session">
                        <input type="radio" class="admin-output-setting-function-detail-page-session-input">
                        <label
                            for="output-radio" 
                            class="admin-output-setting-function-detail-page-session-label"
                        >
                            Use more Space for large Exams
                        </label>
                    </div>
                </div>
                <div class="output-setting-selection-radio-flex">
                    <div class="admin-output-setting-function-detail-page-session">
                        <input type="radio" class="admin-output-setting-function-detail-page-session-input">
                        <label
                            for="output-radio" 
                            class="admin-output-setting-function-detail-page-session-label"
                        >
                            Large Exams Fully in Venue
                        </label>
                    </div>
                    <div class="admin-output-setting-function-detail-page-session">
                        <input type="radio" class="admin-output-setting-function-detail-page-session-input">
                        <label
                            for="output-radio" 
                            class="admin-output-setting-function-detail-page-session-label"
                        >
                            Use Half Venue Space
                        </label>
                    </div>
                </div>
                <div class="output-setting-selection-radio-flex">
                    <div class="admin-output-setting-function-detail-page-session">
                        <input type="radio" class="admin-output-setting-function-detail-page-session-input">
                        <label
                            for="output-radio" 
                            class="admin-output-setting-function-detail-page-session-label"
                        >
                            Select Staff randomly
                        </label>
                    </div>
                    <div class="admin-output-setting-function-detail-page-session">
                        <input type="radio" class="admin-output-setting-function-detail-page-session-input">
                        <label
                            for="output-radio" 
                            class="admin-output-setting-function-detail-page-session-label"
                        >
                            Use Staff IDs in Timetable
                        </label>
                    </div>
                </div>
                <div class="output-setting-selection-radio-flex">
                    <div class="admin-output-setting-function-detail-page-session">
                        <input type="radio" class="admin-output-setting-function-detail-page-session-input">
                        <label
                            for="output-radio" 
                            class="admin-output-setting-function-detail-page-session-label"
                        >
                            Update Staff Duty count
                        </label>
                    </div>
                    <div class="admin-output-setting-function-detail-page-session">
                        <input type="radio" class="admin-output-setting-function-detail-page-session-input">
                        <label
                            for="output-radio" 
                            class="admin-output-setting-function-detail-page-session-label"
                        >
                            Skip week in timetable
                        </label>
                    </div>
                </div>
                <div class="output-setting-selection-radio-flex">
                    <div class="admin-output-setting-function-detail-page-session">
                        <input type="radio" class="admin-output-setting-function-detail-page-session-input">
                        <label
                            for="output-radio" 
                            class="admin-output-setting-function-detail-page-session-label"
                        >
                            Generate sitting arrangements
                        </label>
                    </div>
                    <div class="admin-output-setting-function-detail-page-session">
                        <input type="radio" class="admin-output-setting-function-detail-page-session-input">
                        <label
                            for="output-radio" 
                            class="admin-output-setting-function-detail-page-session-label"
                        >
                            Save Timetable to file
                        </label>
                    </div>
                </div>
                <div class="output-setting-selection-radio-flex">
                    <div class="admin-output-setting-function-detail-page-session">
                        <input type="radio" class="admin-output-setting-function-detail-page-session-input">
                        <label
                            for="output-radio" 
                            class="admin-output-setting-function-detail-page-session-label"
                        >
                            Save Timetable to Database
                        </label>
                    </div>
                </div>
            </form>
            <div class="previous-and-home-nav-container">
                <div class="tab-container">
                    <RouterLink to="/admin-function/exam-settings" class="tab-link">
                        <p class="tab">Previous</p>
                    </RouterLink>
                </div>
                <div class="tab-container">
                    <RouterLink to="/admin-function/output-designing" class="tab-link">
                        <p class="tab">Next</p>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.previous-and-home-nav-container{
    display:flex;
    justify-content: space-between;
}
.tab-container{
    outline:none;
}
.tab-link{
    text-decoration: none;
    outline:none;
}
.tab{
    color: #002400;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-transform: capitalize;
}
.tab:hover{
    cursor:pointer;
    transform:scale(0.95);
    transition: all .7s;
}
.admin-function-output-setting-detail-page-main-container{
    margin: 0 2vw;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
}
.output-setting-selection-radio-flex{
    display:flex;
}
.admin-output-setting-function-detail-page-session{
    margin:2vh 0;
    width:100%;
    color:hsl(0, 100%, 100%);
}
.admin-output-setting-function-detail-page-session-label{
    margin:auto 10px;
    color:hsl(0, 11%, 91%);
}
.admin-output-setting-function-detail-page-session-input{
    background-color: transparent;
    color:hsl(0, 100%, 100%);
    border:0;
    outline:0;
    font-size:16px;
    padding:5px 15px;
    border-bottom:2px solid hsl(0, 56%, 15%);
}
@media screen and (max-width:500px) {
    .admin-output-setting-function-detail-page-session{
        font-size:0.8rem;
    }
    .admin-output-setting-function-detail-page-session-input{
        font-size:0.8rem;
    }
}
</style>