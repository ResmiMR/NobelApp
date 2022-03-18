import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NobelPrizeComponent } from './pages/nobel-prize/nobel-prize.component';

const routes: Routes = [
  {
    path:"",component:NobelPrizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
