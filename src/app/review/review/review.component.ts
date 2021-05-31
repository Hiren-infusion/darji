import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  moduleId: module.id

})
export class ReviewComponent implements OnInit {

  txtStudioName:string;
  txtStudioAddress:string;
  txtOpenTime:string;
  scrollUp: boolean = false;
  txtContent: string;
  textFieldValue: any
  // private getScroll() {
  //   console.log("=== getScroll " + this.scrollUp);
  //   if (isAndroid) {
  //     this.scrollUp = true;
  //   }
  // }
  // private keyboardDisable() {
  //   console.log("=== keyboardDisable " + this.scrollUp);
  //   this.scrollUp = false;
  // }

  constructor(private routerExtensions: RouterExtensions) {

    this.txtStudioName = "Shree vaidiki designer studio"
    this.txtStudioAddress = "street 1, prashant nagar, ahmedabad, gujarat"
    this.txtOpenTime = "Hours open 10:00am - 8:00pm"


  }

  ngOnInit() {

  }

  goBack(){
   this.routerExtensions.back();
  }
  openSettings() {
    console.log("click on ImageDetail button2" );
  }
  goSubmitReview() {
    this.routerExtensions.navigate(["/reviewsdata"])
  }

}
