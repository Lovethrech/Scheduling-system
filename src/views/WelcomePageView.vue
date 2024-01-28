<script setup>
import TopSystemHeader from "../components/TopSystemHeader.vue";
import SubWelcomePage from "../components/SubWelcomePage.vue";
import SystemFooter from "../components/SystemFooter.vue";
</script>

<template>
    <div class="login-welcome-page-view-main-container">
        <TopSystemHeader />
        <div class="login-welcome-page-view-semi-container">
            <div class="login-welcome-page-view-semi-container-mini-half">
                <SubWelcomePage/>
            </div>
        </div>
        <SystemFooter />
    </div>
</template>
<style scoped>
.login-welcome-page-view-semi-container {
    background: url("../assets/welcome-bg.jpg") center/auto no-repeat;
    background-size: cover;
    height: 90vh;
}
.login-welcome-page-view-semi-container{
    display:flex;
    place-items: center;
    justify-items: center;
}
.login-welcome-page-view-semi-container-mini-half{
    margin:0 auto;
}
</style>