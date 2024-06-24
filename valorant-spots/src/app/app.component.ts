import { Component, Type } from '@angular/core';
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
import { FadeComponent } from './conteudos/fade/fade.component';
import { GekkoComponent } from './conteudos/gekko/gekko.component';
import { JettComponent } from './conteudos/jett/jett.component';
import { KayoComponent } from './conteudos/kayo/kayo.component';
import { KilljoyComponent } from './conteudos/killjoy/killjoy.component';
import { NeonComponent } from './conteudos/neon/neon.component';
import { OmenComponent } from './conteudos/omen/omen.component';
import { PhoenixComponent } from './conteudos/phoenix/phoenix.component';
import { RazeComponent } from './conteudos/raze/raze.component';
import { ReynaComponent } from './conteudos/reyna/reyna.component';
import { SageComponent } from './conteudos/sage/sage.component';
import { SkyeComponent } from './conteudos/skye/skye.component';
import { SovaComponent } from './conteudos/sova/sova.component';
import { ViperComponent } from './conteudos/viper/viper.component';
import { YoruComponent } from './conteudos/yoru/yoru.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ContentAreaComponent,
            AstraComponent, BreachComponent, BrimstoneComponent, ChamberComponent,
            CypherComponent, FadeComponent, GekkoComponent, 
            JettComponent, KayoComponent, KilljoyComponent, NeonComponent, 
            OmenComponent, PhoenixComponent, RazeComponent, ReynaComponent,
            SageComponent, SkyeComponent, SovaComponent, ViperComponent,
            YoruComponent,
            InicialComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  componentMap: { [key: string]: Type<any> } = {
    'conteudoInicial': InicialComponent,
    'conteudoAstra': AstraComponent,
    'conteudoBreach': BreachComponent,
    'conteudoBrimstone': BrimstoneComponent,
    'conteudoChamber': ChamberComponent,
    'conteudoCypher': CypherComponent,
    'conteudoFade': FadeComponent,
    'conteudoGekko': GekkoComponent,
    'conteudoJett': JettComponent,
    'conteudoKAY/O': KayoComponent,
    'conteudoKilljoy': KilljoyComponent,
    'conteudoNeon': NeonComponent,
    'conteudoOmen': OmenComponent,
    'conteudoPhoenix': PhoenixComponent,
    'conteudoRaze': RazeComponent,
    'conteudoReyna': ReynaComponent,
    'conteudoSage': SageComponent,
    'conteudoSkye': SkyeComponent,
    'conteudoSova': SovaComponent,
    'conteudoViper': ViperComponent,
    'conteudoYoru': YoruComponent
  }

  contentList = Object.keys(this.componentMap).map(nome => ({
    nome: this.componentMap[nome],
    conteudo: nome
  }));

  title = 'valorant-spots';
  conteudoAtual: string = "conteudoInicial";

  atualizarConteudo(conteudo: string) {
    this.conteudoAtual = conteudo;
  }
}
