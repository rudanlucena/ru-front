import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAuxiliosTemporariosComponent } from './listar-auxilios-temporarios.component';

describe('ListarAuxiliosTemporariosComponent', () => {
  let component: ListarAuxiliosTemporariosComponent;
  let fixture: ComponentFixture<ListarAuxiliosTemporariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAuxiliosTemporariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAuxiliosTemporariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
