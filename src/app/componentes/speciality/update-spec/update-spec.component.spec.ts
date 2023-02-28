import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecComponent } from './update-spec.component';

describe('UpdateSpecComponent', () => {
  let component: UpdateSpecComponent;
  let fixture: ComponentFixture<UpdateSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSpecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
