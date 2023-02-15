import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryDoctorComponent } from './directory-doctor.component';

describe('DirectoryDoctorComponent', () => {
  let component: DirectoryDoctorComponent;
  let fixture: ComponentFixture<DirectoryDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoryDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
