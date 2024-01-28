<template>
    <div class="sub-welcome-page-main-container">
        <div class="sub-welcome-page-main-container-first-half-container">
            <div class="sub-welcome-page-main-container-first-half-container-text-container">
                <p class="greeting">Welcome,</p>
                <p class="greeting-title">Global Administrator Rachael</p><br>
                <div class="sub-welcome-page-main-container-first-half-container-text-container-btn-container">
                    <RouterLink to="/admin-function" class="sub-welcome-page-main-container-first-half-container-text-container-btn-link">
                        <button class="sub-welcome-page-main-container-first-half-container-text-container-btn">
                            Administrative Exploration
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="sub-welcome-page-main-container-second-half-container">
            <div class="sub-welcome-page-main-container-second-half-container-icon-container">
                <i class='bx bxs-user'></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
.greeting{
    margin:0;
    font-family: "Pacifico", cursive;
    font-weight: 400;
    font-size:80px;
    font-style: normal;
}
.greeting-title{
    margin: -22px 0 0 14px;
    text-transform: uppercase;
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-size:20px;
    font-weight: 500;
    font-style: normal;
}
.sub-welcome-page-main-container{
    display:flex;
    justify-content: space-between;
    gap:8vw;
    margin: 0 20px;
}
.sub-welcome-page-main-container-second-half-container{
    display:flex;
    place-items: center;
}
.sub-welcome-page-main-container-first-half-container{
    display:flex;
    place-items: center;
}
.sub-welcome-page-main-container-second-half-container-icon-container{
    background: linear-gradient(to bottom, hsl(0, 100%, 100%), hsl(120, 100%, 7%));
    padding:60px;
    border-radius:400px;
    border:2px solid transparent;
    font-size:20vw;
}
.sub-welcome-page-main-container-first-half-container-text-container-btn-container{
    outline: none;
}
.sub-welcome-page-main-container-first-half-container-text-container-btn-link{
    outline:none;
}
.sub-welcome-page-main-container-first-half-container-text-container-btn{
    background-color: transparent;
    color: hsl(120, 100%, 7%);
    padding:20px;
    border-radius: 0;
    border:3px solid hsl(120, 100%, 7%);
    font-family: 'Inter', sans-serif;
    font-weight:900;
    text-transform: uppercase;
    margin: 18px 0 0 14px;
    width:100%;
}
.sub-welcome-page-main-container-first-half-container-text-container-btn:hover{
    cursor:pointer;
    background-color: hsl(120, 100%, 7%);
    color: hsl(0, 100%, 100%);
    transform:scaleY(0.94);
    transition: all .7s;
}

@media screen and (max-width:710px){
    .sub-welcome-page-main-container{
        flex-direction: column-reverse;
    }
    .sub-welcome-page-main-container-first-half-container-text-container{
        text-align: center;
    }
    .sub-welcome-page-main-container-second-half-container-icon-container{
        font-size: 150px;
    }
    .greeting-title{
        margin:-30px 0 0 0;
        font-size:4vw;
    }
    .sub-welcome-page-main-container-first-half-container-text-container-btn{
        margin:0;
    }
    .sub-welcome-page-main-container-second-half-container{
        justify-content: center;
    }
}
@media screen and (max-width:400px){
    .greeting{
        font-size:20vw;
    }
}
@media screen and (max-width:350px) {
    .sub-welcome-page-main-container-second-half-container-icon-container{
        font-size: 100px;
    }
    .greeting-title{
        margin:-20px 0 0 0;
        font-size:16px;
    }
}
</style>