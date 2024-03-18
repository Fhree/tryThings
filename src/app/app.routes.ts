import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"",
    loadComponent: () => import('./tryThings/pages/home-page/home-page.component').then(c => c.HomePageComponent)
  },
  {
    path:"invertOrder", 
    loadComponent: () => import('./tryThings/pages/invert-order/invert-order.component').then(c => c.InvertOrderComponent)
  },
  {
    path:"short", 
    loadComponent: () => import('./tryThings/pages/short-page/short-page.component').then(c => c.ShortPageComponent)
  }
];
