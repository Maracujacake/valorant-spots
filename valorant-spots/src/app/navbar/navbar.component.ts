import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() selecionarConteudo = new EventEmitter<string>();

  itemsMobile = ['Astra', 'Breach', 'Brimstone', 'Chamber' , 'Cypher', 'Fade', 'Gekko', 'Jett',
    'KAY/O', 'Killjoy', 'Neon', 'Omen', 'Phoenix', 'Raze', 'Reyna', 'Sage', 'Skye', 'Sova',
    'Viper', 'Yoru']

  itemsNavbar1 = ['Astra', 'Breach', 'Brimstone', 'Chamber' , 'Cypher', 'Fade', 'Gekko', 'Jett',
  'KAY/O', 'Killjoy', 'Neon']

  itemsNavbar2 = ['Omen', 'Phoenix', 'Raze', 'Reyna', 'Sage', 'Skye', 'Sova',
  'Viper', 'Yoru']

  onDivClick(conteudo: string) {
    this.selecionarConteudo.emit(conteudo);
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


}
