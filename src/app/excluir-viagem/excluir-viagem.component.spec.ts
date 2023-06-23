import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirViagemComponent } from './excluir-viagem.component';

describe('ExcluirViagemComponent', () => {
  let component: ExcluirViagemComponent;
  let fixture: ComponentFixture<ExcluirViagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirViagemComponent]
    });
    fixture = TestBed.createComponent(ExcluirViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
