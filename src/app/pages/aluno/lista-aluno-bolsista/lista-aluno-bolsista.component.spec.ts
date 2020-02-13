import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlunoBolsistaComponent } from './lista-aluno-bolsista.component';

describe('ListaAlunoBolsistaComponent', () => {
  let component: ListaAlunoBolsistaComponent;
  let fixture: ComponentFixture<ListaAlunoBolsistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlunoBolsistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlunoBolsistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
