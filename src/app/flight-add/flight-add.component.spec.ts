import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAddComponent } from './flight-add.component';

describe('FlightAddComponent', () => {
  let component: FlightAddComponent;
  let fixture: ComponentFixture<FlightAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
