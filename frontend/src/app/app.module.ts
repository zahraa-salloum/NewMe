import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { MedicalInfoComponent } from './medical-info/medical-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { ConfirmationInfoComponent } from './confirmation-info/confirmation-info.component';
import {StepsModule} from 'primeng/steps';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {InputMaskModule} from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { AccountPageComponent } from './account-page/account-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { SubscribeToNutritionistComponent } from './subscribe-to-nutritionist/subscribe-to-nutritionist.component';
import { WeeklyPlanComponent } from './weekly-plan/weekly-plan.component';

import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInComponent,
    SignUpComponent,
    PersonalInfoComponent,
    GeneralInfoComponent,
    MedicalInfoComponent,
    PaymentInfoComponent,
    ConfirmationInfoComponent,
    AccountPageComponent,
    PageNotFoundComponent,
    DashboardComponent,
    SearchRecipeComponent,
    SubscribeToNutritionistComponent,
    WeeklyPlanComponent,

    AccountSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    StepsModule,
    ToastModule,
    MenuModule,
    CardModule,
    AutoCompleteModule,
    InputTextareaModule,
    MultiSelectModule,
    RadioButtonModule,
    InputMaskModule,
    InputTextModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
