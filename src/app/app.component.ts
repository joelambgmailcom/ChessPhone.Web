import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChessPhoneNumbersComponent } from './chess-phone-numbers/chess-phone-numbers.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChessPhoneNumbersComponent, MatSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChessPhone.Web';

}
