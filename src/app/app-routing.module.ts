import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComHomeComponent } from './home/com-home/com-home.component';
import { ComMenuComponent } from './menu/com-menu/com-menu.component';

const routes: Routes = [
  { path: '', component: ComHomeComponent },
  { path: 'menu', component: ComMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
