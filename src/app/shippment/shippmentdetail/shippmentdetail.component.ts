import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shippmentdetail',
  templateUrl: './shippmentdetail.component.html',
  styleUrls: ['./shippmentdetail.component.css']
})
export class ShippmentdetailComponent implements OnInit {
name:string;
address:string;
pincode:string;
mobile:string;
order:string;
ordername:string;
amount:string;
pricedetail:string;


  constructor() {

    this.name = "Arjun"
    this.address = "fjdfjsfjkldsfjdsflkdslfkdslkfdlsflkdsjaskdl;akd;aksd;aksd;"
    this.pincode = "Pin 1313113"
    this.mobile = "0123456789"
    this.order = "Order #12345"
    this.ordername = "Neerus"
    this.amount = "Rs. 5000"
    this.pricedetail = "Price details" + "(2 items)"
   }
   dataItems: { nameOfItem:string, itemNumber:string, measurementName:string } [] = [
    { nameOfItem: "Chudidar", itemNumber: "1 item", measurementName: "Anjali"},
    // { nameOfItem: "Chudidar", itemNumber: "1 item", measurementName: "Arjun"},
     //{ nameOfItem: "Chudidar", itemNumber: "1 item", measurementName: "Anil"}
  ]

  ngOnInit() {
  }

  OnTapChangeAddres() {

  }
  OnTapPayment() {

  }

}
