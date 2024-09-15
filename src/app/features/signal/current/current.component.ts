import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-current-non-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current.component.html',
  styleUrl: './current.component.scss'
})
export class CurrentComponent {
  search = ''
  heroes = [
    {id: 1, name: 'Spider-Man'},
    {id: 2, name: 'Scarlet Witch'},
    {id: 3, name: 'Hulk'}
  ];

  filteredHeroes = this.heroes;
    
  setSearchHero(e: Event) {
    this.search = (e.target as HTMLInputElement).value
    this.filteredHeroes = this.heroes.filter(
      hero => hero.name.startsWith(this.search)
    )
  }
    
  addHero() { 
    this.heroes = [...this.heroes, {id:4, name: 'Iron Man'}]
  }
}
