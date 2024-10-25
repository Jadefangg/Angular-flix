import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogingFormComponent } from './user-login-form.component';

describe('UserLogingFormComponent', () => {
  let component: UserLogingFormComponent;
  let fixture: ComponentFixture<UserLogingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLogingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLogingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
