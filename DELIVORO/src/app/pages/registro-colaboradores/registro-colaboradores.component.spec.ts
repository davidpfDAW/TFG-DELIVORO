import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroColaboradoresComponent } from './registro-colaboradores.component';

describe('RegistroColaboradoresComponent', () => {
  let component: RegistroColaboradoresComponent;
  let fixture: ComponentFixture<RegistroColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroColaboradoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
