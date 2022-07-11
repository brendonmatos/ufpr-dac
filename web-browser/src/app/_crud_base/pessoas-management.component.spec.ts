import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasManagementComponent } from './pessoas-management.component';

describe('PessoasManagementComponent', () => {
  let component: PessoasManagementComponent;
  let fixture: ComponentFixture<PessoasManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
