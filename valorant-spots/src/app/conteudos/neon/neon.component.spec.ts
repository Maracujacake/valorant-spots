import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonComponent } from './neon.component';

describe('NeonComponent', () => {
  let component: NeonComponent;
  let fixture: ComponentFixture<NeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
