import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComHomeComponent } from './home/com-home/com-home.component';
import { ComMenuComponent } from './menu/com-menu/com-menu.component';
import { ComBielaRusaComponent } from './games/com-biela-rusa/com-biela-rusa.component';

const routes: Routes = [
  { path: '', component: ComHomeComponent },
  { path: 'menu', component: ComMenuComponent},
  { path: 'games/biela-rusa', component: ComBielaRusaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
