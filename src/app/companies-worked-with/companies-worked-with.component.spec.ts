import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesWorkedWithComponent } from './companies-worked-with.component';

describe('CompaniesWorkedWithComponent', () => {
  let component: CompaniesWorkedWithComponent;
  let fixture: ComponentFixture<CompaniesWorkedWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesWorkedWithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesWorkedWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
