import{Injectable} from '@angular/core';
import { produit } from "../shared/produit";

@Injectable()
export class produitMockService{

    private PRODUITS: produit[] = [];

    constructor(){
        let p1:produit = new produit('Livre',50,20);
        let p2:produit = new produit('Cahier',200,5.34);
        let p3:produit = new produit('Stylo',500,2.10);
        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);
    }
public getProduits(): produit[]{
    return this.PRODUITS;
}
}