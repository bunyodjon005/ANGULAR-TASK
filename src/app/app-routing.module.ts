import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
    
  },
  {path:'dashboard',component:DashboardComponent},
  {path:'categoriy',component:CategoriesComponent},
  {path:'post',component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
