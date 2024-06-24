import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyeComponent } from './skye.component';

describe('SkyeComponent', () => {
  let component: SkyeComponent;
  let fixture: ComponentFixture<SkyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkyeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
