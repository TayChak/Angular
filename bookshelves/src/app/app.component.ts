import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookshelves-angular';

  constructor(){
   	var firebaseConfig = {
    apiKey: "AIzaSyAI1WLPs7uJwqAa1J4okqpaxBiSedJMRtc",
    authDomain: "bookshelves-angular-t.firebaseapp.com",
    databaseURL: "https://bookshelves-angular-t.firebaseio.com",
    projectId: "bookshelves-angular-t",
    storageBucket: "bookshelves-angular-t.appspot.com",
    messagingSenderId: "921231452816",
    appId: "1:921231452816:web:c7b7b01b08cd0635968615",
    measurementId: "G-1V5P1BTQVR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }


}
