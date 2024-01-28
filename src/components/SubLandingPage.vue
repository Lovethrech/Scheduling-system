<script setup>
import LPBtn from './LPBtn.vue';
import landingPageBtnTitles from '../data/landingPageBtnTitles.json';
</script>

<template>
    <div class="sub-landing-page-main-container">
        <div class="sub-landing-page-main-box">
            <p class="sub-landing-page-main-box-state">Sign In</p>
            <div class="sub-landing-page-main-box-user-icon"><i class='bx bxs-user'></i></div>
            <div class="sub-landing-page-main-box-btn-container">
                <LPBtn
                v-for="landingPageBtnTitle in landingPageBtnTitles"
                :key="landingPageBtnTitle.title"
                v-bind="landingPageBtnTitle"
                />
            </div>
            <div class="sub-landing-page-enquiry">
                <RouterLink to="/signup" class="sub-landing-page-enquiry-question-link">
                    <p class="sub-landing-page-enquiry-question">Not Registered?</p>
                </RouterLink>
                <p class="sub-landing-page-enquiry-statement">
                    If you are not registered, then you are not a user. Kindly stay away from this panel
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sub-landing-page-main-container{
    background-color: hsla(40, 65%, 73%, 0.334);
    padding: 2vh 5vw 3vh;
    width: 80vw;
    margin-top: 4vh;
    box-shadow: 2px 2px 6px 1px;
}
.sub-landing-page-main-box-state{
    font-weight:700;
    text-align:center;
    font-family: 'Open Sans', sans-serif;
    font-size:5vh;
}
.sub-landing-page-main-box-user-icon{
    text-align:center;
    font-size:9vh;
    margin-top: -2vh;
}
.sub-landing-page-main-box-btn-container{
    font-weight:900;
    display:block;
    text-align:center;
}
.sub-landing-page-enquiry{
    text-align:center;
}
.sub-landing-page-enquiry-question-link{
    text-decoration: none;
}
.sub-landing-page-enquiry-question{
    font-weight:700;
    color: #421E22;
    font-size:2vh;
}
.sub-landing-page-enquiry-statement{
    color:hsl(0, 4%, 14%);
    font-size:1.5vh;
}


</style>