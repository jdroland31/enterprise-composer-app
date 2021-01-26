/*============================================;
Title: Assignment 4.4 - Async Pipe;
Author: Professor Krasso;
Date: 1/24/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of Asynchronous Pipes and Observable Arrays;
===========================================*/

// This service takes the place of the class previously used.

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
//Here we import Observable, of, and map from RXJS.
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// This injectable statement means Angular can use this for dependency injection.
@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;
  //This constructor method instantiates an array of composers with composerId, fullName and genre.
    constructor(){
      this.composers = [
        {
          composerId: 100, fullName:"Ludwig Van Beethoven", genre: "Classical"
        },
        {
          composerId: 101, fullName:"Johann Sebastian Bach", genre: "Classical"
        },      {
          composerId: 102, fullName:"Wolfgang Amadeus Mozart", genre: "Classical"
        },      {
          composerId: 103, fullName:"Johannes Brahms", genre: "Classical"
        },      {
          composerId: 104, fullName:"Joseph Haydn", genre: "Classical"
        }
      ];
    }
    //This function returns the instantiated array of composers
    getComposers(): Observable<IComposer[]>{
      return of(this.composers);
    }
    //This function checks a given number to see if it matches a composer ID in the composers array and if true returns that composer.
    getComposer(composerId: number) {
      for (let composer of this.composers) {
        if (composer.composerId === composerId) {
          return composer;
        }
      }
    }
// This function filters composers by name and returns an observable array of all composers that match the search
    filterComposers(name: string): Observable<IComposer[]>{
      return of(this.composers).pipe(
        map(composers => composers.filter(
          composer => composer.fullName.toLowerCase().indexOf(name) > -1)
        )
      )
    }
}
