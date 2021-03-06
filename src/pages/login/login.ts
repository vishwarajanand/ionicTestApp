import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { HomePage } from '../home/home';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,public globalvarsProvider:GlobalvarsProvider) {
  }
  
  ionViewDidLoad(){
    console.log("TODO: Check whether we are already logged in or connected to internet!!");
    this.globalvarsProvider.loginState = false;
  }

  launchSignupPage(){
    console.log("Jumping to Signup page");
    this.navCtrl.setRoot(SignupPage);
  }

  launchForgotpassword(){
    console.log("Jumping to Forgot password page");
    this.navCtrl.setRoot(ForgotpasswordPage);
  }

  launchHome(){
    console.log("Jumping to home page");
    this.globalvarsProvider.loginState = true;
    this.navCtrl.setRoot(HomePage);
  }
}
