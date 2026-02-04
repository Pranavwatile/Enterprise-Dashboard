import { Dashboard } from "./dashboard";
import { authGuard } from "../../core/auth/auth-guard";
import { Routes } from "@angular/router";

export const DASHBOARD_ROUTES : Routes =[
    {
        path: '',
        component: Dashboard,
        canActivate:[authGuard],
    },
];