import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

/**
 * Service to interact with the API for user-related operations.
 * 
 * @remarks
 * This service provides methods to make API calls to the server for user details, favorite movies, and user updates.
 */
@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
  /**
   * Base URL for the API.
   * Replace 'your_api_url' with the actual URL of your API.
   */
  apiUrl = 'https://movies-myflix-api-84dbf8740f2d.herokuapp.com'; //PLACEHOLDER

  /**
   * Injects HttpClient module to the constructor params.
   * 
   * @param http - The HttpClient instance to make HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Get user details by username.
   * 
   * @param username - The username of the user.
   * @returns Observable<any> - Observable containing the user details.
   */
  public getUser(username: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/users/${username}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Get favorite movies for a user.
   * 
   * @param username - The username of the user.
   * @returns Observable<any> - Observable containing the user's favorite movies.
   */
  public getFavoriteMovies(username: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/users/${username}/movies`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Add a movie to favorite movies.
   * 
   * @param username - The username of the user.
   * @param movieId - The ID of the movie to add to favorites.
   * @returns Observable<any> - Observable containing the server response.
   */
  public addFavoriteMovie(username: string, movieId: string): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/users/${username}/movies/${movieId}`, {})
      .pipe(catchError(this.handleError));
  }

  /**
   * Edit user details.
   * 
   * @param username - The username of the user.
   * @param userDetails - Object containing the user details to update.
   * @returns Observable<any> - Observable containing the server response.
   */
  public editUser(username: string, userDetails: any): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/users/${username}`, userDetails)
      .pipe(catchError(this.handleError));
  }

  /**
   * Handles HTTP errors.
   * 
   * @param error - The HttpErrorResponse object containing error details.
   * @returns Observable<never> - Observable that throws an error.
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error); // Log error to the console
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}