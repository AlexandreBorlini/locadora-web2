import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretorCreateComponent } from './diretor-create.component';

describe('DiretorCreateComponent', () => {
  let component: DiretorCreateComponent;
  let fixture: ComponentFixture<DiretorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
