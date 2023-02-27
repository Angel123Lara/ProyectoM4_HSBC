import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOneSpecComponent } from './add-one-spec.component';

describe('AddOneSpecComponent', () => {
  let component: AddOneSpecComponent;
  let fixture: ComponentFixture<AddOneSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOneSpecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOneSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
