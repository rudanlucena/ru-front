import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEditoraComponent } from './lista-editora.component';

describe('ListaEditoraComponent', () => {
  let component: ListaEditoraComponent;
  let fixture: ComponentFixture<ListaEditoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEditoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEditoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
