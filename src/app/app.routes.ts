import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'inicio',
        title: "Sitestudio",
        loadComponent: () => import('./paginas/inicio/inicio.component'),
    },
    {
        path: 'quienes-somos',
            title: 'Quienes Somos?',
            loadComponent: () => import('./paginas/quienes-somos/quienes-somos.component')
    },
    {
        path: 'planes',
            title: 'Planes',
            loadComponent: () => import('./paginas/planes/planes.component')
    },
    {
        path: 'contacto',
            title: 'Contactos',
            loadComponent: () => import('./paginas/contacto/contacto.component')
    },
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    }
];
