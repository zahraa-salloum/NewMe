import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ConfirmationInfoComponent } from './confirmation-info/confirmation-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MedicalInfoComponent } from './medical-info/medical-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubscribeToNutritionistComponent } from './subscribe-to-nutritionist/subscribe-to-nutritionist.component';
import { WeeklyPlanComponent } from './weekly-plan/weekly-plan.component';

const routes: Routes = [
  {
    path: 'signUp',
    component: SignUpComponent,
    children: [
      

      {
        path: 'personal', component: PersonalInfoComponent
      }, {
        path: 'general', component: GeneralInfoComponent
      }, {
        path: 'medical', component: MedicalInfoComponent
      }, {
        path: 'payment', component: PaymentInfoComponent
      }, {
        path: 'confirmation', component: ConfirmationInfoComponent
      },
      { path: '', redirectTo: 'personal', pathMatch: 'full' }
    ]
  },
  {
    path: 'accountPage',
    component: AccountPageComponent,
    children: [
      

      {
        path: 'dashboard', component: DashboardComponent
      }, {
        path: 'searchRecipe', component: SearchRecipeComponent
      }, {
        path: 'subscribe', component: SubscribeToNutritionistComponent
      }, {
        path: 'weeklyPlan', component: WeeklyPlanComponent
      }, {
        path: 'settings', component: AccountSettingsComponent
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'signIn',
    component: SignInComponent
  },{
    path: 'accountPage',
    component: AccountPageComponent
  }
  ,
  {
    path: '',
    component: HomePageComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
