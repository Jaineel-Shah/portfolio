import { Component } from '@angular/core';
import { faYoutube} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
  faYoutube=faYoutube;
}
