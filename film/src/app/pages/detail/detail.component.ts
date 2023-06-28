import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmDetail } from 'src/app/models/film.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detail!: FilmDetail 

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute){}

ngOnInit(): void {
  
  


  this.activatedRoute.data.subscribe(({data}) => {
    this.detail = data;
  })
}

}
