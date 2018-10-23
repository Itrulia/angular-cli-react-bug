import { Component } from '@angular/core';
import {ReactTest} from "./react-component";

console.log(ReactTest);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'react-angular-bug';
}
