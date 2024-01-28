<script setup>
import TopSystemHeader from '../components/TopSystemHeader.vue';
import AdminConstraintFunctionPage from '../components/AdminConstraintFunctionPage.vue';
import SystemFooter from '../components/SystemFooter.vue';
</script>

<template>
    <div class="admin-function-main-container">
        <TopSystemHeader />
        <section class="sub-welcome-page">
            <div class="sub-welcome-page-first-mini-section">
                <div class="sub-welcome-page-bg"></div>
                <AdminConstraintFunctionPage class="admin-func-page" />
            </div>
        </section>
        <SystemFooter />
    </div>
</template>

<style scoped>
.admin-func-page {
    height: 100%;
}

.sub-welcome-page-first-mini-section {
    height: 100vh;
    background-color: hsla(0, 0%, 0%, 0.121);
}

.sub-welcome-page {
    height: 100vh;
}

.sub-welcome-page-bg {
    background-image: url("../assets/welcome-bg.jpg");
    filter: blur(10px);
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}
</style>