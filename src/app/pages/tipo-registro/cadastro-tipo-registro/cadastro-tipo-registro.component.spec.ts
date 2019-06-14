import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTipoRegistroComponent } from './cadastro-tipo-registro.component';

describe('CadastroTipoRegistroComponent', () => {
  let component: CadastroTipoRegistroComponent;
  let fixture: ComponentFixture<CadastroTipoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTipoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTipoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
