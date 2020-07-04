import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynetComponent } from './mynet.component';

describe('MynetComponent', () => {
  let component: MynetComponent;
  let fixture: ComponentFixture<MynetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
