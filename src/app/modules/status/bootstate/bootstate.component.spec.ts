import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstateComponent } from './bootstate.component';

describe('BootstateComponent', () => {
  let component: BootstateComponent;
  let fixture: ComponentFixture<BootstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
