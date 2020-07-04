import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirsaatComponent } from './birsaat.component';

describe('BirsaatComponent', () => {
  let component: BirsaatComponent;
  let fixture: ComponentFixture<BirsaatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirsaatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirsaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
