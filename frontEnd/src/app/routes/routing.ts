import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { AdminComponent } from '../components/admin/admin.component';
import { ListComponent } from '../components/list/list.component';
import { GuardService } from '../services/guard.service';
import { NewPhotoComponent } from '../components/new-photo/new-photo.component';
import { EditPhotoComponent } from '../components/edit-photo/edit-photo.component';

const app_routes: Routes = [
  { path:'home/:num', component:HomeComponent},
  { path:'admin', component:AdminComponent, canActivate:[GuardService],
  children:[
    {path:'list',component:ListComponent}
    {path:'new',component:NewPhotoComponent}
    {path:'edit/:id',component:EditPhotoComponent}
  ]},
  { path:'login', component:LoginComponent},
  { path:'**', pathMatch:'full', redirectTo:'home/1'}
];

export const AppRouting=RouterModule.forRoot(app_routes);
