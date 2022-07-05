import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajesFormComponent } from './pasajes-form.component';

describe('PasajesFormComponent', () => {
  let component: PasajesFormComponent;
  let fixture: ComponentFixture<PasajesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasajesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasajesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
