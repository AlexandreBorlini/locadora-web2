import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorReadComponent } from './ator-read.component';

describe('AtorReadComponent', () => {
  let component: AtorReadComponent;
  let fixture: ComponentFixture<AtorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtorReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
