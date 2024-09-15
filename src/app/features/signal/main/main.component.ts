import { Component } from '@angular/core';
import { CurrentComponent } from '../current/current.component';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CurrentComponent, NewComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
