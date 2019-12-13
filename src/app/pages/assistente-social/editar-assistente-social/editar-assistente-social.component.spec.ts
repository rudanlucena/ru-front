import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAssistenteSocialComponent } from './editar-assistente-social.component';

describe('EditarAssistenteSocialComponent', () => {
  let component: EditarAssistenteSocialComponent;
  let fixture: ComponentFixture<EditarAssistenteSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAssistenteSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAssistenteSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
