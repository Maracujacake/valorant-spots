import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SovaComponent } from './sova.component';

describe('SovaComponent', () => {
  let component: SovaComponent;
  let fixture: ComponentFixture<SovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SovaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
