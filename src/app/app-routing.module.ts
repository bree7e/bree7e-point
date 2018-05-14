import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { AddEventPageComponent } from './pages/add-event-page/add-event-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/timeline', pathMatch: 'full' },
    { path: 'timeline', component: TimelinePageComponent },
    { path: 'timeline/transactions/:id', component: TransactionPageComponent },
    { path: 'timeline/news/:id', component: NewsPageComponent },
    { path: 'timeline/add', component: AddEventPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
