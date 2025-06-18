import { Component, inject, OnInit } from '@angular/core';
import { ToppingsService } from '../services/toppings-service';
import { Topping } from '../models/topping.model';
import { Observable, tap } from 'rxjs';
import { OrderService } from '../services/order';
import { Toppings } from './toppings/toppings';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-salad',
    templateUrl: './salad.html',
    styleUrl: './salad.scss',
    imports: [Toppings, AsyncPipe],
})
export class Salad implements OnInit {
  protected toppings: Topping[] = [];
  protected toppings$: Observable<Topping[]>;
  protected toppingsService = inject(ToppingsService);
  protected orderService = inject(OrderService);

  constructor() {
    this.toppings$ = this.toppingsService.getToppings().pipe(
      tap((toppings) => {
        this.toppings = toppings;
      })
    );
  }

  ngOnInit(): void {
    // this.toppingsService.getToppings().subscribe((toppings) => {
    //   this.toppings = toppings;
    // });
  }
}
