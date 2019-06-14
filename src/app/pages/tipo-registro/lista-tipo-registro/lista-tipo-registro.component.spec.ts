import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoRegistroComponent } from './lista-tipo-registro.component';

describe('ListaTipoRegistroComponent', () => {
  let component: ListaTipoRegistroComponent;
  let fixture: ComponentFixture<ListaTipoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTipoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTipoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
