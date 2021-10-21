import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoCrudComponent } from './locacao-crud.component';

describe('LocacaoCrudComponent', () => {
  let component: LocacaoCrudComponent;
  let fixture: ComponentFixture<LocacaoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocacaoCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocacaoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
