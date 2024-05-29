import { Component } from "@angular/core";
import { HotelListComponent } from "./hotel-list/hotel-list.component";
import { IHotel } from "./hotel-list/hotel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})



export class AppComponent {
  title: string = 'Gestionnaire hotels';

}



