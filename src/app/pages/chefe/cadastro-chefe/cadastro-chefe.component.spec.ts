import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroChefeComponent } from './cadastro-chefe.component';

describe('CadastroChefeComponent', () => {
  let component: CadastroChefeComponent;
  let fixture: ComponentFixture<CadastroChefeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroChefeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroChefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
