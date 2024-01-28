<script setup>
import {ref} from 'vue'
const loginBtnSubmitRoute=ref('')
const userNameValue = ref('')
const passwordValue = ref('')
const authCodeValue = ref('')
const userNameErrorMsg = ref('')
const passwordErrorMsg = ref('')
const authCodeErrorMsg = ref('')
const loginErrorMsg=ref("")
const userNamePositionPlacement= ref('50%')
const passwordPositionPlacement = ref('50%')
const authCodePositionPlacement = ref('50%')

const validationRules = {
    userName: {
        required: true,
        message: 'Username cannot be empty',
        positionPlacement: '50%',
        minLength: 6,
        maxLength: 30
    },
    password: {
        required: true,
        message: 'Password cannot be in this format',
        positionPlacement: '50%',
        minLength: 6,
        maxLength: 30
    },
    authCode: {
        required: true,
        message: 'Length of six unique digits',
        positionPlacement: '50%',
        length:6
    }
}

const validateField = (field, value) => {
    if (validationRules[field].required && value === '') {
        return validationRules[field].message
    }
    else {
        return validationRules[field].message = ""
    }
}
const iClick = () => {
    userNamePositionPlacement.value = validationRules.userName.positionPlacement = "-11px";
    passwordPositionPlacement.value = validationRules.password.positionPlacement = "-11px";
    authCodePositionPlacement.value = validationRules.authCode.positionPlacement = "-11px";
}
const loginSubmit = () => {
    userNameErrorMsg.value = validateField('userName', userNameValue.value)
    passwordErrorMsg.value = validateField('password', passwordValue.value)
    authCodeErrorMsg.value = validateField('authCode', authCodeValue.value)

    if ((userNameErrorMsg.value !== "") || (passwordErrorMsg.value !== "") || (authCodeErrorMsg.value !== "")) {
        loginErrorMsg.value = 'Fill in the above details appropriately'
    }
    else {
        loginBtnSubmitRoute.value="/welcome-page"
    }
// Perform login logic here
}
const handleBlur=(event)=>{
    userNameErrorMsg.value = validateField('userName', userNameValue.value)
    passwordErrorMsg.value = validateField('password', passwordValue.value)
    authCodeErrorMsg.value = validateField('authCode', authCodeValue.value)
}

</script>


<template>
    <div class="sub-login-page-main-container">
        <div class="sub-login-page-top-nav">
            <div class="sub-login-page-user-icon"><i class='bx bxs-user'></i></div>
        </div>
        <div class="sub-login-page-input-container">
            <form class="sub-login-page-form" action="">
                <div class="sub-login-page-input-content">
                    <p class="sub-login-page-error-message">{{ userNameErrorMsg }}</p>
                    <input 
                        v-model="userNameValue"
                        type="text"
                        id="username"
                        pattern="^\\w{6,30}$"
                        :min="validationRules.userName.minLength"
                        :max="validationRules.userName.maxLength"
                        class="sub-login-page-input-value"
                        @click="iClick"
                        v-on:blur="handleBlur"
                    />
                    <label 
                        class="sub-login-page-label"
                        for="username"
                        :style="{ top: userNamePositionPlacement }"
                    >
                        Username:
                    </label>
                </div>
                <div class="sub-login-page-input-content"> 
                    <p class="sub-login-page-error-message">{{ passwordErrorMsg }}</p>
                    <input 
                        v-model="passwordValue" pattern="/^\d{6}$/"
                        type="password" id="password"
                        class="sub-login-page-input-value"
                        :min="validationRules.password.minLength"
                        :max="validationRules.password.maxLength"
                        @click="iClick"
                        v-on:blur="handleBlur"
                    />
                    <label
                        class="sub-login-page-label"
                        for="password"
                        :style="{ top: passwordPositionPlacement }"
                    >
                        Password:
                    </label>
                </div>
                <div class="sub-login-page-input-content">
                    <p class="sub-login-page-error-message">{{ authCodeErrorMsg }}</p>
                    <input
                        type="password"
                        id="auth-code"
                        pattern="/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*_)[A-Za-z\d_]{8,}$/"
                        class="sub-login-page-input-value"
                        v-model="authCodeValue"
                        length="6"
                        :min="validationRules.authCode.minLength"
                        :max="validationRules.authCode.maxLength"
                        @click="iClick"
                        v-on:blur="handleBlur"
                    />
                    <label
                        class="sub-login-page-label"
                        for="auth-code"
                        :style="{ top: authCodePositionPlacement }"
                    >
                        Auth. Code:
                    </label>
                </div>

                <div class="sub-login-page-submit-button">
                    <p class="login-btn-error-message">{{ loginErrorMsg }}</p>
                    <RouterLink :to="loginBtnSubmitRoute" class="sub-login-page-submit-route-link">
                        <button
                            type="submit"
                            class="sub-login-page-submit"
                            @click="loginSubmit"
                        >
                            Login
                        </button>
                    </RouterLink>
                </div> 
                <p class="sub-login-page-enquiry-question">
                    <RouterLink to="/signup" class="sub-login-page-login-enquiry-q-link">Not Registered?</RouterLink>
                </p>
            </form>
        </div>
        <div class="sub-login-page-enquiry">
            <p class="sub-login-page-enquiry-statement">If you are not registered, then you are not a user. Kindly stay away from
                this panel
            </p>
        </div>
    </div>
