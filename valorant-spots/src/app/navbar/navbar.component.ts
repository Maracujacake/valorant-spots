import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() selecionarConteudo = new EventEmitter<string>();

  onDivClick(conteudo: string) {
    this.selecionarConteudo.emit(conteudo);
  }
}
