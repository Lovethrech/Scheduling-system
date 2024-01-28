<script setup>
import TopIntroHeader from '../components/TopIntroHeader.vue';
import SubSignUpPage from '../components/SubSignUpPage.vue';
import LandingFooter from '../components/LandingFooter.vue';
</script>

<template>
    <div class="login-view-main-container">
        <TopIntroHeader class="top-header" />
        <section class="signup-view-sub-container">
            <SubSignUpPage />
        </section>
        <LandingFooter class="landing-footer" />
    </div>
</template>

<style scoped>
.top-header {
    position:relative;
    width: 100%;
}

.signup-view-main-container {
    margin: 0;
    padding: 0;
}

.signup-view-sub-container {
    margin: 0;
    display: flex;
    justify-content: center;
    place-items: center;
}

.landing-footer {
    position:relative;
    width: 100%;
    margin: 20px 0 0;
}
</style>