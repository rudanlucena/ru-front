import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusentesComponent } from './ausentes.component';

describe('AusentesComponent', () => {
  let component: AusentesComponent;
  let fixture: ComponentFixture<AusentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
