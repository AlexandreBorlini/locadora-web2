import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretorReadComponent } from './diretor-read.component';

describe('DiretorReadComponent', () => {
  let component: DiretorReadComponent;
  let fixture: ComponentFixture<DiretorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretorReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
