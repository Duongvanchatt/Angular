import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEditpostComponent } from './edit-editpost.component';

describe('EditEditpostComponent', () => {
  let component: EditEditpostComponent;
  let fixture: ComponentFixture<EditEditpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEditpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEditpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
