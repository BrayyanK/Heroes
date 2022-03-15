import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  
  selectedHero?: hero;

  heroes: hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
   
}

