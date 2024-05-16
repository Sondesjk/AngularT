import { Component } from '@angular/core';
import { Commande } from '../models/Commande.model';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-commande1',
  templateUrl: './commande1.component.html',
  styleUrls: ['./commande1.component.css']
})
export class Commande1Component {
  commande: Commande = {
    id: -1,
    nom: "",
    prenom: "",
    email: "",
    cin: "",
    telephone: ""
  };
  constructor(private commandeService: CommandeService) { }

  addCommande(){
    this.commandeService.addCommande(this.commande).subscribe(newCommande=>
      {
      console.log("Commande added")
      this.resetForm()
    },error=>{
      console.error("Erreur",error)
    })
  }
  resetForm() {
    this.commande = {
      id: -1,
      nom: "",
      prenom: "",
      email: "",
      cin: "",
      telephone: ""
    };
  }

}
