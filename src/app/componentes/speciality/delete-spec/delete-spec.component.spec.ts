import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSpecComponent } from './delete-spec.component';

describe('DeleteSpecComponent', () => {
  let component: DeleteSpecComponent;
  let fixture: ComponentFixture<DeleteSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSpecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
