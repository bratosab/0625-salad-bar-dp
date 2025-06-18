import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../services/order';
import { Router } from '@angular/router';
import { MatFormField, MatLabel, MatPrefix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-order',
    templateUrl: './order.html',
    styleUrl: './order.scss',
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatIcon,
        MatPrefix,
        MatError,
        MatButton,
    ],
})
export class Order {
  private formBuilder = inject(FormBuilder);
  private orderService = inject(OrderService);
  private router = inject(Router)

  protected orderForm = this.formBuilder.group({
    name: [this.orderService.name(), Validators.required],
    tel: [this.orderService.tel(), [Validators.required, Validators.pattern('^0[6-7][0-9]{8}$')]],
  });

  get telControl() {
    return this.orderForm.controls.tel;
  }

  protected startOrder() {
    if (this.orderForm.valid) {
      this.orderService.name.set(this.orderForm.value.name as string);
      this.orderService.tel.set(this.orderForm.value.tel ?? '');

      this.router.navigate(['salad']);
    }
  }
}
