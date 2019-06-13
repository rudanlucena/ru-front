import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBibliotecaComponent } from './cadastro-biblioteca.component';

describe('CadastroBibliotecaComponent', () => {
  let component: CadastroBibliotecaComponent;
  let fixture: ComponentFixture<CadastroBibliotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroBibliotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
