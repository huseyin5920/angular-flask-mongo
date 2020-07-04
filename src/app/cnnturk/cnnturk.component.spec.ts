import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnnturkComponent } from './cnnturk.component';

describe('CnnturkComponent', () => {
  let component: CnnturkComponent;
  let fixture: ComponentFixture<CnnturkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnnturkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnnturkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
