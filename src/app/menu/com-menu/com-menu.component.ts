import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { gamesList } from './games.mock';

@Component({
  selector: 'app-com-menu',
  standalone: false,
  templateUrl: './com-menu.component.html',
  styleUrl: './com-menu.component.css'
})
export class ComMenuComponent {
  gameList = gamesList;

  constructor(private router: Router){}
    goToGame(gameURL: String): void{
      this.router.navigate([`/games/${gameURL}`]);
    }
}
