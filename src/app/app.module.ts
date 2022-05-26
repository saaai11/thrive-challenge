import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { QuizComponent } from './quiz/quiz.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CharactersComponent, QuizComponent, NavigationComponent, CharactersListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
