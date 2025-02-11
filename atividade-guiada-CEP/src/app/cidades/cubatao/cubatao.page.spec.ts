import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CubataoPage } from './cubatao.page';

describe('CubataoPage', () => {
  let component: CubataoPage;
  let fixture: ComponentFixture<CubataoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CubataoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
