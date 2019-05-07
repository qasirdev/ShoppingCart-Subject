import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.css']
})
export class CustomerslistComponent implements OnInit {

  customers;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.customers =  this.dataService.getCustomers();
  }

}
