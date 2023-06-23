import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesViagemComponent } from './detalhes-viagem.component';

describe('DetalhesViagemComponent', () => {
  let component: DetalhesViagemComponent;
  let fixture: ComponentFixture<DetalhesViagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesViagemComponent]
    });
    fixture = TestBed.createComponent(DetalhesViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
