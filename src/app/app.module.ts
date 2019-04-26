import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookModule } from './book/book.module';
import { CustomerModule } from './customer/customer.module';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ResourceNotfoundComponent } from './notfound.component';

@NgModule({
  declarations: [
    AppComponent, 
    WelcomeComponent,
    ResourceNotfoundComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    BookModule, 
    CustomerModule,
    RouterModule.forRoot(appRoutes)
  ]

})
export class AppModule {

}
