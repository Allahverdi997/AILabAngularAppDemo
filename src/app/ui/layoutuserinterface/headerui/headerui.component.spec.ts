import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderuiComponent } from './headerui.component';

describe('HeaderuiComponent', () => {
  let component: HeaderuiComponent;
  let fixture: ComponentFixture<HeaderuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderuiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
