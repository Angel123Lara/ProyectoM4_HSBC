import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHospComponent } from './update-hosp.component';

describe('UpdateHospComponent', () => {
  let component: UpdateHospComponent;
  let fixture: ComponentFixture<UpdateHospComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHospComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
