import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-filtrotab',
  templateUrl: './filtrotab.component.html',
  styleUrls: ['./filtrotab.component.css']
})
export class FiltrotabComponent implements OnInit {

  disableSelect = new FormControl(false);

  constructor() { }

  ngOnInit(): void {
  }

}
