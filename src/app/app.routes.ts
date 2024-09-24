import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    loadComponent: () => import('@pages/dashboard/dashboard.component'),
  },

  {
    path: 'delivery',
    title: 'Delivery',
    loadComponent: () => import('@pages/delivery/delivery.component'),
  },

  {
    path: '**',
    title: 'Dashboard',
    loadComponent: () => import('@pages/dashboard/dashboard.component'),
  }
];
