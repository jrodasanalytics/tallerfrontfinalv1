import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  constructor(private http: HttpClient) {}

  getCarsSmall() {
      return [
        {
          id:1,
          year:2020,
          brand:"Chevrolet",
          color:"Azul"
        },
        {
          id:2,
          year:2021,
          brand:"Chevrolet",
          color:"Blanco"
        },
        {
          id:3,
          year:2022,
          brand:"Masseratti",
          color:"Plateado"
        }
      ]
  }
}
