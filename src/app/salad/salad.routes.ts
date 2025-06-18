import { Routes } from "@angular/router";
import { Salad } from "./salad";
import { saladGuard } from "./salad-guard";

export const saladRoutes: Routes = [
  { path: 'salad', component: Salad, canActivate: [saladGuard] },
];