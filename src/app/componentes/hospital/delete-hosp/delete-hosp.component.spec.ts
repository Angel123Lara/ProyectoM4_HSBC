import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHospComponent } from './delete-hosp.component';

describe('DeleteHospComponent', () => {
  let component: DeleteHospComponent;
  let fixture: ComponentFixture<DeleteHospComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHospComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
