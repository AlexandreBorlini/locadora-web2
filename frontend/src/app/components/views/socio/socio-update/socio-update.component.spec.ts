import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioUpdateComponent } from './socio-update.component';

describe('SocioUpdateComponent', () => {
  let component: SocioUpdateComponent;
  let fixture: ComponentFixture<SocioUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
