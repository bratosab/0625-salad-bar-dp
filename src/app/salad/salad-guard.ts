import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OrderService } from '../services/order';

export const saladGuard: CanActivateFn = (route, state) => {
  const orderService = inject(OrderService);
  const router = inject(Router);

  if(orderService.name && orderService.tel) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
