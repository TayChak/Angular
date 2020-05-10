import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'mon-projet-angular';
  secondes: number;
  counterSubscription: Subscription;
  
  constructor(){
  	
  }

  ngOnInit(){
  	const counter = Observable.interval(1000);
  	this.counterSubscription = counter.subscribe(
  		(value: number) => {
  		this.secondes = value;
  		},
  		(error: any) => {
  		alert('Uh-oh, an error occurred! : ' + error);
  		},
  		() =>{
  		alert('Observable complete!');
  		}
  	);
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
