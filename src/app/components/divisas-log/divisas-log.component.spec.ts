import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisasLogComponent } from './divisas-log.component';

describe('DivisasLogComponent', () => {
  let component: DivisasLogComponent;
  let fixture: ComponentFixture<DivisasLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisasLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisasLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
