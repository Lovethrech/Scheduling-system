<template>
    <div class="top-intro-header-main-container">
        <p class="top-intro-header-school-name">BELLS UNIVERSITY OF TECHNOLOGY<sub class="top-intro-header-name-subs">...only the best</sub></p>
    </div>
</template>

<style scoped>
.top-intro-header-main-container{
    position:sticky;
    top:0;
    width:100vw;
    background-color: hsl(40, 65%, 73%);
    padding:2vh auto 0; 
    margin-top:-4vh;
    text-align:center;
    border-radius: 0 0 4vw 4vw;
    box-shadow: 0 0 20px 2px;
}
.top-intro-header-school-name{
    font-family: 'Black Ops One', system-ui;
    font-size: 4vh;
    margin-bottom:0;
}
.top-intro-header-name-subs{
    font-family: 'Salsa', cursive;
    font-size:2vh;
}
@media screen and (max-width:1460px){
    .top-intro-header-main-container{
        position:fixed;
        top:0;
        width:100vw;
        margin-top:-2vh;
        padding: 3vh auto 0;
    }
    .top-intro-header-school-name{
        font-size:2vh;
    }
    .top-intro-header-name-subs{
        font-size:1vh;
    }
}

@media screen and (max-width:730px){
    .top-intro-header-main-container{
        position:fixed;
        top:0;
        width:100vw;
        margin-top:-1vh;
        padding: 3vh auto 0;
    }
    .top-intro-header-school-name{
        font-size:2vh;
    }
    .top-intro-header-name-subs{
        font-size:0.5vh;
    }
}
@media screen and (max-width:650px){
    .top-intro-header-main-container{
        position:fixed;
        top:0;
        width:100vw;
        margin-top:-1vh;
        padding: 3vh auto 0;
    }
    .top-intro-header-school-name{
        font-size:1.4vh;
    }
    .top-intro-header-name-subs{
        font-size:0.5vh;
    }
}
</style>