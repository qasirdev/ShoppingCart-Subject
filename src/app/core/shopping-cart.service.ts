import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItemsCount: number;
  shoppingCartSubject = new Subject<number>();
  shoppingCartChanged$ = this.shoppingCartSubject.asObservable();

  constructor() { }

  addToCart(){
    this.cartItemsCount++;
    this.shoppingCartSubject.next(this.cartItemsCount);
  }
}
