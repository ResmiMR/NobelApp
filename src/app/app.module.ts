import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NobelPrizeComponent } from './pages/nobel-prize/nobel-prize.component';
import { HttpClientModule } from '@angular/common/http';
import { LaureateListComponent } from './pages/nobel-prize/laureate-list/laureate-list.component';
import { FormsModule } from '@angular/forms';
import { FilterLaureatePipe } from './pipes/filter-laureate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NobelPrizeComponent,
    LaureateListComponent,
    FilterLaureatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
