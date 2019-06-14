import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBibliotecaComponent } from './lista-biblioteca.component';

describe('ListaBibliotecaComponent', () => {
  let component: ListaBibliotecaComponent;
  let fixture: ComponentFixture<ListaBibliotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBibliotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
