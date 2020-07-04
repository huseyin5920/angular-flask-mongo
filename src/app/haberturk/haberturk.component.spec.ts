import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaberturkComponent } from './haberturk.component';

describe('HaberturkComponent', () => {
  let component: HaberturkComponent;
  let fixture: ComponentFixture<HaberturkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaberturkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaberturkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
