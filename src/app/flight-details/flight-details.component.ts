import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FlightingService } from '../flighting.service';
import { FlightData } from '../flight-data';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-details.component.html',
  styleUrl: './flight-details.component.css'
})
export class FlightDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  flightService: FlightingService = inject(FlightingService);
  flight!: FlightData;
  flightForm!: FormGroup<{
    name: FormControl<string | null>
    fromCity: FormControl<string | null>
    toCity: FormControl<string | null>
    date: FormControl<string | null>
  }>

  ngOnInit(){
    let id = parseInt(this.route.snapshot.params["id"], 10);
    this.flight = this.flightService.getFlightById(id)!;
    console.log(this.flight);
    this.flightForm = new FormGroup({
      name: new FormControl(this.flight.name),
      fromCity: new FormControl(this.flight.fromCity),
      toCity: new FormControl(this.flight.toCity),
      date: new FormControl(this.formatDate(this.flight.date))
    });
  }

  formatDate(date: Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  async deleteFlight() {
    this.flightService.deleteFlight(this.flight.id);
    await this.router.navigate(['/']);
  }

  async submitFlightForm() {
    this.flight = {
      id: this.flight.id,
      name: this.flightForm.value.name ?? "",
      fromCity: this.flightForm.value.fromCity ?? "",
      toCity: this.flightForm.value.toCity ?? "",
      date: new Date(this.flightForm.value.date!) ?? new Date(),
      planeUrl: "/airplanes/boeing-737-01.jpg",
      isActive: true
    };
    this.flightService.editFlight(this.flight);
    await this.router.navigate(["/"]);
  }
}
