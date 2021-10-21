import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorUpdateComponent } from './ator-update.component';

describe('AtorUpdateComponent', () => {
  let component: AtorUpdateComponent;
  let fixture: ComponentFixture<AtorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
