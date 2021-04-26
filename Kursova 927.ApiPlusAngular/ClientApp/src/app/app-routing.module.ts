import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './Auth/Login/Login.component';
import { RegisterComponent } from './Auth/Register/Register.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch:'full'},
    {path:'home', component: HomeComponent, pathMatch:'full'},
    { path:'login', component:LoginComponent, pathMatch:'full'},
    { path:'register', component:RegisterComponent, pathMatch:'full'},
    { path:'admin-panel', component:AdminPanelComponent, pathMatch:'full'},
    { path:'user-profile', component:UserProfileComponent, pathMatch:'full'}
];

@NgModule({ 

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppRoutingModule { }