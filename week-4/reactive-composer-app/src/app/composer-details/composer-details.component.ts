/*============================================;
Title: Exercise 4.3 - Handling Events with Observables;
Author: Professor Krasso;
Date: 1/24/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of observables;
===========================================*/

//This file acts as the constructor for the Composer Details component.

import { Component, OnInit } from '@angular/core';
import { IComposer} from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private ComposerService: ComposerService) {

    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    if(this.composerId){
      this.composer = this.ComposerService.getComposer(this.composerId);
    }

  }

  ngOnInit(): void {
  }

}
