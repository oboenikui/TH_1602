import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LicensePage } from '../pages/license/license';
import { LoginPage } from '../pages/login/login';
import { ObjectListPage } from '../pages/object/list/object-list';
import { ObjectRegistrationPage } from '../pages/object/registration/object-registration';
import { UserListPage } from '../pages/user/list/user-list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  objectListPage = ObjectListPage;
  licensePage = LicensePage;
  objectRegistrationPage = ObjectRegistrationPage;
  userListPage = UserListPage;
  @ViewChild('content') nav: NavController

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page);
  }

  clearPageStack() {
    this.nav.popToRoot()
  }
}
