import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEventPageComponent } from './pages/add-event-page/add-event-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';
import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';
import { EventSortingComponent } from './timeline/event-sorting/event-sorting.component';
import { EventListComponent } from './timeline/event-list/event-list.component';
import { NewsItemComponent } from './timeline/event-list/news-item/news-item.component';
import { NewsFormComponent } from './timeline/event-form/news-form/news-form.component';
import { NewsViewComponent } from './timeline/event-view/news-view/news-view.component';
import { TransactionItemComponent } from './timeline/event-list/transaction-item/transaction-item.component';
import { TransactionFormComponent } from './timeline/event-form/transaction-form/transaction-form.component';
import { TransactionViewComponent } from './timeline/event-view/transaction-view/transaction-view.component';

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
        NewsFormComponent,
        TransactionFormComponent,
        NewsViewComponent,
        TransactionViewComponent
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
