import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInstituicaoEnsinoComponent } from './lista-instituicao-ensino.component';

describe('ListaInstituicaoEnsinoComponent', () => {
  let component: ListaInstituicaoEnsinoComponent;
  let fixture: ComponentFixture<ListaInstituicaoEnsinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInstituicaoEnsinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInstituicaoEnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
