import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretorUpdateComponent } from './diretor-update.component';

describe('DiretorUpdateComponent', () => {
  let component: DiretorUpdateComponent;
  let fixture: ComponentFixture<DiretorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
