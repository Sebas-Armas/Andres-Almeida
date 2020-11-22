import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
export interface Marca {
  id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  developers = new BehaviorSubject([]);
  products = new BehaviorSubject([]);
 
  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'developers.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }
 
  seedDatabase() {
    this.http.get('assets/seed.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadDevelopers();
          this.loadProducts();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }
 
  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getDevs(): Observable<Marca[]> {
    return this.developers.asObservable();
  }
 
  getProducts(): Observable<any[]> {
    return this.products.asObservable();
  }


  loadDevelopers(){
    return this.database.executeSql('SELECT * FROM marca', []).then(data => {
      let developers: Marca[] = [];
 
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          developers.push({ 
            id: data.rows.item(i).id,
            name: data.rows.item(i).name
           });
        }
      }
      this.developers.next(developers);
    });
  }

  addDeveloper(name) {
    let data = [name];
    return this.database.executeSql('INSERT INTO marca (name) VALUES (?)', data).then(data => {
      this.loadDevelopers();
    });
  }
 
  getDeveloper(id): Promise<Marca> {
    return this.database.executeSql('SELECT * FROM marca WHERE id = ?', [id]).then(data => {
  
      return {
        id: data.rows.item(0).id,
        name: data.rows.item(0).name
      }
    });
  }
 
  deleteDeveloper(id) {
    return this.database.executeSql('DELETE FROM marca WHERE id = ?', [id]).then(_ => {
      this.loadDevelopers();
      this.loadProducts();
    });
  }
 
  updateDeveloper(dev: Marca) {
    let data = [dev.name];
    return this.database.executeSql(`UPDATE marca SET name = ? WHERE id = ${dev.id}`, data).then(data => {
      this.loadDevelopers();
    })
  }
 
  loadProducts() {
    let query = 'SELECT modelo.name, modelo.costo, modelo.color, modelo.anio, marca.name AS marca FROM modelo JOIN marca ON marca.id = modelo.marcaId';
    return this.database.executeSql(query, []).then(data => {
      let products = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          products.push({ 
            name: data.rows.item(i).name,
            costo: data.rows.item(i).costo,
            color: data.rows.item(i).color,
            anio: data.rows.item(i).anio,
            marca: data.rows.item(i).marca,
           });
        }
      }
      this.products.next(products);
    });
  }
 
  addProduct(name, color, costo, anio, marcaId) {
    let data = [name, color, costo, anio, marcaId];
    return this.database.executeSql('INSERT INTO modelo (name, color, costo, anio, marcaId) VALUES (?, ?, ?, ?, ?)', data).then(data => {
      this.loadProducts();
    });
  }
}

