import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent implements OnInit {

  orders;
  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.orders = this.dataService.getOrders();
  }

}
