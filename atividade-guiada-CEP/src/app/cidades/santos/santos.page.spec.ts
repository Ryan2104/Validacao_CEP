import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SantosPage } from './santos.page';

describe('SantosPage', () => {
  let component: SantosPage;
  let fixture: ComponentFixture<SantosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SantosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
