import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioReadComponent } from './socio-read.component';

describe('SocioReadComponent', () => {
  let component: SocioReadComponent;
  let fixture: ComponentFixture<SocioReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
