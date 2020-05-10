import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppareilService {

appareilsSubject = new Subject<any[]>();

private appareils = [];

  constructor(private httpClient: HttpClient) { }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  switchOnAll(){
  	for(let appareil of this.appareils){
  		appareil.status = 'allumé';
  	}
    this.emitAppareilSubject();
  }

  switchOffAll(){
  	for(let appareil of this.appareils){
  		appareil.status = 'éteint';
  	}
    this.emitAppareilSubject();
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string){

    const appreilObject = {
      id: 0,
      name: '',
      status: ''
    };

    appreilObject.name = name;
    appreilObject.status = status;
    appreilObject.id = this.appareils[(this.appareils.length-1)].id+1;
    
    this.appareils.push(appreilObject);
    this.emitAppareilSubject();
  }

  saveAppareilsToServer(){
  this.httpClient
  .put('https://http-client-demo-t.firebaseio.com/appareils.json', this.appareils)
  .subscribe(
        () => {
          alert('Enregistrement terminé !');
        },
        (error) => {
          alert('Erreur ! : ' + error);
        }
      );

  }
  
  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://http-client-demo-t.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          alert('Erreur ! : ' + error);
        }
      );
  }
}