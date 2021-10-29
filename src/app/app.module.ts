import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import {UsersModule} from "./users/users.module";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/app.reducers";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {EffectsArray} from "./store/effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsersModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
