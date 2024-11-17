import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightItemComponent } from '../flight-item/flight-item.component';
import { FlightingService } from '../flighting.service';
import { FlightData } from '../flight-data';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [CommonModule,
    FlightItemComponent],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css'
})
export class FlightsComponent {
  flightsList: FlightData[] = [];
  flightService: FlightingService = inject(FlightingService);

  constructor(){
    this.flightsList = this.flightService.getFlightsAll();
  }
}
