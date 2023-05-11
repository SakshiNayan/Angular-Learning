import { Component, OnInit,OnDestroy } from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
import {map} from 'rxjs/operators'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private firstSubcription :Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstSubcription = interval(1000).subscribe(count =>{
    //   //its the handler for all the data values that are emitted.
    //   console.log(count);
    // })
    //real custom observable

    const customIntervalObservable = Observable.create( observer =>{
      let count=0; 
      setInterval(()=>{
        observer.next(count);
        if(count === 5){
          observer.complete();
        }
        if (count > 3){
          observer.error(new Error('count is greater than 3!'));
          
        }
        count++;
       },1000)
    });
    customIntervalObservable.pipe(map((data: number)=>{
      return 'Round:' +(data+1);
    }))

    this.firstSubcription = customIntervalObservable.subscribe(data =>{
      console.log(data);
    }, error => {
        console.log(error);
        alert(error.message);
    }, ()=>{
      console.log('Completed!');
    })

  }
  ngOnDestroy(){
    this.firstSubcription.unsubscribe();
  }

}
