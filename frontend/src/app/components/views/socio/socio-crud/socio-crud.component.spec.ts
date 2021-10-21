import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioCrudComponent } from './socio-crud.component';

describe('SocioCrudComponent', () => {
  let component: SocioCrudComponent;
  let fixture: ComponentFixture<SocioCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
