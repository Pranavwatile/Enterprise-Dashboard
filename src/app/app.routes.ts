import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { authGuard } from './core/auth/auth-guard';
import { MainLayout } from './layouts/main-layout/main-layout';
import { LoginComponent } from './features/auth/login/login';
import { Dashboard } from './shared/dashboard/dashboard';
import { Reports } from './features/reports/reports';
import { Settings } from './features/settings/settings';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        canActivate:[authGuard],
        children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'reports', component: Reports },
      {
  path: 'settings',
  loadComponent: () =>
    import('./features/settings/settings')
      .then(m => {
        console.log('Settings loaded');
        return m.Settings;
      })
},
    ],
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