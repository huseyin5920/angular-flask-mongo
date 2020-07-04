import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirgunComponent } from './birgun.component';

describe('BirgunComponent', () => {
  let component: BirgunComponent;
  let fixture: ComponentFixture<BirgunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirgunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirgunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
