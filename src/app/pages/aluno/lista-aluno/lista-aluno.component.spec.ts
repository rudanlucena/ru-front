import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlunoComponent } from './lista-aluno.component';

describe('ListaAlunoComponent', () => {
  let component: ListaAlunoComponent;
  let fixture: ComponentFixture<ListaAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
