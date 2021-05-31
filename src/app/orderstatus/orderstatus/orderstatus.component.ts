import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {
  orderNo:string;
  name:string;
  address:string;

  constructor() {

    this.orderNo = "Order # 12345"
    this.name = "Neerus"
    this.address = "Street no 1, prashanth nagar, ahmedabad, gujarat"
  }
  dataItems: { nameOfItem:string, itemNumber:string, measurementName:string } [] = [
    { nameOfItem: "Chudidar", itemNumber: "1 item", measurementName: "Anjali"},
    // { nameOfItem: "Chudidar", itemNumber: "1 item", measurementName: "Arjun"},
     //{ nameOfItem: "Chudidar", itemNumber: "1 item", measurementName: "Anil"}
  ]
  ngOnInit() {
  }
  onTapPayment() {

  }
  onTapItemDelivered() {

  }

}
