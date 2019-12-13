import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAuxiliosTemporariosAprovadosComponent } from './listar-auxilios-temporarios-aprovados.component';

describe('ListarAuxiliosTemporariosAprovadosComponent', () => {
  let component: ListarAuxiliosTemporariosAprovadosComponent;
  let fixture: ComponentFixture<ListarAuxiliosTemporariosAprovadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAuxiliosTemporariosAprovadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAuxiliosTemporariosAprovadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
