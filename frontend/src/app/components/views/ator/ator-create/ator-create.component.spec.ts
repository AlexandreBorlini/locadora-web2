import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorCreateComponent } from './ator-create.component';

describe('AtorCreateComponent', () => {
  let component: AtorCreateComponent;
  let fixture: ComponentFixture<AtorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
