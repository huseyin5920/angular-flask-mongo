import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtvComponent } from './ntv.component';

describe('NtvComponent', () => {
  let component: NtvComponent;
  let fixture: ComponentFixture<NtvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
