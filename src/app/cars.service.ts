import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './interfaces'
import { CARS } from './mock-auto'

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCars(): Observable<Car[]> {
    return of(CARS)
  }

  getCar(id: number): Observable<Car> {
    return of(CARS.find(car => car.id === id))
  }
}
