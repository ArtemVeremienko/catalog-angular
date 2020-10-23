import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarsService } from '../cars.service';
import { Car } from '../interfaces'

@Component({
  selector: 'app-auto-info',
  templateUrl: './auto-info.component.html',
  styleUrls: ['./auto-info.component.scss']
})
export class AutoInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private location: Location
  ) { }

  car: Car;

  ngOnInit(): void {
    this.getCar()
  }

  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carsService.getCar(id)
      .subscribe(car => this.car = car)
  }

  goBack(): void {
    this.location.back()
  }

}
