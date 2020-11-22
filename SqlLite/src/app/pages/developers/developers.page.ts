import { Component, OnInit } from '@angular/core';
import { DatabaseService, Marca } from 'src/app/services/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage implements OnInit {

  developers: Marca[] = [];
 
  products: Observable<any[]>;
 
  developer = {};
  product = {};
 
  selectedView = 'devs';
 
  constructor(private db: DatabaseService) { }
 
  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getDevs().subscribe(devs => {
          this.developers = devs;
        })
        this.products = this.db.getProducts();
      }
    });
  }
 
  addDeveloper() {
    
    this.db.addDeveloper(this.developer['name'])
    .then(_ => {
      this.developer = {};
    });
  }
 
  addProduct() {
    this.db.addProduct(this.product['name'], this.product['color'], this.product['costo'],this.product['anio'],  this.product['marcaId'])
    .then(_ => {
      this.product = {};
    });
  }
 

}

