import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';
import { EventListComponent } from './timeline/event-list/event-list.component';
import { EventSortingComponent } from './timeline/event-sorting/event-sorting.component';
import { EventComponent } from './timeline/event/event.component';
import { AddEventPageComponent } from './pages/add-event-page/add-event-page.component';

@NgModule({
    declarations: [
        AppComponent,
        TransactionPageComponent,
        NewsPageComponent,
        TimelinePageComponent,
        EventListComponent,
        EventSortingComponent,
        EventComponent,
        AddEventPageComponent
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
