import { Component } from '@angular/core';
import { MainTitle } from '../../components/main-title/main-title';
import { BigCard } from '../../components/big-card/big-card';
import { SmallCard } from '../../components/small-card/small-card';

@Component({
  selector: 'app-home',

  imports: [
    MainTitle,
    BigCard,
    SmallCard
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
