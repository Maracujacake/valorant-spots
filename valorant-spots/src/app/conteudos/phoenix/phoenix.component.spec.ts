import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoenixComponent } from './phoenix.component';

describe('PhoenixComponent', () => {
  let component: PhoenixComponent;
  let fixture: ComponentFixture<PhoenixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoenixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
