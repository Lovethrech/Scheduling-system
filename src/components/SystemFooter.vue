<template>
    <footer class="footer-container">
        <div class="foot-nav">
            <div class="term">Terms</div>
            <div class="term">Policy and Procedures</div>
            <div class="term">Contact Us</div>
            <div class="term">Help</div>
        </div>
    </footer>
</template>
<style scoped>
.copyright-link {
    color: hsl(0, 100%, 100%);
    text-decoration: none;
}

.footer-container {
    width: 100%;
    padding: 5vh 0 1vh;
    color: hsl(0, 100%, 100%);
    background-color: #002200;
    bottom: 0;
}

.term {
    font-family: 'Salsa', cursive;
    font-weight: 400;
    font-size: 2vh;
}

.term:hover {
    cursor: pointer;
    color: hsl(180, 92%, 52%);
}

.foot-nav {
    display: flex;
    justify-content: center;
    gap: 2vw;
    margin: 0 auto;
}

.copyright {
    font-size: 1.5vh;
}

@media screen and (max-width:650px) {
    .footer-container {
        position: relative;
    }

    .foot-nav {
        display: block;
        text-align: center;
        margin: 0 auto;
    }

    .term {
        margin: 1vh 0;
    }
}
</style>