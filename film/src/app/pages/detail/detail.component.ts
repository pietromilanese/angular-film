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

  detail: FilmDetail | undefined

  constructor(private api: ApiService, private route: ActivatedRoute){}

ngOnInit(): void {
  const id = this.route.snapshot.params['id']
  


  this.api.getFilmById(id).subscribe((response) => {
this.detail = response

console.log(this.detail)
  })
}

}
