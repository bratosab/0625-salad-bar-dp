import { Component, inject, Input, output, Output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { ToppingsService } from '../../services/toppings-service';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-toppings',
    templateUrl: './toppings.html',
    styleUrl: './toppings.scss',
    imports: [CurrencyPipe]
})
export class Toppings {
  @Input() toppings: Topping[] = []
  protected toppingsService = inject(ToppingsService);
}
