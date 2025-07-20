import { Component } from '@angular/core';
import {MainTitle} from "../../components/main-title/main-title";

@Component({
  selector: 'app-home',
    imports: [
        MainTitle
    ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
