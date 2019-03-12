import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCtzQftF665-9AS3zniUrqflu56SejhLp8',
      authDomain: 'ng-recipe-book-8fdd2.firebaseapp.com',
    });
  }

}
