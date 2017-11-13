import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { HomePage } from '../home/home';
@Component({
    selector: 'page-signature',
    templateUrl: 'signature.html',
})
export class SignaturePage {
    @ViewChild(SignaturePad) public signaturePad: SignaturePad;

    public signatureImage: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    public signaturePadOptions: Object = {
        'minWidth': 2,
        'canvasWidth': 340,
        'canvasHeight': 300
    };
    canvasResize() {
        let canvas = document.querySelector('canvas');
        this.signaturePad.set('minWidth', 1);
        this.signaturePad.set('canvasWidth', canvas.offsetWidth);
        this.signaturePad.set('canvasHeight', canvas.offsetHeight);
    }

    ngAfterViewInit() {
        this.signaturePad.clear();
        this.canvasResize();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignaturePage');
    }
                             
    drawCancel() {
        this.navCtrl.push(HomePage);
    }

    drawComplete() {
        this.signatureImage = this.signaturePad.toDataURL();
        this.navCtrl.push(HomePage, { signatureImage: this.signatureImage });
    }

    drawClear() {
        this.signaturePad.clear();
    }

}