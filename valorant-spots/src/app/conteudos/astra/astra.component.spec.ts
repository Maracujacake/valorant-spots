import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstraComponent } from './astra.component';

describe('AstraComponent', () => {
  let component: AstraComponent;
  let fixture: ComponentFixture<AstraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
