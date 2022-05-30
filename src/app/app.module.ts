import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggingService } from './services/LoggingService.service';
import { RestaurantService } from './services/RestaurantService.service';
import { ImagePlateComponent } from './dashboard/image-plate/image-plate.component';
import { TitlePlateComponent } from './dashboard/title-plate/title-plate.component';
import { FeaturesPlateComponent } from './dashboard/features-plate/features-plate.component';
import { ActionsPlateComponent } from './dashboard/actions-plate/actions-plate.component';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ImagePlateComponent,
    TitlePlateComponent,
    FeaturesPlateComponent,
    ActionsPlateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [ LoggingService, RestaurantService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
