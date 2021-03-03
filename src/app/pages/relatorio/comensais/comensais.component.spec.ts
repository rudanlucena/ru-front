import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComensaisComponent } from './comensais.component';

describe('ComensaisComponent', () => {
  let component: ComensaisComponent;
  let fixture: ComponentFixture<ComensaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComensaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComensaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
