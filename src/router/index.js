import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";
import WelcomePageView from "../views/WelcomePageView.vue";
import LandingPageView from "../views/LandingPageView.vue";
import AdminEmptyFunctionView from "../views/AdminEmptyFunctionView.vue";
import AdminHomeFunctionView from "../views/AdminHomeFunctionView.vue";
import AdminConstraintFunctionView from '../views/AdminConstraintFunctionView.vue';
import AdminExamFunctionView from "../views/AdminExamFunctionView.vue";
import AdminOutputSettingFunctionView from "../views/AdminOutputSettingFunctionView.vue";
import AdminOutputDesigningFunctionView from "../views/AdminOutputDesigningFunctionView.vue";
import AdminOptimizationFunctionView from "../views/AdminOptimizationFunctionView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "landing page",
            component: LandingPageView
        },
        {
            path: "/login",
            name: "login",
            component: LoginView
        },
        {
            path: "/signup",
            name: "signup",
            component:SignUpView
        },
        {
            path: "/welcome-page",
            name: "Welcome page",
            component: WelcomePageView
        },
        {
            path: "/admin-function",
            name: " Empty Admin functionality",
            component: AdminEmptyFunctionView
        },
        {
            path: "/admin-function/home",
            name: " Home Admin functionality",
            component: AdminHomeFunctionView
        },
        {
            path: "/admin-function/constraint-settings",
            name: "Constraint Admin functionality",
            component: AdminConstraintFunctionView
        },
        {
            path: "/admin-function/exam-settings",
            name: "Examination Admin functionality",
            component: AdminExamFunctionView
        },
        {
            path: "/admin-function/output-settings",
            name: "Output Setting Admin functionality",
            component: AdminOutputSettingFunctionView
        },
        {
            path: "/admin-function/output-designing",
            name: "Output Designing Admin functionality",
            component: AdminOutputDesigningFunctionView
        },
        {
            path: "/admin-function/optimization-settings",
            name: "Optimization Admin functionality",
            component: AdminOptimizationFunctionView
        }
    ]
})

export default router