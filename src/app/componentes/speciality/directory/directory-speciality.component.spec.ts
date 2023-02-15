import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorySpecialityComponent } from './directory-speciality.component';

describe('DirectorySpecialityComponent', () => {
  let component: DirectorySpecialityComponent;
  let fixture: ComponentFixture<DirectorySpecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorySpecialityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorySpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
