import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { PostComponent } from './components/post/post.component';
import { SerchComponent } from './components/serch/serch.component';

const routes: Routes = [
  {path:'post', component:PostComponent},
  {path:'search', component:SerchComponent},
  {path:'analitycs', component:AnalyticsComponent},
  {path:"**", pathMatch:'full', redirectTo:'post'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
