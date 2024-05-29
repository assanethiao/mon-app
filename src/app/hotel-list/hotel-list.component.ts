import { Component, OnInit } from "@angular/core";
import { IHotel } from "./hotel";
import { HotelListService } from "./hotel-list.service";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit{
  
  public title = 'Liste hotels';
  public hotels: IHotel[] = [];

  public showBadge: boolean | undefined;
  
  public errMsg: string | undefined;
  constructor(private hotelListService: HotelListService){

  }

  public toggleIsNewBadge(): boolean{
    return this.showBadge = !this.showBadge;
  }

  private _hotelFilter = "";
  public filteredHotels: IHotel[] | undefined;

  ngOnInit(): any{
    this.hotelListService.getHotels().subscribe({
      next: hotels => {
        this.hotels = hotels,
        this.filteredHotels = this.hotels
      },
      error: err => this.errMsg = err
    })
    
    this.hotelFilter = "";
  }
  
  public get hotelFilter(): string{
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string){
    this._hotelFilter = filter;
    this.filteredHotels = this.hotelFilter? this.filtrerLesHotels(this.hotelFilter): this.hotels;
  }

  private filtrerLesHotels(critere: string): IHotel[]{
    critere = critere.toLocaleLowerCase();
    const res = this.hotels.filter(
      (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(critere) != -1
    );
    return res;
  }

}