import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {
  
  results: Observable<any>;

  busqueda : string = '';
  constructor(private albumService: AlbumService) {
    this.results = this.albumService.initAlbum();
  }

  ngOnInit() {
  }
  
  cambio(){
    if(this.busqueda===""){
      this.results = this.albumService.initAlbum();
    }
    else{
      this.results = this.albumService.getAlbums(this.busqueda);
    }
    
  }
}
