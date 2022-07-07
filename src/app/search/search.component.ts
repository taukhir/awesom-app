import { Component, OnInit } from '@angular/core';
import { interval, Observable, ReplaySubject, Subject } from 'rxjs';
import { take, filter, map, debounceTime, tap } from 'rxjs/operators';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public searchFormGroup: FormGroup;
  public searchedData: string | null = null;
  public results$: Observable<Array<string>> = new Observable<Array<string>>();

  constructor(public http: HttpClient) {
    //streams example
    // Observable are observable streams
    // Observers are unicast
    // Observers are lazy
    // const observableExample = interval(1000).pipe(
    //   take(20),
    //   tap((x) => console.log('in tap ', x)),
    //   filter((x) => x % 2 == 0),
    //   map((x) => x * x)
    // );

    // observableExample.subscribe((result) => console.log('in #1 subscribe', result));
    // observableExample.subscribe((result) => console.log('in #2 subscribe', result));

    // Subject , ReplaySubject, BehavioralSubject
    // Subjects are lazy
    // Subjects are multicast
    // Subject -> does not hold previous values
    // ReplaySubject -> hold previous values [holds buffer of all the values emitted]
    // BehavioralSubject -> allows us to send one value without using subject.next
    // const subjectExample = new ReplaySubject<Number>();

    // let int = 0;

    // const subjectHandler = setInterval(() => {
    //   subjectExample.next(int++);
    //   if (int == 5)
    //     subjectExample.subscribe((data) =>
    //       console.log('in #2 subscriber ', data)
    //     );
    // }, 5000);

    // subjectExample.subscribe((data) => console.log('in #1 subscriber ', data));

    /*
     ** new FormConrol(); -> takes three args 1 - default val , 2 - sync validators , 3 - async validators
     */
    this.searchFormGroup = new FormGroup({
      searchCtrl: new FormControl(
        '',
        [Validators.required, Validators.minLength(3)],
        []
      ),
      limit: new FormControl(
        '',
        [Validators.required, Validators.min(1), Validators.max(20)],
        []
      ),
    });
  }

  /*
   ** Debounce time is to delay the result to subscribe
   */
  ngOnInit(): void {
    const searchCtrlConst = this.searchFormGroup.get('searchCtrl');
    const limit = this.searchFormGroup.get('limit')?.value;
    this.searchFormGroup
      .get('searchCtrl')
      ?.valueChanges.pipe(
        filter((v) => searchCtrlConst?.valid == true),
        debounceTime(1000)
      )
      .subscribe((value) => {
        console.log('searched value ' + value);
        var params = new HttpParams()
          .set('action', 'opensearch')
          .set('search', value)
          .set('limit', 10)
          .set('origin', '*');
        this.http
          .get('https://en.wikipedia.org/w/api.php', { params })
          .pipe(map((data: any) => data[1]))
          .subscribe((data) => {
            console.log(data);
            /*
             ** this.searchFormGroup.get("searchedData")?.setValue(JSON.stringify(data))
             */
            this.searchedData = data;
          });

        this.results$ = this.http
          .get<string[]>('https://en.wikipedia.org/w/api.php', { params })
          .pipe(map((data: any) => data[1]));

        // this.http.get("url",{params, observe:'respone'}).subscribe(data=>console.log(data))
      });
  }
}
