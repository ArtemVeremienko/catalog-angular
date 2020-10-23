import { Component, OnInit } from '@angular/core';
import { Car } from '../interfaces'
import { CarsService } from '../cars.service'

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.scss']
})
export class AutoListComponent implements OnInit {


  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.getCars()
  }

  cars: Car[];

  getCars(): void {
    this.carsService.getCars()
      .subscribe(cars => this.cars = cars);
  }
}
