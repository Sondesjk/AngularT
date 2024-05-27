import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../voiture.service';
import { Voiture } from '../models/Voiture.model';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-list-voitures-front',
  templateUrl: './list-voitures-front.component.html',
  styleUrls: ['./list-voitures-front.component.css']
})
export class ListVoituresFrontComponent implements OnInit{
  voitures:any[]
  searchText: any = "";
  constructor(private voitureService:VoitureService, private router: Router){}
  ngOnInit(): void {
    this.showAllVoitures()
  }

  showAllVoitures(){
    this.voitureService.getAllVoitures().subscribe((data:any)=>{
      this.voitures=data;
      console.log(this.voitures)
    })
  }

  goToCheckout(voiture: Voiture): void {
    this.router.navigate(['/checkout', voiture.id]);
  }
}
