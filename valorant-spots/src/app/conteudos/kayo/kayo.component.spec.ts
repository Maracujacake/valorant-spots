import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KayoComponent } from './kayo.component';

describe('KayoComponent', () => {
  let component: KayoComponent;
  let fixture: ComponentFixture<KayoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KayoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KayoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
