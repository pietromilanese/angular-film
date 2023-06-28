import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  data: Film[] = [];
  name: string = "";

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }


  searchByName(name: string) {
    if (this.name === '') {
      alert('please insert a film name!')
    } else {
      this.api.getFilmByName(name).subscribe((response) => {
        this.data = response;
        console.log(this.data)

      })
    }

  }


  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({data}) => {
      this.data = data;
    })

  }
}


