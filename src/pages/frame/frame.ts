import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'frame.html'
})
export class FramePage {
  url:any;
  constructor(public navCtrl: NavController,private inAppBrowser:InAppBrowser) {
  }
// ionic cordova run android --livereload


  launch(url) {
    this.inAppBrowser.create(url,"_self", "location=yes,hidden=yes");
    // this.inAppBrowser.show();
  }

}