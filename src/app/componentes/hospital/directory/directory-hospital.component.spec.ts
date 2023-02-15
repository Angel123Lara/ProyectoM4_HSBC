import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryHospitalComponent } from './directory-hospital.component';

describe('DirectoryHospitalComponent', () => {
  let component: DirectoryHospitalComponent;
  let fixture: ComponentFixture<DirectoryHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoryHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
