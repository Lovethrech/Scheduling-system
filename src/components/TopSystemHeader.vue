<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="header-nav-main-container">
        <div class="school-logo-image-container">
            <img src="/public/Bells-logo.gif" alt="" class="school-logo-image">
        </div>
        <div class="logout-container">
            <div class="logout-container-admin-description-container">
                <div class="logout-container-admin-description-container-welcome-container">
                    <i class='bx bxs-user'></i>
                    <p>Rachael</p>
                </div>
            </div>
        </div>
    </div>
    <!-- rgb(70, 102, 102); -->
    <!-- background-color:rgb(10, 23, 99); -->
</template>
<style scoped>
.logout-container-admin-description-container-welcome-container {
    display: flex;
}

.logout-container-admin-description-container-welcome-container i {
    margin: auto 0;
}

.logout-container-admin-description-container {
    color: hsl(0, 0%, 100%);

}

.header-nav-main-container {
    padding:6px 0 ;
    background-color: hsl(120, 100%, 7%);
    display: flex;
    justify-content: space-between;
}

.school-logo-image-container {
    margin: 0 0 0 4vw;
}

.school-logo-image {
    width: 60px;
}

.logout-container-link {
    text-decoration: none;
    outline: none;
}

.logout-container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin: auto 0;
    margin-right: 4vw;
}

.logout-btn {
    font-size: 16px;
    padding: 10px 20px;
    background-color: hsl(0, 0%, 100%);
}</style>