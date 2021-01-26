/*============================================;
Title: Assignment 4.4 - Async Pipe;
Author: Professor Krasso;
Date: 1/24/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of Asynchronous Pipes and Observable Arrays;
===========================================*/


//This file acts as the constructor for the Composer List Component.

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
//Here we add the FormControl and debounceTime classes.
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
//Here we import Observable from RXJS.
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  //Here the composers variable is updated to be an Observable type.
    composers: Observable<IComposer[]>;
    textSearchControl = new FormControl('');

    constructor(private ComposerService: ComposerService) {
      this.composers = this.ComposerService.getComposers();
      //This sets a subscriber on the text search control that calls filterComposers() in the ComposerService when the value changes with a 500 ms wait time.
      //Here debounceTime provides a pause between character entry and automatic firing of the search function to prevent user annoyance.
      this.textSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
    }

  ngOnInit(): void {
  }
// This function calls the composer service and requests a filtering action based on user input.
  filterComposers(name: string){
    this.composers = this.ComposerService.filterComposers(name);
  }

}
