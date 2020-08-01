import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: 'AIzaSyApwkdjinRHrRuMpG3VrRfTJnjyrfKWMWQ',
  authDomain: 'angular-library-40dc0.firebaseapp.com',
  databaseURL: 'https://angular-library-40dc0.firebaseio.com',
  projectId: 'angular-library-40dc0',
  storageBucket: 'angular-library-40dc0.appspot.com',
  messagingSenderId: '466735912005',
  appId: '1:466735912005:web:25e5e41dfd124f435ebf2c',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
