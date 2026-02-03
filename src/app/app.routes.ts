import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./feature/dashboard/dashboard.component')
                    .then(m => m.DashboardComponent),


            }
        ]
    },
    {
        path : 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path:'login',
                loadComponent:() => 
                    import('./feature/dashboard/dashboard.component')
                .then(m => m.LoginComponent),
            }
        ]
    },
    {
        path: '**', redirectTo: 'dashboard'
    }
];

//We used layout-based routing to clearly separate authenticated and unauthenticated areas, which keeps routing scalabale