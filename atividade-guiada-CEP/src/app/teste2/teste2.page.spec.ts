import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Teste2Page } from './teste2.page';

describe('Teste2Page', () => {
  let component: Teste2Page;
  let fixture: ComponentFixture<Teste2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Teste2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
