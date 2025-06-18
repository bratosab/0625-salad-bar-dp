import { Component, inject, Input, output, Output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { ToppingsService } from '../../services/toppings-service';

@Component({
  selector: 'app-toppings',
  standalone: false,
  templateUrl: './toppings.html',
  styleUrl: './toppings.scss'
})
export class Toppings {
  @Input() toppings: Topping[] = []
  protected toppingsService = inject(ToppingsService);
}
