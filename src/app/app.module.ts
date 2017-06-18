import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { FilmsPage } from '../pages/films/films';
import { PeoplePage } from '../pages/people/people';
import { StarshipsPage } from '../pages/starships/starships';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FilmsProvider } from '../providers/films/films';
import { PeopleProvider } from '../providers/people/people';
import { StarshipsProvider } from '../providers/starships/starships';

@NgModule({
  declarations: [
    MyApp,
    FilmsPage,
    PeoplePage,
    StarshipsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilmsPage,
    PeoplePage,
    StarshipsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FilmsProvider,
    PeopleProvider,
    StarshipsProvider
  ]
})
export class AppModule {}
