import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';
import { AddEventPageComponent } from './pages/add-event-page/add-event-page.component';
import { EventListComponent } from './timeline/event-list/event-list.component';
import { EventSortingComponent } from './timeline/event-sorting/event-sorting.component';
import { NewsItemComponent } from './timeline/event/news-item/news-item.component';
import { TransactionItemComponent } from './timeline/event/transaction-item/transaction-item.component';

@NgModule({
    declarations: [
        AppComponent,
        TransactionPageComponent,
        NewsPageComponent,
        TimelinePageComponent,
        EventListComponent,
        EventSortingComponent,
        AddEventPageComponent,
        NewsItemComponent,
        TransactionItemComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
