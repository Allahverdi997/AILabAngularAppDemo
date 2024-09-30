import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteruiComponent } from './footerui.component';

describe('FooteruiComponent', () => {
  let component: FooteruiComponent;
  let fixture: ComponentFixture<FooteruiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooteruiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooteruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
