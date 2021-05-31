import { Component, OnInit } from '@angular/core';
import { ListViewEventData } from 'nativescript-ui-listview';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public isAllVisible: boolean = false
  public isProgressingVisible: boolean = false
  public isCompletedVisible: boolean = false
  public isCancelVisible: boolean = false
  constructor() { }

  ngOnInit() {

  }

  dataItems: { name:string, date:string, item:string, amount:string } [] = [
    { name: "Ahmedabad", date: "wed Feb 10 2021", item: "2 item", amount: "Rs. 4000"},
    { name: "Rajkot", date: "wed Feb 10 2021", item: "1 item", amount: "Rs. 8000" },
    { name: "Jamnagar", date: "wed Feb 10 2021", item: "5 item", amount: "Rs. 3000" },
    { name: "Surat", date: "wed Feb 10 2021", item: "8 item", amount: "Rs. 5000" },
    { name: "Baroda", date: "wed Feb 10 2021", item: "7 item", amount: "Rs. 9000" }
  ]

  onTapAll() {
    this.isAllVisible = true
    this.isProgressingVisible = false
    this.isCompletedVisible = false
    this.isCancelVisible = false
    }
  onTapProgressing() {
    this.isAllVisible = false
    this.isProgressingVisible = true
    this.isCompletedVisible = false
    this.isCancelVisible = false
  }
  onTapCompleted() {
    this.isAllVisible = false
    this.isProgressingVisible = false
    this.isCompletedVisible = true
    this.isCancelVisible = false
  }
  onTapCancelled() {
    this.isAllVisible = false
    this.isProgressingVisible = false
    this.isCompletedVisible = false
    this.isCancelVisible = true
  }
  onTapRow(index) {
  console.log("click on edit button" + index );
}
}
