import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
  orderNo:string;
  name:string;
  address:string;
  heightData = 100;
  amount:string;
  orderDate:string;
  deliveryData:string;
  detail:string;

  constructor() {
    this.orderNo = "Order # 12345"
    this.name = "Neerus"
    this.address = "Street no 1, prashanth nagar, ahmedabad, gujarat"
    this.amount = "Rs. 5000";
    this.orderDate = "23 Feb 2021";
    this.deliveryData = "22 Mar 2021";
    this.detail = "Tight fit"

  }

  dataItems: { nameOfItem:string, itemNumber:string, measurementName:string } [] = [
    { nameOfItem: "Chudidar", itemNumber: "1 item", measurementName: "Anjali"},
    { nameOfItem: "Chudidar", itemNumber: "1 item", measurementName: "Arjun"},
    { nameOfItem: "Chudidar", itemNumber: "1 item", measurementName: "Anil"}
  ]

  ngOnInit() {

  }
  onTapContinue() {

  }
  onTapMeasurement() {

  }

}
