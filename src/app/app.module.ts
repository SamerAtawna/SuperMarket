import { DetailsModalComponent } from "./details-modal/details-modal.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { DateonlyPipe } from "./dateonly.pipe";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SMS } from "@ionic-native/sms/ngx";
import {
  Contacts,
  Contact,
  ContactField,
  ContactName
} from "@ionic-native/contacts/ngx";
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@NgModule({
  declarations: [AppComponent, DetailsModalComponent, DateonlyPipe],
  entryComponents: [DetailsModalComponent],
  exports: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SMS,
    Contacts,
    AndroidPermissions,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
