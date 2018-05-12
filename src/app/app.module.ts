import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEventComponent } from './add-event/add-event.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';

@NgModule({
    declarations: [
        AppComponent,
        AddEventComponent,
        TransactionPageComponent,
        NewsPageComponent,
        TimelinePageComponent
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
