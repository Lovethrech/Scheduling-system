<template>
    <div class="admin-constraint-function-detail-page-main-container">
        <legend style="color: hsl(0, 100%, 100%); margin:4vh 0;">The Timetable will have...(Tick Below)</legend>
        <fieldset>
            <form action="" class="admin-constraint-function-detail-page-form">
                <div class="admin-constraint-function-detail-page-list-container">
                    <ul class="admin-constraint-function-detail-page-list">
                        <input 
                            type="checkbox" 
                            name="exam-period" 
                            id="" 
                            class="admin-constraint-function-detail-page-list-checkbox"
                        >
                        <label 
                            for="exam-periods" 
                            class="admin-constraint-function-detail-page-list-label"
                        >
                            Period Inclusive Exams
                        </label>
                    </ul>
                    <ul class="admin-constraint-function-detail-page-list">
                        <input 
                            type="checkbox" 
                            name="exam-period" 
                            id="" 
                            class="admin-constraint-function-detail-page-list-checkbox"
                        >
                        <label 
                            for="exam-periods" 
                            class="admin-constraint-function-detail-page-list-label"
                        >
                            Period Exclusive Exams
                        </label>
                    </ul>
                    <ul class="admin-constraint-function-detail-page-list">
                        <input 
                            type="checkbox" 
                            name="exam-period" 
                            id="" 
                            class="admin-constraint-function-detail-page-list-checkbox"
                        >
                        <label 
                            for="exam-periods" 
                            class="admin-constraint-function-detail-page-list-label"
                        >
                            Period Exclusive Venues
                        </label>
                    </ul>
                    <ul class="admin-constraint-function-detail-page-list">
                        <input 
                            type="checkbox" 
                            name="exam-period" 
                            id="" 
                            class="admin-constraint-function-detail-page-list-checkbox"
                        >
                        <label 
                            for="exam-periods" 
                            class="admin-constraint-function-detail-page-list-label"
                        >
                            Venues Inclusive Exams
                        </label>
                    </ul>
                    <ul class="admin-constraint-function-detail-page-list">
                        <input 
                            type="checkbox" 
                            name="exam-period" 
                            id="" 
                            class="admin-constraint-function-detail-page-list-checkbox"
                        >
                        <label 
                            for="exam-periods" 
                            class="admin-constraint-function-detail-page-list-label"
                        >
                            Exams with After Exams
                        </label>
                    </ul>
                    <ul class="admin-constraint-function-detail-page-list">
                        <input 
                            type="checkbox" 
                            name="exam-period" 
                            id="" 
                            class="admin-constraint-function-detail-page-list-checkbox"
                        >
                        <label 
                            for="exam-periods" 
                            class="admin-constraint-function-detail-page-list-label"
                        >
                            Exams with Coincidence
                        </label>
                    </ul>
                    <ul class="admin-constraint-function-detail-page-list">
                        <input 
                            type="checkbox" 
                            name="exam-period" 
                            id="" 
                            class="admin-constraint-function-detail-page-list-checkbox"
                        >
                        <label 
                            for="exam-periods" 
                            class="admin-constraint-function-detail-page-list-label"
                        >
                            Exam Exclusive Exams
                        </label>
                    </ul>
                    <ul class="admin-constraint-function-detail-page-list">
                        <input 
                            type="checkbox" 
                            name="exam-period" 
                            id="" 
                            class="admin-constraint-function-detail-page-list-checkbox"
                        >
                        <label 
                            for="exam-periods" 
                            class="admin-constraint-function-detail-page-list-label"
                        >
                            Front Loaded Exams
                        </label>
                    </ul>
                </div>
            </form>
        </fieldset>
        <div class="previous-and-home-nav-container">
            <div class="tab-container">
                <RouterLink to="/admin-function/home" class="tab-link">
                    <p class="tab">Previous</p>
                </RouterLink>
            </div>
            <div class="tab-container">
                <RouterLink to="/admin-function/exam-settings" class="tab-link">
                    <p class="tab">Next</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.admin-constraint-function-detail-page-main-container{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
}
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
.admin-constraint-function-detail-page-list-container{
    color:hsl(0, 100%, 100%);
}
.admin-constraint-function-detail-page-list{
    margin:5vh 0;
}
</style>