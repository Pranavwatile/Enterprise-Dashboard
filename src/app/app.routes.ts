import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { authGuard } from './core/auth/auth-guard';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Dashboard } from './shared/dashboard/dashboard';
import { LoginComponent } from './features/auth/login/login';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        canActivate:[authGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren:() => 
                    import('./shared/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),

            }
        ]
    },
    {
        path : 'auth',
        component: AuthLayout,
        children: [
            {
                path:'login',
                component: LoginComponent
            }
        ]
    },
    {
        path: '**', redirectTo: 'dashboard', pathMatch: 'full'
    }
];

//We used layout-based routing to clearly separate authenticated and unauthenticated areas, which keeps routing scalabale