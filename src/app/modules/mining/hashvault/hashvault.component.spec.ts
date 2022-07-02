import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashvaultComponent } from './hashvault.component';

describe('HashvaultComponent', () => {
  let component: HashvaultComponent;
  let fixture: ComponentFixture<HashvaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashvaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashvaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
