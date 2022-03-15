import { Component, OnInit, Input } from '@angular/core';
import { hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detalles.component.html',
  styleUrls: ['./hero-detalles.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: hero;

  constructor() { }

  ngOnInit(): void {
  }

}