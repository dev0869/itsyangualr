import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WebLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'itsyansgualr';
}