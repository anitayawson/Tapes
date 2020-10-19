import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent} from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    routingComponents,
    HomepageComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
