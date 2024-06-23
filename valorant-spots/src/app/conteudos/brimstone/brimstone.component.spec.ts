import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrimstoneComponent } from './brimstone.component';

describe('BrimstoneComponent', () => {
  let component: BrimstoneComponent;
  let fixture: ComponentFixture<BrimstoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrimstoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrimstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
