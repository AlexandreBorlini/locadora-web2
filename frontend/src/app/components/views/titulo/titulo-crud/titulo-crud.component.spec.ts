import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloCrudComponent } from './titulo-crud.component';

describe('TituloCrudComponent', () => {
  let component: TituloCrudComponent;
  let fixture: ComponentFixture<TituloCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
