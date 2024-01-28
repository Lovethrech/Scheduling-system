<template>
    <div class="admin-function-exam-detail-page-main-container">
        <div class="admin-function-exam-detail-page-main-container-semi-container">
            <form action="">
                <div class="admin-exam-function-detail-page-session">
                    <label for="session" class="admin-exam-function-detail-page-session-label">Enter Scheduling Policy:</label>
                    <input type="text" class="admin-exam-function-detail-page-session-input">
                </div>
                <div class="admin-exam-function-detail-page-session">
                    <label for="session" class="admin-exam-function-detail-page-session-label">Max Exam Level:</label>
                    <input type="text" class="admin-exam-function-detail-page-session-input">
                </div>
                <div class="admin-exam-function-detail-page-session">
                    <label for="session" class="admin-exam-function-detail-page-session-label">Exam Level Low Limit:</label>
                    <input type="text" class="admin-exam-function-detail-page-session-input">
                </div>
                <div class="admin-exam-function-detail-page-session">
                    <label for="session" class="admin-exam-function-detail-page-session-label">Exam Level High Limit:</label>
                    <input type="text" class="admin-exam-function-detail-page-session-input">
                </div>
            </form>
            <div class="previous-and-home-nav-container">
                <div class="tab-container">
                    <RouterLink to="/admin-function/constraint-settings" class="tab-link">
                        <p class="tab">Previous</p>
                    </RouterLink>
                </div>
                <div class="tab-container">
                    <RouterLink to="/admin-function/output-settings" class="tab-link">
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
.admin-function-empty-detail-page-main-container {
    display: flex;
    place-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.admin-function-empty-detail-page-main-container-semi-container p {
    color: hsl(0, 100%, 100%);
}

.admin-exam-function-detail-page-session{
    margin:5vh 0;
    width:100%;
    color:hsl(0, 100%, 100%);
}
.admin-exam-function-detail-page-session-label{
    margin:auto 10px;
    color:hsl(0, 11%, 91%);
}
.admin-exam-function-detail-page-session-input{
    background-color: transparent;
    color:hsl(0, 100%, 100%);
    border:0;
    outline:0;
    font-size:16px;
    padding:5px 15px;
    border-bottom:2px solid hsl(0, 56%, 15%);
}
</style>