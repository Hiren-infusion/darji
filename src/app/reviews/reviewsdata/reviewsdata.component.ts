import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { EventData, Progress } from '@nativescript/core';

@Component({
  selector: 'app-reviewsdata',
  templateUrl: './reviewsdata.component.html',
  styleUrls: ['./reviewsdata.component.css']
})
export class ReviewsdataComponent implements OnInit {

  title:string;
  public isRatedVisible: boolean = false
  public isRecentVisible: boolean = false
  public isReviewVisible: boolean = false


  constructor(private routerExtensions: RouterExtensions) {

    this.title = "Shree vaidiki designer studio"
  }

  ngOnInit() {
    this.isRatedVisible = true
  }

  dataItems: { title:string, name:string, time:string, fullreview:string, review:string, readmore:string } [] = [
    { title: "Ahmedabad", name: "Hiren", time: " 1 week ago", fullreview: "Full Review", review: "kljljdlsjdlsjdljljflsdjfldsjfljfldsjfldjsfldsjfldsjfldskj", readmore: "Read More" },
    { title: "Rajkot", name: "Vishal", time: " 2 week ago", fullreview: "Full Review", review: "kljljdlsjdlsjdljljflsdjfldsjfljfldsjfldjsfldsjfldsjfldskj", readmore: "Read More" },
    { title: "Jamnagar", name: "Dev", time: " 5 days ago", fullreview: "Full Review", review: "kljljdlsjdlsjdljljflsdjfldsjfljfldsjfldjsfldsjfldsjfldskj", readmore: "Read More" },
    { title: "Surat", name: "Rajesh", time: " 3 week ago", fullreview: "Full Review", review: "kljljdlsjdlsjdljljflsdjfldsjfljfldsjfldjsfldsjfldsjfldskj", readmore: "Read More" },
    { title: "Baroda", name: "Popat", time: " 1 day ago", fullreview: "Full Review", review: "kljljdlsjdlsjdljljflsdjfldsjfljfldsjfldjsfldsjfldsjfldskj", readmore: "Read More" }
  ]
  goBack(){
    this.routerExtensions.back();
   }

   onValueChanged(args: EventData) {
    let progressBar = args.object as Progress;
    console.log("New value: " + progressBar.value);
}

onTapRated(){
this.isRatedVisible = true
this.isRecentVisible = false
this.isReviewVisible = false
}

onTapRecent(){
  this.isRatedVisible = false
  this.isRecentVisible = true
  this.isReviewVisible = false

}

onTapReview(){
  this.isRatedVisible = false
  this.isRecentVisible = false
  this.isReviewVisible = true

}
onTapRow(index) {
  console.log("click on edit button" + index );
}

}
