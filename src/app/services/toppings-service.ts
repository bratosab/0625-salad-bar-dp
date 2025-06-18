import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {
  private http = inject(HttpClient);

  private readonly baseUrl = "https://retoolapi.dev/udhTkG/"

  getToppings() {
    return this.http.get<Topping[]>(`${this.baseUrl}toppings`)
  }
}
