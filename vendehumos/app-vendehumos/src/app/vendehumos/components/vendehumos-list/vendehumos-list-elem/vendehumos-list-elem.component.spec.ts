import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendehumosListElemComponent } from './vendehumos-list-elem.component';

describe('VendehumosListElemComponent', () => {
  let component: VendehumosListElemComponent;
  let fixture: ComponentFixture<VendehumosListElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendehumosListElemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendehumosListElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
