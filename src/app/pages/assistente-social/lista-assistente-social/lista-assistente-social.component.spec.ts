import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAssistenteSocialComponent } from './lista-assistente-social.component';

describe('ListaAssistenteSocialComponent', () => {
  let component: ListaAssistenteSocialComponent;
  let fixture: ComponentFixture<ListaAssistenteSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAssistenteSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAssistenteSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
