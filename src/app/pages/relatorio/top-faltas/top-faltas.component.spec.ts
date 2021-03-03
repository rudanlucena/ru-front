import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFaltasComponent } from './top-faltas.component';

describe('TopFaltasComponent', () => {
  let component: TopFaltasComponent;
  let fixture: ComponentFixture<TopFaltasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFaltasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
