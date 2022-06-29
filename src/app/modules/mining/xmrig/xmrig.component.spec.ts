import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmrigComponent } from './xmrig.component';

describe('XmrigComponent', () => {
  let component: XmrigComponent;
  let fixture: ComponentFixture<XmrigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmrigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XmrigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
