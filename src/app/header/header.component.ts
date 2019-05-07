import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../core/shopping-cart.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  cartItemsCount : number;
  shoppingCardSub : Subscription;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCardSub = this.shoppingCartService.shoppingCartChanged$.subscribe((items:number)=>{
      this.cartItemsCount = items;
    })
  }
  ngOnDestroy(): void {
    this.shoppingCardSub.unsubscribe();
  }

}
