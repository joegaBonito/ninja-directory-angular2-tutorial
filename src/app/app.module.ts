import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app.route';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterPipe } from './filter.pipe';
import {LoggingService} from './logging.service';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
    AppRoutingModule ,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoggingService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
