import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-reviewdetail',
  templateUrl: './reviewdetail.component.html',
  styleUrls: ['./reviewdetail.component.css']
})
export class ReviewdetailComponent implements OnInit {

  reviewDetailTitle:string;
  reviewerName:string;
  review:string;

  constructor(private routerExtensions: RouterExtensions) {

    this.reviewDetailTitle = "Best boutique in Ahmedabad, awesome collections.";
    this.reviewerName = "by rukshana, 1 week ago";
    this.review = "jljljdfksfd;fkds;kf;dksf;dksfdsfl;dkseriprepwirpewirpeiowrpweirpewoirpeowirpweireopwirpeiwrpeowirpewiprewpriewprepwrpwerpewpreiwpreiw";
  }

  ngOnInit() {
  }
  goBack(){
    this.routerExtensions.back
  }
}
