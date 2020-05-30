import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailsComponent } from './nails.component';

describe('NailsComponent', () => {
  let component: NailsComponent;
  let fixture: ComponentFixture<NailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
