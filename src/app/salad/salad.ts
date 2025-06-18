import { Component, inject, OnInit } from '@angular/core';
import { ToppingsService } from '../services/toppings-service';
import { Topping } from '../models/topping.model';

@Component({
  selector: 'app-salad',
  standalone: false,
  templateUrl: './salad.html',
  styleUrl: './salad.scss',
})
export class Salad implements OnInit {
  protected toppings: Topping[] = [];
  private toppingsService = inject(ToppingsService);

  ngOnInit(): void {
    this.toppingsService.getToppings().subscribe((toppings) => {
      this.toppings = toppings;
    });
  }
}
