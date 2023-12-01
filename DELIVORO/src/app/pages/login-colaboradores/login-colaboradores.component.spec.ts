import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginColaboradoresComponent } from './login-colaboradores.component';

describe('LoginColaboradoresComponent', () => {
  let component: LoginColaboradoresComponent;
  let fixture: ComponentFixture<LoginColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginColaboradoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
