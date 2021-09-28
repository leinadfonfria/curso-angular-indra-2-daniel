import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCliComponent } from './componente-cli.component';

describe('ComponenteCliComponent', () => {
  let component: ComponenteCliComponent;
  let fixture: ComponentFixture<ComponenteCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
