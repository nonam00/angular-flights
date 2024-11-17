import { Routes } from '@angular/router';
import { FlightsComponent } from "./flights/flights.component";
import { FlightDetailsComponent } from "./flight-details/flight-details.component";
import { FlightAddComponent } from './flight-add/flight-add.component';

export const routes: Routes = [
  {
    path: "",
    component: FlightsComponent,
    title: "Flights List"
  },
  {
    path: "add",
    component: FlightAddComponent,
    title: "Flight add"
  },
  {
    path: "flight/:id",
    component: FlightDetailsComponent,
    title: "Flight Details"
  },
];
