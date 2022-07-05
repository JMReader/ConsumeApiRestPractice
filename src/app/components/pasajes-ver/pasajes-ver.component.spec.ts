import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajesVerComponent } from './pasajes-ver.component';

describe('PasajesVerComponent', () => {
  let component: PasajesVerComponent;
  let fixture: ComponentFixture<PasajesVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasajesVerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasajesVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
