import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './services/user/auth.guard'


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' , canActivate: [AuthGuard] },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'recipes-list', loadChildren: './pages/recipes-list/recipes-list.module#RecipesListPageModule' , canActivate: [AuthGuard] },
  { path: 'recipes-details', loadChildren: './pages/recipes-details/recipes-details.module#RecipesDetailsPageModule'  , canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule'  , canActivate: [AuthGuard] },
  { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutPageModule'  , canActivate: [AuthGuard]  },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'recipe-create', loadChildren: './pages/recipe-create/recipe-create.module#RecipeCreatePageModule'  , canActivate: [AuthGuard]  },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule'  , canActivate: [AuthGuard] },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
