import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberComponent } from './chamber.component';

describe('ChamberComponent', () => {
  let component: ChamberComponent;
  let fixture: ComponentFixture<ChamberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
