import { Component, Input } from '@angular/core';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'app-toppings',
  standalone: false,
  templateUrl: './toppings.html',
  styleUrl: './toppings.scss'
})
export class Toppings {
  @Input() toppings: Topping[] = []
}
