import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-new-signal',
  standalone: true,
  imports: [],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {
  search: WritableSignal<string> = signal<string>('');
  readonly _search = this.search.asReadonly();

  heroes = signal([
    {id: 1, name: 'Spider-Man'},
    {id: 2, name: 'Scarlet Witch'},
    {id: 3, name: 'Hulk'}
  ]);

  filteredHeroes: Signal<Array<{ id: number, name: string }>> = this.heroes.asReadonly();
  
  setSearchHero(e: Event) {
    this.search.set((e.target as HTMLInputElement).value);
    this.filteredHeroes = computed(() => this.heroes().filter(
      hero => hero.name.toLowerCase().startsWith(this._search().toLowerCase())
    ));
  }

  addHero() {
    this.heroes.update(heroes => [...heroes, {id:4, name: 'Iron Man'}]);
  }
}
