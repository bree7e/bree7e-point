import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEventPageComponent } from './pages/add-event-page/add-event-page.component';
import { NewsFormComponent } from './pages/add-event-page/news-form/news-form.component';
import { TransactionFormComponent } from './pages/add-event-page/transaction-form/transaction-form.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';
import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';
import { Enum2ArrayPipe } from './shared/enum2-array.pipe';
import { EventListComponent } from './pages/timeline-page/timeline/event-list/event-list.component';
import { EventSortingComponent } from './pages/timeline-page/timeline/event-sorting/event-sorting.component';
import { NewsItemComponent } from './pages/timeline-page/timeline/event-list/news-item/news-item.component';
import { TransactionItemComponent } from './pages/timeline-page/timeline/event-list/transaction-item/transaction-item.component';

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
        Enum2ArrayPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
