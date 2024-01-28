<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'LPBtn',
    props: {
        id: {
            type: String,
            default:''
        },
        title: {
            type: String,
            default:''
        }
    }
})
</script>

<template>
    <div class="l-p-btn main-container">
        <RouterLink to="/login" class="sub-landing-page-main-box-main-btn-link"><div class="sub-landing-page-main-box-main-btn">
            <button type="button" class="sub-landing-page-main-box-bodies-btn">{{ title }}</button></div>
        </RouterLink>
    </div>
</template>
<style scoped>
.sub-landing-page-main-box-main-btn-link{
    outline:0;
    text-decoration: none;
}
.sub-landing-page-main-box-main-btn{
    outline:0;
}
.sub-landing-page-main-box-bodies-btn{
    outline:0;
    font-family: 'Inter', sans-serif;
    font-weight:700;
    background-color: hsla(0, 14%, 90%, 0.63);
    padding:2vh 2vw;
    margin:1vh 0;
    width:40vw;
    font-size: 1.6vh;
    border-radius:30px 0 10px 0;
}
.sub-landing-page-main-box-bodies-btn:hover{
    background-color:hsl(0, 0%, 0%);
    color: hsl(0, 0%, 100%);
    cursor: pointer;
    transform:scaleX(1.03);
    transition: all .42s;
}
@media screen and (max-width:650px){
    .sub-landing-page-main-box-bodies-btn{
        width:60vw;
    }
}

@media screen and (max-width:350px){
    .sub-landing-page-main-box-bodies-btn{
        width:70vw;
    }
}
</style>