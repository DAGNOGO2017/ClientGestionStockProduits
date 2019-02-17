import { Component, OnInit } from '@angular/core';
import {produitMockService} from './produit.mock.service';
import {produit} from '../shared/produit';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits:any;
  
  constructor(private produitService: produitMockService) { }

  ngOnInit() {
    this.produits = this.produitService.getProduits();
    console.log(this.produitService.getProduits());
    console.log(this.produits);
  }

}
 