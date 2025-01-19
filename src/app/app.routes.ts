import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { LayoutComponent } from './pages/dashboard/dashboard/layout/layout.component';
import { OverviewComponent } from './pages/dashboard/dashboard/overview/overview.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },

{
    path:'home',
    component:HomeComponent
}
, 
{
    path:'',
    component:LayoutComponent,
    children:[
        {
            path:'overview',
            component:OverviewComponent
        }
    ]
        
}
  

];
