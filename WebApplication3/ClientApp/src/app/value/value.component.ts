import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
})

export class ValueComponent implements OnInit {

  values: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('https://localhost:44302/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }



  //  export class ValueComponent {
  //    public value: ValueForecast[];
  //
  //    constructor(http: HttpClient) {
  //      http.get<ValueForecast[]>(baseUrl + 'api/values').subscribe(result => {
  //        this.value = result;
  //      },
  //        error => console.error(error));
  //    }
  //}
  //
  //interface ValueForecast {
  //  Id: number;
  //  Name: string;
  //}
}
