import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoruComponent } from './yoru.component';

describe('YoruComponent', () => {
  let component: YoruComponent;
  let fixture: ComponentFixture<YoruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoruComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
