import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
// import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FramePage } from '../frame/frame';
import { SignaturePage } from '../signature/signature';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  signatureImage: any;

  constructor(public navParams: NavParams, public modalController: ModalController, public navCtrl: NavController) {
    this.signatureImage = navParams.get('signatureImage');
    console.log(this.signatureImage,"image=====")
    
  }

  onsignatureModel() {
    let model = this.modalController.create(SignaturePage);
    model.present();
  }

  launch(url) {
    this.navCtrl.push(FramePage)
  }

}
