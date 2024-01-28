<script setup>
import { ref } from 'vue';
const loginBtnSubmitRoute = ref('');
const fullNameValue = ref("");
const userNameValue = ref('');
const emailValue = ref("");
const rankValue = ref("");
const passwordValue = ref('');
const rePasswordValue = ref("");
const fullNameErrorMsg = ref("");
const userNameErrorMsg = ref("");
const rankErrorMsg = ref("");
const emailErrorMsg = ref("");
const passwordErrorMsg = ref("");
const rePasswordErrorMsg = ref("");
const signUpErrorMsg = ref("");
const fullNamePositionPlacement = ref("50%");
const userNamePositionPlacement = ref("50%");
const rankPositionPlacement = ref("50%");
const emailPositionPlacement = ref("50%");
const passwordPositionPlacement = ref("50%");
const rePasswordPositionPlacement = ref("50%");



const validationRules = {
    fullName: {
        required: true,
        message: 'FullName cannot be empty',
        positionPlacement: '50%',
        minLength: 30,
        maxLength: 60
    },
    userName: {
        required: true,
        message: 'Username cannot be empty',
        positionPlacement: '50%',
        minLength: 6,
        maxLength: 30
    },
    email: {
        required: true,
        message: 'Email cannot be empty',
        positionPlacement: '50%',
        minLength: 20,
        maxLength: 60
    },
    rank: {
        required: true,
        message: 'Select your rank',
        positionPlacement: '50%'
    },
    password: {
        required: true,
        message: 'Password cannot be in this format',
        positionPlacement: '50%',
        minLength: 6,
        maxLength: 30
    },
    rePassword: {
        required: true,
        message: 'Password not same as previous',
        positionPlacement: '50%',
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
    fullNamePositionPlacement.value = validationRules.fullName.positionPlacement = "-11px";
    userNamePositionPlacement.value = validationRules.userName.positionPlacement = "-11px";
    emailPositionPlacement.value = validationRules.email.positionPlacement = "-11px";
    rankPositionPlacement.value = validationRules.rank.positionPlacement = "-11px";
    passwordPositionPlacement.value = validationRules.password.positionPlacement = "-11px";
    rePasswordPositionPlacement.value = validationRules.rePassword.positionPlacement = "-11px";
}
const loginSubmit = () => {
    fullNameErrorMsg.value = validateField('fullName', fullNameValue.value)
    userNameErrorMsg.value = validateField('userName', userNameValue.value)
    emailErrorMsg.value = validateField('email', emailValue.value)
    rankErrorMsg.value = validateField('rank', rankValue.value)
    passwordErrorMsg.value = validateField('password', passwordValue.value)
    rePasswordErrorMsg.value = validateField('rePassword', rePasswordValue.value)

    if ((fullNameErrorMsg.value !== "") || (userNameErrorMsg.value !== "") || (emailErrorMsg.value !== "") || (rankErrorMsg.value !== "") || (passwordErrorMsg.value !== "") || (rePasswordErrorMsg.value !== "")) {
        signUpErrorMsg.value = 'Fill in the above details appropriately'
    }
    else {
        signUpBtnSubmitRoute.value = "/welcome_page"
    }
}
const handleBlur = (event) => {
    fullNameErrorMsg.value = validateField('fullName', fullNameValue.value)
    userNameErrorMsg.value = validateField('userName', userNameValue.value)
    emailErrorMsg.value = validateField('email', emailValue.value)
    rankErrorMsg.value = validateField('rank', rankValue.value)
    passwordErrorMsg.value = validateField('password', passwordValue.value)
    rePasswordErrorMsg.value = validateField('rePassword', rePasswordValue.value)
}

</script>


<template>
    <div class="sub-signup-page-main-container">
        <div class="sub-signup-page-top-nav">
            <div class="sub-signup-page-user-icon"><i class='bx bxs-user'></i></div>
        </div>
        <div class="sub-signup-page-input-container">
            <form class="sub-signup-page-form" action="">
                <div class="sub-signup-page-input-content">
                    <p class="sub-signup-page-error-message">{{fullNameErrorMsg}}</p>
                    <input
                        v-model="fullNameValue"
                        type="text"
                        name="fullName"
                        pattern="^\\w{10,60}$"
                        :min="validationRules.fullName.minLength"
                        :max="validationRules.fullName.maxLength"
                        class="sub-signup-page-input-value"
                        @click="iClick"
                        v-on:blur="handleBlur"
                    >
                    <label 
                        class="sub-signup-page-label" 
                        for="full-name" 
                        :style="{ top: fullNamePositionPlacement }"
                    >
                        FullName:
                    </label>
                </div>

                <div class="sub-signup-page-input-content">
                    <p class="sub-signup-page-error-message">{{ userNameErrorMsg }}</p>
                    <input 
                        v-model="userNameValue"
                        type="text"
                        name="username"
                        pattern="^\\w{6,30}$"
                        :min="validationRules.userName.minLength"
                        :max="validationRules.userName.maxLength"
                        class="sub-signup-page-input-value"
                        @click="iClick"
                        v-on:blur="handleBlur" 
                    />
                    <label 
                        class="sub-signup-page-label" 
                        for="username" 
                        :style="{ top: userNamePositionPlacement }"
                    >
                        Username:
                    </label>
                </div>
                <div class="sub-signup-page-input-content">
                    <p class="sub-signup-page-error-message">{{emailErrorMsg}}</p>
                    <input
                        v-model="emailValue"
                        type="email"
                        name="fullName"
                        :min="validationRules.email.minLength"
                        :max="validationRules.email.maxLength"
                        class="sub-signup-page-input-value"
                        @click="iClick"
                        v-on:blur="handleBlur"
                    >
                    <label 
                        class="sub-signup-page-label" 
                        for="email" 
                        :style="{ top: emailPositionPlacement }"
                    >
                        Email:
                    </label>
                </div>

                <div class="sub-signup-page-input-content">
                    <p class="sub-signup-page-error-message">{{rankErrorMsg}}</p>
                    <select
                        v-model="rankValue"
                        name="rank"
                        class="sub-signup-page-input-value"
                        @click="iClick"
                        v-on:blur="handleBlur"
                    >
                        <option value="1" class="option">Global Administrator</option>
                        <option value="2" class="option">University Administrator</option>
                        <option value="3" class="option">College Administrator</option>
                        <option value="4" class="option">Department Administrator</option>
                    </select>
                    <label 
                        class="sub-signup-page-label" 
                        for="full-name" 
                        :style="{ top: fullNamePositionPlacement }"
                    >
                        Rank:
                    </label>
                </div>
                <div class="sub-signup-page-input-content">
                    <p class="sub-signup-page-error-message">{{ passwordErrorMsg }}</p>
                    <input 
                        v-model="passwordValue" 
                        pattern="/^\d{6}$/" 
                        type="password" 
                        name="password"
                        class="sub-signup-page-input-value" 
                        :min="validationRules.password.minLength"
                        :max="validationRules.password.maxLength" 
                        @click="iClick" 
                        v-on:blur="handleBlur" />
                    <label 
                        class="sub-signup-page-label" 
                        for="password" 
                        :style="{ top: passwordPositionPlacement }"
                    >
                        Password:
                    </label>
                </div>
                <div class="sub-signup-page-input-content">
                    <p class="sub-signup-page-error-message">{{ rePasswordErrorMsg }}</p>
                    <input 
                        type="password" 
                        name="re-password" 
                        pattern="/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*_)[A-Za-z\d_]{8,}$/"
                        class="sub-signup-page-input-value" 
                        v-model="rePasswordValue" 
                        :min="validationRules.rePassword.minLength" 
                        :max="validationRules.rePassword.maxLength" 
                        @click="iClick"
                        v-on:blur="handleBlur" />
                    <label 
                        class="sub-signup-page-label" 
                        for="auth-code" 
                        :style="{ top: rePasswordPositionPlacement }"
                    >
                        Confirm Password:
                    </label>
                </div>
                <div class="terms-check">
                    <input type="checkbox" name="terms" id="terms" required>
                    <label for="terms">I agree to accept all terms and conditions.</label>
                </div>


                <div class="sub-signup-page-submit-button">
                    <p class="signup-btn-error-message">{{ signUpErrorMsg }}</p>
                    <RouterLink :to="loginBtnSubmitRoute" class="signup-btn-submit-route-link">
                        <button type="submit" class="signup-btn-page-submit" @click="loginSubmit">
                            Create Account
                        </button>
                    </RouterLink>
                </div>
                <p class="sub-signup-page-enquiry-question">
                    <RouterLink to="/login" class="sub-signup-page-login-enquiry-q-link">I have an account</RouterLink>
                </p>
            </form>
        </div>
        <div class="sub-signup-page-enquiry">
            <p class="sub-signup-page-enquiry-statement">
                If you are not registered, then you are not a user. Kindly stay away from this panel
            </p>
        </div>
    </div>
</template>

<style scoped>
.sub-signup-page-main-container {
    background-color: hsla(40, 65%, 73%, 0.334);
    padding: 4vh 5vw;
    margin-top: 5vh;
    box-shadow: 2px 2px 6px 1px;
    width: 400px;
}

.sub-signup-page-top-nav {
    display: flex;
    justify-content: center;
}

.sub-signup-page-user-icon {
    font-size: 9vh;
    margin-top: 2.5vh;
}

.sub-signup-page-input-container {
    display: block;
    margin-bottom: 6vh;
}

.sub-signup-page-enquiry-question {
    text-align: center;
    color: #421E22;
    font-size: 2vh;
}

.sub-signup-page-login-enquiry-q-link {
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    color: hsl(0, 4%, 14%);
}

.sub-signup-page-enquiry {
    text-align: center;
}

.sub-signup-page-enquiry-statement {
    color: hsl(0, 4%, 14%);
    font-size: 1.5vh;
}

.sub-signup-page-input-content {
    position: relative;
    padding: 1vh 2vw;
    display: flex;
    background-color: hsla(0, 14%, 90%, 0.822);
    margin: 4vh auto;
    font-size: 2vh;
    border-radius: 30px 0 10px 0;
}

.sub-signup-page-error-message {
    position: absolute;
    top: -3vh;
    right: 2px;
    color: hsl(0, 89%, 26%);
    font-size: 1.4vh;
}

.sub-signup-page-input-value {
    font-family: 'Open Sans', sans-serif;
    background: transparent;
    margin-right: 0;
    width: 100%;
    height: 100%;
    outline: 0;
    border: 0;
    font-size: 2vh;
    padding: 1vh 3vw 1vh 1vw;
}

.sub-signup-page-label {
    position: absolute;
    font-size: 2vh;
    font-weight: 400;
    transform: translateY(-50%);
    transition: all .5s;
    font-family: 'Inter', sans-serif;
}
.option{
    background-color: hsla(0, 0%, 41%, 0.407);
}

.signup-btn-error-message {
    color: hsl(0, 89%, 26%);
    font-size: 1.4vh;
    text-align: right;
}

.sub-signup-page-submit-button {
    width: 100%;
    outline: 0;
}

.signup-btn-submit-route-link {
    outline: 0;
}

.signup-btn-page-submit {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    background-color: hsl(0, 56%, 15%);
    color: hsl(0, 100%, 100%);
    font-size: 3vh;
    width: 100%;
    padding: 2vh 2vw;
    border: 0;
    border-radius: 30px;
}

.signup-btn-page-submit:hover {
    background-color: hsla(0, 0%, 0%, 0.89);
    cursor: pointer;
    transform: scaleX(0.98);
    transition: .5s;
}

@media screen and (min-width:1460px) {
    .sub-signup-page-main-container {
        margin-top: 2vh;
    }
}

@media screen and (max-width:650px) {
    .sub-signup-page-main-container {
        width: 100%;
    }
}

@media screen and (max-width:410px) {
    .sub-signup-page-land-in {
        padding: 0 -1vw;
        margin: 0;
    }
}
</style>