import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorPageComponent } from './error-page/error-page.component'

const routes: Routes = [
  {path : 'about', component: AboutUsComponent},
  {path : '', component: HomepageComponent},
  {path : '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutUsComponent]