import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazeComponent } from './raze.component';

describe('RazeComponent', () => {
  let component: RazeComponent;
  let fixture: ComponentFixture<RazeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RazeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
