import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SabahComponent } from './sabah.component';

describe('SabahComponent', () => {
  let component: SabahComponent;
  let fixture: ComponentFixture<SabahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SabahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
