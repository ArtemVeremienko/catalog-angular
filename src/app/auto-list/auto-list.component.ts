import { Component, OnInit } from '@angular/core';
import { Auto } from '../interfaces';
import { AUTOS } from '../mock-auto'

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.scss']
})
export class AutoListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  autos = AUTOS;

  onInfo() {
    // TODO: go to info page
  }
}
