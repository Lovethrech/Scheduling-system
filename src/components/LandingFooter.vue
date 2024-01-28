<template>
    <footer class="landing-footer-main-container">
        <div class="landing-footer-foot-nav">
            <div class="landing-footer-term">Terms</div>
            <div class="landing-footer-term">Policy and Procedures</div>
            <div class="landing-footer-term">Contact Us</div>
            <div class="landing-footer-term">Help</div>
        </div>
        <div>
            <a href="https://github.com/Lovethrech" class="landing-footer-copyright-link" target="_blank">
                <p class="landing-footer-copyright" style="text-align:center;">&copy;<em>2023 lovethrech</em></p>
            </a>
        </div>
    </footer>
</template>

<style scoped>
.landing-footer-main-container{
    margin: 40px 0 0 0;
    padding:5vh 0 1vh;
    color:hsl(0, 100%, 100%);
    background-color: hsl(0, 56%, 15%);
    position:fixed;
    bottom:0;
    left:0;
    
}
.landing-footer-foot-nav{
    display:flex;
    justify-content:center;
    gap:2vw;
    margin:0 auto;
}
.landing-footer-term{
    font-family: 'Salsa', cursive;
    font-weight:400;
    font-size:2vh;
}
.landing-footer-term:hover{
    cursor:pointer;
    color: hsl(180, 92%, 52%);
}
.landing-footer-copyright{
    font-size:1.5vh;
    color:hsl(0, 100%, 100%);
    text-decoration: none;
}

@media screen and (max-width:650px){
    .landing-footer-main-container{
        position:relative;
    }
    .landing-footer-foot-nav{
        display:block;
        text-align:center;
        margin:0 auto;
    }
    .landing-footer-term{
        margin:1vh 0;
    }
}
</style>