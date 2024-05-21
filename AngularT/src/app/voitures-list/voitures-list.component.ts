import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../voiture.service';
import { Voiture } from '../models/Voiture.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
declare var $:any;
@Component({
  selector: 'app-voitures-list',
  templateUrl: './voitures-list.component.html',
  styleUrls: ['./voitures-list.component.css']
})
export class VoituresListComponent implements OnInit {
  voitures: Voiture[] =[];
  qrCodeImages: { [key: string]: SafeUrl } = {};

  constructor(private voitureService :VoitureService,private router:Router,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.voitureService.getAllVoitures().subscribe(
      (listVoiture) => {
        this.voitures = listVoiture;
        this.voitures.forEach((voiture) => {
          this.voitureService.getQRCodeImage(voiture.id).subscribe(
            (qrCodeImage) => {
              const blobUrl = URL.createObjectURL(qrCodeImage);
              this.qrCodeImages[voiture.id] = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
            },  
            (error) => {
              console.error('Error retrieving QR code image:', error);
            }
          );
        });
      },
      (error) => {
        console.error('Error retrieving voitures:', error);
      }
    );
  }
  delete(id:number){
    this.voitureService.deleteVoiture(id).subscribe(()=>{
      console.log("voiture deleted")
    }
    )
  }
  //delete2

  VoitureToDelete!:Voiture

confirmationDelete(voiture: Voiture) {
  $('#deleteModal').modal('show'); // Fix typo here
  this.VoitureToDelete = voiture;
}

closeDelete(){
  $('#deleteModal').modal('hide');
}


  deleteVoiture()
  {
this.voitureService.deleteVoiture(this.VoitureToDelete.id).subscribe(()=>{
  console.log("voiture deleted")
  $('♯deleteModal').modal('hide');
  window.location.reload();
  }
  
)
}
updateVoiture(id:number)
{
this.router.navigate(["/update",id])
}

}
