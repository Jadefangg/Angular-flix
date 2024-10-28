import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService { // Inject HttpClient module to the constructor params. This class will provide the methods to make API calls to the server
  // Replace 'your_api_url' with the actual URL of your API
  apiUrl = 'https://movies-myflix-api-84dbf8740f2d.herokuapp.com'; //PLACEHOLDER

  constructor(private http: HttpClient) {}

  // User registration
  public userRegistration(userDetails: any): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/users`, userDetails)
      .pipe(catchError(this.handleError));
  }

  // User login
  // @param userDetails - Object containing user details for login
  // @returns Observable<any> - Observable containing the server response
   
  public userLogin(userDetails: any): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/login`, userDetails)
      .pipe(catchError(this.handleError));
  }

  // Get all movies
  public getAllMovies(): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/movies`)
      .pipe(catchError(this.handleError));
  }

  // Get one movie
  public getOneMovie(title: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/movies/${title}`)
      .pipe(catchError(this.handleError));
  }

  // Get director
  public getDirector(name: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/directors/${name}`)
      .pipe(catchError(this.handleError));
  }

  // Get genre
  public getGenre(name: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/genres/${name}`)
      .pipe(catchError(this.handleError));
  }

  // Get user
  public getUser(username: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/users/${username}`)
      .pipe(catchError(this.handleError));
  }

  // Get favorite movies for a user
  public getFavoriteMovies(username: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/users/${username}/movies`)
      .pipe(catchError(this.handleError));
  }

  // Add a movie to favorite movies
  public addFavoriteMovie(username: string, movieId: string): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/users/${username}/movies/${movieId}`, {})
      .pipe(catchError(this.handleError));
  }

  // Edit user
  public editUser(username: string, userDetails: any): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/users/${username}`, userDetails)
      .pipe(catchError(this.handleError));
  }

  // Delete user
  public deleteUser(username: string): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/users/${username}`)
      .pipe(catchError(this.handleError));
  }

  // Delete a movie from favorite movies
  public deleteFavoriteMovie(username: string, movieId: string): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/users/${username}/movies/${movieId}`)
      .pipe(catchError(this.handleError));
  }

  // Handle API errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(error);
    return throwError(() => new Error(error.message || 'Server error'));
  }
}