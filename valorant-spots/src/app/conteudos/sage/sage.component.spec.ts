import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageComponent } from './sage.component';

describe('SageComponent', () => {
  let component: SageComponent;
  let fixture: ComponentFixture<SageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
