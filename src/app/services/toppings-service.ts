import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root',
})
export class ToppingsService {
  private http = inject(HttpClient);
  private _chosenToppings = signal<Topping[]>([]);
  private readonly baseUrl = 'https://retoolapi.dev/udhTkG/';

  getToppings() {
    return this.http.get<Topping[]>(`${this.baseUrl}toppings`);
  }

  get chosenToppings() {
    return this._chosenToppings.asReadonly();
  }

  public totalPrice = computed(() =>
    this.chosenToppings().reduce((total, topping) => total + topping.price, 0)
  );

  chooseTopping(topping: Topping) {
    this._chosenToppings.update((toppings) => [...toppings, topping]);
  }

  removeTopping(index: number) {
    this._chosenToppings.update((toppings) =>
      toppings.filter((_t, i) => i !== index)
    );
  }
}
