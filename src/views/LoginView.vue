<script setup>
import TopIntroHeader from '../components/TopIntroHeader.vue';
import SubLoginPage from '../components/SubLoginPage.vue';
import LandingFooter from '../components/LandingFooter.vue';
</script>

<template>
    <div class="login-view-main-container">
        <TopIntroHeader class="top-header"/>
        <section class="login-view-sub-container">
            <SubLoginPage/>
        </section>
        <LandingFooter class="landing-footer"/>
    </div>
</template>

<style scoped>
.top-header {
    width: 100%;
}

.login-view-main-container {
    margin: 0;
    padding: 0;
}

.login-view-sub-container {
    margin: 0;
    display: flex;
    justify-content: center;
    place-items: center;
}

.landing-footer {
    position:relative;
    width: 100%;
}</style>