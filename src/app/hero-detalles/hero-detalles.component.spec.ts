import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetallesComponent } from './hero-detalles.component';

describe('HeroDetallesComponent', () => {
  let component: HeroDetallesComponent;
  let fixture: ComponentFixture<HeroDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