</template>

<style scoped>
.sub-login-page-main-container{
    background-color: hsla(40, 65%, 73%, 0.334);
    padding: 4vh 5vw ;
    margin-top: 5vh;
    box-shadow: 2px 2px 6px 1px;
    width:400px;
}

.sub-login-page-top-nav{
    display:flex;
    justify-content:center;
}
.sub-login-page-user-icon{
    font-size: 9vh;
    margin-top:2.5vh;
}
.sub-login-page-input-container{
    display: block;
    margin-bottom: 6vh;
}
.sub-login-page-enquiry-question{
    text-align:center;
    color: #421E22;
    font-size: 2vh;
}
.sub-login-page-login-enquiry-q-link{
    font-family: 'Inter', sans-serif;
    text-decoration:none;
    color:hsl(0, 4%, 14%);
}
.sub-login-page-enquiry{
    text-align: center;
}
.sub-login-page-enquiry-statement{
    color: hsl(0, 4%, 14%);
    font-size: 1.5vh;
}

.sub-login-page-input-content{
    position:relative;
    padding:1vh 2vw;
    display:flex;
    background-color: hsla(0, 14%, 90%, 0.822);
    margin: 4vh auto;
    font-size: 2vh;
    border-radius: 30px 0 10px 0;
}
.sub-login-page-error-message{
    position:absolute;
    top:-3vh;
    right:2px;
    color:hsl(0, 89%, 26%);
    font-size:1.4vh;
}
.sub-login-page-input-value{
    font-family: 'Open Sans', sans-serif;
    background: transparent;
    margin-right:0;
    width:100%;
    height:100%;
    outline:0;
    border:0;
    font-size:2vh;
    padding:1vh 3vw 1vh 1vw;
}
.sub-login-page-label{
    position:absolute;
    font-size:2vh;
    font-weight:400;
    transform: translateY(-50%);
    transition: all .5s;
    font-family: 'Inter', sans-serif;
}
.login-btn-error-message{
    color:hsl(0, 89%, 26%);
    font-size:1.4vh;
    text-align:right;
}
.sub-login-page-submit-button{
    width:100%;
    outline:0;
}
.sub-login-page-submit-route-link{
    outline:0;
}
.sub-login-page-submit{
    font-family: 'Inter', sans-serif;
    font-weight:700;
    background-color: hsl(0, 56%, 15%);
    color: hsl(0, 100%, 100%);
    font-size:3vh;
    width:100%;
    padding:2vh 2vw;
    border:0;
    border-radius:30px;
}
.sub-login-page-submit:hover{
    background-color: hsla(0, 0%, 0%, 0.89);
    cursor: pointer;
    transform: scaleX(0.98);
    transition: .5s;
}

@media screen and (min-width:1460px){
    .sub-login-page-main-container{
        margin-top: 2vh;
    }
}
@media screen and (max-width:650px){
    .sub-login-page-main-container{
        width:100%;
    }
}
@media screen and (max-width:410px){
    .sub-login-page-land-in{
        padding:0 -1vw;
        margin:0;
    }
}
</style>