import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../voiture.service';
import { Voiture } from '../models/Voiture.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  voitures: Voiture[] = [];
  marque: string = "";
  
  constructor(private voitureService: VoitureService, private router: Router) {}

  ngOnInit(): void {
    this.getAllVoitures(); // Appeler la méthode pour obtenir toutes les voitures au chargement du composant
  }

  // Méthode pour obtenir toutes les voitures
  getAllVoitures() {
    this.voitureService.getAllVoitures().subscribe(
      (listVoiture) => {
        this.voitures = listVoiture;
      },
      (erreur) => {
        console.error("Error fetching cars:", erreur);
      }
    );
  }

  // Méthode pour supprimer une voiture
  delete(id: number) {
    this.voitureService.deleteVoiture(id).subscribe(() => {
      console.log("Voiture deleted");
      // Après la suppression, obtenir à nouveau la liste de voitures mise à jour
      this.getAllVoitures();
    });
  }

 // Méthode pour filtrer les voitures par marque

    
  }




// Méthode pour exécuter la recherche
  
