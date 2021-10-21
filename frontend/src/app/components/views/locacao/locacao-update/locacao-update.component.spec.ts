import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoUpdateComponent } from './locacao-update.component';

describe('LocacaoUpdateComponent', () => {
  let component: LocacaoUpdateComponent;
  let fixture: ComponentFixture<LocacaoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocacaoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocacaoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
