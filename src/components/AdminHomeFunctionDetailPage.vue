<template>
    <div class="admin-home-function-detail-page-main-container">
        <div class="admin-home-function-detail-page-form-container">
            <form action="">
                <div class="admin-home-function-detail-page-session">
                    <label for="session" class="admin-home-function-detail-page-session-label">Enter Session:</label>
                    <input type="text" placeholder="2023/2024" class="admin-home-function-detail-page-session-input">
                </div>
                <div class="admin-home-function-detail-page-session">
                    <label for="session" class="admin-home-function-detail-page-session-label">Selected Semester:</label>
                    <input type="radio" name="semester-radioBtn" value="first" class="admin-home-function-detail-radio">First
                    <input type="radio"  name="semester-radioBtn" value="second" class="admin-home-function-detail-radio">Second
                </div>
                <div class="admin-home-function-detail-page-session">
                    <label for="session" class="admin-home-function-detail-page-session-label">Exam Start Date:</label>
                    <input type="string" class="admin-home-function-detail-page-session-input">
                </div>
                <div class="admin-home-function-detail-page-session">
                    <label for="session" class="admin-home-function-detail-page-session-label">Exam End Date:</label>
                    <input type="string" class="admin-home-function-detail-page-session-input">
                </div>
                <div class="admin-home-function-detail-page-session">
                    <label for="session" class="admin-home-function-detail-page-session-label">Select Examination Category:</label>
                    <select type="text" id="" class="admin-home-function-detail-page-session-input" required>
                        <option value="1" class="admin-home-function-detail-page-option">Regular</option>
                    </select>
                </div>
                <div class="admin-home-function-detail-page-session">
                    <label for="session" class="admin-home-function-detail-page-session-label">Selected Campus Type:</label>
                    <input type="radio" name="semester-radioBtn" value="first" class="admin-home-function-detail-radio">Single
                    <input type="radio"  name="semester-radioBtn" value="second" class="admin-home-function-detail-radio">Multi
                </div>
                <div class="admin-home-function-detail-page-session">
                    <label for="session" class="admin-home-function-detail-page-session-label">What Exam Level to schedule:</label>
                    <input type="radio" name="semester-radioBtn" value="first" class="admin-home-function-detail-radio"><label>All</label>
                    <input type="radio"  name="semester-radioBtn" value="second" class="admin-home-function-detail-radio">Selected
                </div>
                <br>
                <div class="admin-home-function-detail-page-session">
                    <label for="session" class="admin-home-function-detail-page-session-label">No of Periods/Day:</label>
                    <input type="number" placeholder="In range 1-5" class="admin-home-function-detail-page-session-input" min="1" max="5">
                </div>
                <div class="admin-home-function-detail-page-session">
                    <label for="session" class="admin-home-function-detail-page-session-label">No of Week:</label>
                    <input type="number" placeholder="In range 1-7" class="admin-home-function-detail-page-session-input" min="1" max="7">
                </div>
                <div class="home-extend-and-button-container">
                    <div class="admin-home-function-detail-page-session-extend">
                        <input type="radio" name="semester-radioBtn" value="first" class="admin-home-function-detail-page-session-input">
                        <label for="session" class="admin-home-function-detail-page-session-label-extend">Extend Duration(if unfitting)</label>
                    </div>
                    <div class="home-submit-btn-container">
                        <RouterLink to="/admin-function" class="home-submit-btn-link">
                            <button type="submit" class="home-submit-btn">Submit</button>
                        </RouterLink>
                    </div>
                </div>
            </form>
            <div class="previous-and-home-nav-container">
                <div class="tab-container">
                    <RouterLink to="/welcome-page" class="tab-link">
                        <p class="tab">Welcome page</p>
                    </RouterLink>
                </div>
                <div class="tab-container">
                    <RouterLink to="/admin-function/constraint-settings" class="tab-link">
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




.home-extend-and-button-container{
    display:flex;
    justify-content: space-between;
    gap:20vw;
    width:100%;
}
.home-submit-btn-container{
    margin:auto 0;
}
.home-submit-btn-link{
    text-decoration:none;
    outline:none;
}
.home-submit-btn{
    background: linear-gradient(to top, hsl(0,100%,100%), #002400);
    color:hsl(0, 100%, 100%);
    border:2px solid transparent;
    outline:none;
    padding:2vh 3vw;
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    letter-spacing:2px;
}
.home-submit-btn:hover{
    cursor:pointer;
    transition: all .7s;
    background: linear-gradient(to bottom, hsl(0,100%,100%), #002400);
    transform:scaleX(1.1);
    
}
.admin-home-function-detail-radio{
    color:hsl(0, 100%, 100%);
}

.admin-home-function-detail-page-main-container {
    display: flex;
    height:100%;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
}
.admin-home-function-detail-page-form-container{
    backdrop-filter: blur(0.3);
    padding:2vh 4vw;
}

.admin-home-function-detail-page-session{
    margin:2vh 0;
    width:100%;
    color:hsl(0, 100%, 100%);
}
.admin-home-function-detail-page-session-extend{
    margin:5vh 0;
    width:100%;
    color:hsl(0, 0%, 0%);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
}
.admin-home-function-detail-page-session-label{
    margin:auto 10px;
    color:hsl(0, 11%, 91%);
}
.admin-home-function-detail-page-session-input{
    background-color: transparent;
    color:hsl(0, 100%, 100%);
    border:0;
    outline:0;
    font-size:16px;
    padding:5px 15px;
    border-bottom:2px solid hsl(0, 56%, 15%);
}
@media screen and (max-width:500px) {
    .admin-home-function-detail-page-main-container{
        font-size:10px;
    }
    .admin-home-function-detail-page-option{
        font-size:10px;
    }
    .admin-home-function-detail-page-session-input{
        font-size:10px;
    }
}
</style>