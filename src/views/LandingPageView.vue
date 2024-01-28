<script setup>
import TopIntroHeader from '../components/TopIntroHeader.vue';
import SubLandingPage from '../components/SubLandingPage.vue';
import LandingFooter from '../components/LandingFooter.vue';
</script>

<template>
    <div class="landing-page-view-main-container">
        <TopIntroHeader class="top-header"/>
        <section class="landing-page-sub-container">
            <SubLandingPage/>
        </section>
        <LandingFooter class="landing-footer"/>
    </div>
</template>
<style scoped>
.top-header{
    width:100%;
}
.landing-page-view-main-container{
    margin:0;
    padding:0;
}
.landing-page-sub-container{
    margin:0;
    display:flex;
    justify-content: center;
    align-items:center;
}
.landing-footer{
    width:100%;
}
</style>