import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../services/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  private formBuilder = inject(FormBuilder);
  private orderService = inject(OrderService);
  private router = inject(Router)

  protected orderForm = this.formBuilder.group({
    name: [this.orderService.name, Validators.required],
    tel: [this.orderService.tel, [Validators.required, Validators.pattern('^0[6-7][0-9]{8}$')]],
  });

  get telControl() {
    return this.orderForm.controls.tel;
  }

  protected startOrder() {
    if (this.orderForm.valid) {
      this.orderService.name = this.orderForm.value.name as string;
      this.orderService.tel = this.orderForm.value.tel ?? '';

      this.router.navigate(['salad']);
    }
  }
}
