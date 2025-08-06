import { Component } from '@angular/core';
import {MainTitle} from "../../components/main-title/main-title";
import {BigCard} from '../../components/big-card/big-card';
import {SmallCard} from '../../components/small-card/small-card';
import {MenuBar} from '../../components/menu-bar/menu-bar';

@Component({
  selector: 'app-home',
  imports: [
    MainTitle,
    BigCard,
    SmallCard,
    MenuBar
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
