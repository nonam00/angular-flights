import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightingService } from '../flighting.service';
import { FlightData } from '../flight-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-add',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './flight-add.component.html',
  styleUrl: './flight-add.component.css'
})
export class FlightAddComponent {
  router: Router = inject(Router);

  flightService: FlightingService = inject(FlightingService);
  flight: FlightData | undefined;

  flightForm = new FormGroup({
    name: new FormControl(""),
    fromCity: new FormControl(""),
    toCity: new FormControl(""),
    date: new FormControl("")
  });

  async submitFlightForm(){
    this.flight = {
      id: this.flightService.getId(),
      name: this.flightForm.value.name ?? "",
      fromCity: this.flightForm.value.fromCity ?? "",
      toCity: this.flightForm.value.toCity ?? "",
      date: new Date(this.flightForm.value.date!) ?? new Date(),
      planeUrl: "/airplanes/boeing-737-01.jpg",
      isActive: true
    };
    this.flightService.pushFlight(this.flight);
    await this.router.navigate(["/"]);
  }
}
