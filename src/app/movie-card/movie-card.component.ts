// src/app/movie-card/movie-card.component.ts
import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = []; //Array that stores the movies data.
  constructor(public fetchApiData: FetchApiDataService) { }//This is the constructor that allows the component to use the fetchApiData service.
//the constructor is called before the ngonit hook because it is a lifecycle hook. It is called before the component is initialized.

//If this hook is not used [which you can do also!], then the getMoies function has to be called directly in the constructor.
ngOnInit(): void { //this only runs after the component is initialized. It calls the getMovies method.
  this.getMovies();//the purpose of this hook is to allow the constructor to finish before the component is initialized.
}

getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }
}