import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOneComponent } from './add-one.component';

describe('AddOneComponent', () => {
  let component: AddOneComponent;
  let fixture: ComponentFixture<AddOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
