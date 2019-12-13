import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAssistenteSocialComponent } from './cadastro-assistente-social.component';

describe('CadastroAssistenteSocialComponent', () => {
  let component: CadastroAssistenteSocialComponent;
  let fixture: ComponentFixture<CadastroAssistenteSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAssistenteSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAssistenteSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
