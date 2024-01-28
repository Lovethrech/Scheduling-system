<script setup>
import { ref } from 'vue';
import AdminEmptyFunctionDetailPage from './AdminEmptyFunctionDetailPage.vue';

const menuIconDisplayClass=ref('bx bxs-category');
const menuListPosition = ref("block");

const hideMenu = () => {
    
    if (menuIconDisplayClass.value == "bx bxs-category") {
        menuListPosition.value = "none";
        menuIconDisplayClass.value = "bx bxs-category-alt";
    }
    else {
        menuListPosition.value = "block"
        menuIconDisplayClass.value="bx bxs-category"
    }
}
</script>

<template>
    <div class="admin-function-page-main-container">
        <div class="admin-function-page-semi-main-container"> 
            <div class="admin-function-side-bar-main-container">
                <div class="admin-function-side-bar-nav-menu-icon-container" @click="hideMenu" >
                    <i :class="menuIconDisplayClass"></i>
                </div>
                <div :style="{ display:menuListPosition }" class="side-bar-icon-description-nav-list-container">
                    <ul  class="side-bar-icon-description-nav-list" >
                        <RouterLink to="/admin-function/home" class="side-bar-icon-description-nav-link">
                            <li class="side-bar-icon-description-nav">Home</li>
                        </RouterLink>
                        <RouterLink to="/admin-function/constraint-settings" class="side-bar-icon-description-nav-link">
                            <li class="side-bar-icon-description-nav">Constraint Setting</li>
                        </RouterLink>
                        <RouterLink to="/admin-function/exam-settings" class="side-bar-icon-description-nav-link">
                            <li class="side-bar-icon-description-nav">Examination Setting</li>
                        </RouterLink>
                        <RouterLink to="/admin-function/output-settings" class="side-bar-icon-description-nav-link">
                            <li class="side-bar-icon-description-nav">Output Setting</li>
                        </RouterLink>
                        <RouterLink to="/admin-function/output-designing" class="side-bar-icon-description-nav-link">
                            <li class="side-bar-icon-description-nav">Output Designing</li>
                        </RouterLink>
                        <RouterLink to="/admin-function/optimization-settings" class="side-bar-icon-description-nav-link">
                            <li class="side-bar-icon-description-nav">Optimization Setting</li>
                        </RouterLink>                    
                    </ul>
                </div>
                
            </div>
            <AdminEmptyFunctionDetailPage class="admin-empty-detail" style="width:100%;"/>
        </div>
    </div>
</template>

<style scoped>
.side-bar-icon-description-nav-list-container{
    height:100vh;
}
.side-bar-icon-description-nav-link{
    outline:none;
    text-decoration: none;
}
.side-bar-icon-description-nav:active{
    color:#002400;
    transition: all .7s;
}
.side-bar-icon-description-nav:hover{
    cursor:pointer;
    color:#002400;
}
.side-bar-icon-description-nav-list {
    background-color: hsla(120, 100%, 7%, 0.148);
    list-style: none;
    padding: 1vh 3vw;
    margin:-2vh 0;
    height:100vh;
}

.side-bar-icon-description-nav {
    margin: 5vh 0;
    color:hsl(0, 0%, 100%);
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-size:16px;
    font-weight: 500;
    font-style: normal;
}
.admin-function-side-bar-main-container{
    border-right: 2px solid #002400;
    display:flex;
    justify-content: space-around;
}
.admin-function-side-bar-nav-menu-icon-container{
    background-color: #002400;
    color: #ffffff;
    height:100vh;
    padding:1vh 1vw;
    font-size:28px;
}

.hr-class{
    color:#002400;
    border:2px solid #002400;
}
.admin-function-page-semi-main-container{
    display:flex;
    height:100%;
    justify-content: space-between;
}

@media screen and (max-width:850px){
    .side-bar-icon-description-nav-list{
        background-color: hsl(120, 100%, 7%);
        position:absolute;
        left:40px;
        height:100vh;
    }
    .admin-empty-detail{
        width:100%;
        height:100%;
    }
}
</style>