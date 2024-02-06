import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) , children: [
    { path: ':store', loadComponent: () => import('./pages/store/store.component').then(m => m.StoreComponent) },
  ]},
  { path: 'login/:user', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
  { path: 'policies/:type', loadComponent: () => import('./pages/policies/policies.component').then(m => m.PoliciesComponent) },
  { path: 'homeAdmin', loadComponent: () => import('./pages/homeAdmin/homeAdmin.component').then(m => m.HomeAdminComponent), children: [
    { path: 'promotions', loadComponent: () => import('./pages/promotions/promotions.component').then(m => m.PromotionsComponent) },
    { path: 'products', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
    { path: '' , redirectTo: '/homeAdmin', pathMatch: 'full'},
    { path: '**', redirectTo: '/homeAdmin' },
  ]},
  { path: '' , redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home' },
];
