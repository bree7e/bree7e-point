import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEventComponent } from './add-event/add-event.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/timeline', pathMatch: 'full' },
    { path: 'timeline', component: TimelinePageComponent },
    { path: 'timeline/transactions/:id', component: TransactionPageComponent },
    { path: 'timeline/news/:id', component: NewsPageComponent },
    { path: 'timeline/add', component: AddEventComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
