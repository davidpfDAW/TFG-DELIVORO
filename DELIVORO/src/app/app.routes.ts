import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "inicio",
        loadComponent: () => import('./pages/inicio/inicio.component').then( c => c.InicioComponent) ,
    },
    {
        path: "carrito",
        loadComponent: () => import('./pages/carrito/carrito.component').then( c => c.CarritoComponent) ,
    },
    {
        path: "pago",
        loadComponent: () => import('./pages/pago/pago.component').then( c => c.PagoComponent),
    },
    {
        path: "login",
        loadComponent: () => import('./pages/inicio/inicio.component').then( c => c.InicioComponent) ,
    },
    {
        path: "registro",
        loadComponent: () => import('./pages/inicio/inicio.component').then( c => c.InicioComponent) ,
    },
    {
        path: "colaboradores",
        loadComponent: () => import('./pages/inicio/inicio.component').then( c => c.InicioComponent) ,
        children: [
            {
                path: "gestion",
                loadComponent: () => import('./pages/inicio/inicio.component').then( c => c.InicioComponent) ,
            },
            {
                path: "promociones",
                loadComponent: () => import('./pages/inicio/inicio.component').then( c => c.InicioComponent) ,
            },
            {
                path: "carta",
                loadComponent: () => import('./pages/inicio/inicio.component').then( c => c.InicioComponent) ,
            },
            {
                path: "login",
                loadComponent: () => import('./pages/inicio/inicio.component').then( c => c.InicioComponent) ,
            },
        ]
    },
    {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full",
    },
    {
        path: "**",
        redirectTo: "inicio",
        pathMatch: "full",
    }
];
