import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PraiagrandePage } from './praiagrande.page';

describe('PraiagrandePage', () => {
  let component: PraiagrandePage;
  let fixture: ComponentFixture<PraiagrandePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PraiagrandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
