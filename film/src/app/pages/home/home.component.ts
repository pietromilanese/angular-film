import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  

  data: Film[] = [];
  name: string = "";
  
  constructor(private api: ApiService){}


  searchByName(name: string) {
if(this.name === ''){
  console.log('disabled')
} else {
  this.api.getFilmByName(name).subscribe((response) => {
    this.data =  response;
    })
}

  }


  
  ngOnInit(): void {
   
  this.api.getFilmByName('girls').subscribe((response) => {
      this.data =  response;
      })
      
    
    }
  }


