import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcerdadePage } from './acerdade.page';

describe('AcerdadePage', () => {
  let component: AcerdadePage;
  let fixture: ComponentFixture<AcerdadePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcerdadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
