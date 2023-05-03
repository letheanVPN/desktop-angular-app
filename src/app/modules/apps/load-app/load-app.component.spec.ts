import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAppComponent } from './load-app.component';

describe('LoadAppComponent', () => {
  let component: LoadAppComponent;
  let fixture: ComponentFixture<LoadAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
