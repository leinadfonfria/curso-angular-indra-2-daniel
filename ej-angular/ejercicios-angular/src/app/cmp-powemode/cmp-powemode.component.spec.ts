import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpPowemodeComponent } from './cmp-powemode.component';

describe('CmpPowemodeComponent', () => {
  let component: CmpPowemodeComponent;
  let fixture: ComponentFixture<CmpPowemodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpPowemodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpPowemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
