import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloReadComponent } from './titulo-read.component';

describe('TituloReadComponent', () => {
  let component: TituloReadComponent;
  let fixture: ComponentFixture<TituloReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
