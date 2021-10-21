import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoCreateComponent } from './locacao-create.component';

describe('LocacaoCreateComponent', () => {
  let component: LocacaoCreateComponent;
  let fixture: ComponentFixture<LocacaoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocacaoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocacaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
