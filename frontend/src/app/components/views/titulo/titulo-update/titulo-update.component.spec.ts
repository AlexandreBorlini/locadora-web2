import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloUpdateComponent } from './titulo-update.component';

describe('TituloUpdateComponent', () => {
  let component: TituloUpdateComponent;
  let fixture: ComponentFixture<TituloUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
