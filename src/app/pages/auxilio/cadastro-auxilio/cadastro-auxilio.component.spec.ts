import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAuxilioComponent } from './cadastro-auxilio.component';

describe('CadastroAuxilioComponent', () => {
  let component: CadastroAuxilioComponent;
  let fixture: ComponentFixture<CadastroAuxilioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAuxilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAuxilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
