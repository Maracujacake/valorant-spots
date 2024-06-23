import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { AstraComponent } from './conteudos/astra/astra.component';
import { BreachComponent } from './conteudos/breach/breach.component';
import { InicialComponent } from './conteudos/inicial/inicial.component';
import { CommonModule } from '@angular/common';
import { BrimstoneComponent } from './conteudos/brimstone/brimstone.component';
import { ChamberComponent } from './conteudos/chamber/chamber.component';
import { CypherComponent } from './conteudos/cypher/cypher.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ContentAreaComponent,
            AstraComponent, BreachComponent, BrimstoneComponent, ChamberComponent,
            CypherComponent, InicialComponent,
            CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'valorant-spots';
  conteudoAtual: string = "conteudoInicial";

  atualizarConteudo(conteudo: string) {
    this.conteudoAtual = conteudo;
  }
}
