import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { WelcomePageComponent } from './app/welcome-page/welcome-page.component';
import { MovieCardComponent } from './app/movie-card/movie-card.component';
import { importProvidersFrom } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatDialogModule,
      MatSnackBarModule,
      FormsModule
    )
  ]
}).catch(err => console.error(err));