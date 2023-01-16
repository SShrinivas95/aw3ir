import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeteoDetailComponent } from './meteo-detail/meteo-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { MeteoService } from './services/meteo.service';

const approutes: Routes = [
  { 
    path: 'meteo/:name',  // la page  affichant la météo prendra comme paramètre 'name'
    component: MeteoDetailComponent }, // Ce component fera l'appel AJAX et afficher les données reçues par openWeatherMap
    // {
    //   path: '', // un chemin vide renverra vers '/'
    //   redirectTo: '/',
    //   pathMatch: 'full'
    // },
  {
    path: '', // la page principale utilisera le component suivant
    component: MeteoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MeteoDetailComponent,
    
  ],
  imports: [
    RouterModule.forRoot(
      approutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
