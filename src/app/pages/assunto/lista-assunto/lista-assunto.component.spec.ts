import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAssuntoComponent } from './lista-assunto.component';

describe('ListaAssuntoComponent', () => {
  let component: ListaAssuntoComponent;
  let fixture: ComponentFixture<ListaAssuntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAssuntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAssuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
