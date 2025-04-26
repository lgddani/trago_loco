import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComHomeComponent } from './home/com-home/com-home.component';

const routes: Routes = [
  { path: '', component: ComHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
