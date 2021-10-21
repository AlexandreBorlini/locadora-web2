import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoReadComponent } from './locacao-read.component';

describe('LocacaoReadComponent', () => {
  let component: LocacaoReadComponent;
  let fixture: ComponentFixture<LocacaoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocacaoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocacaoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
