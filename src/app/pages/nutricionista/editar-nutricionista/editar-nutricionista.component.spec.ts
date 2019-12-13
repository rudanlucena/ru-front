import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNutricionistaComponent } from './editar-nutricionista.component';

describe('EditarNutricionistaComponent', () => {
  let component: EditarNutricionistaComponent;
  let fixture: ComponentFixture<EditarNutricionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNutricionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
