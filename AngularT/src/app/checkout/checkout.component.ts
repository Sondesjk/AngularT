import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { Voiture } from '../models/Voiture.model';
import { VoitureService } from '../voiture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  stripePromise = loadStripe(environment.stripe);
  voiture: Voiture;
  id:any

  constructor(private http: HttpClient, private voitureService:VoitureService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') 

    // Fetch the voiture data from a service or API using the id
    // For example, using the `VoitureService`:
    this.voitureService.getVoitureById(this.id).subscribe((voiture: Voiture) => {
      this.voiture = voiture;
    });
  }

  async pay(): Promise<void> {
    const payment = {
      name: `${this.voiture.marque}`,
      currency: 'usd',
      amount: this.voiture.prix * 100, // Convert price to cents
      quantity: 1,
      successUrl: 'http://localhost:4200/success',
      cancelUrl: 'http://localhost:4200/cancel',
      voiture: this.voiture
    };

    const stripe = await this.stripePromise;

    this.http.post(`http://localhost:8080/api/payment`, payment)
      .subscribe((data: any) => {
        stripe!.redirectToCheckout({ sessionId: data.id });
      });
  }
}
