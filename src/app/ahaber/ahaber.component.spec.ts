import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhaberComponent } from './ahaber.component';

describe('AhaberComponent', () => {
  let component: AhaberComponent;
  let fixture: ComponentFixture<AhaberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhaberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhaberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
