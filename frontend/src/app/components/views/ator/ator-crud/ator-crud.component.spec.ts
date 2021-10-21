import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorCrudComponent } from './ator-crud.component';

describe('AtorCrudComponent', () => {
  let component: AtorCrudComponent;
  let fixture: ComponentFixture<AtorCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtorCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
