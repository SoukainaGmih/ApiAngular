import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

/*   getData() {
    return this.http.get(this.baseURL);
  } */

  // Get list of all filaries
  getAllTeams(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/posts`);
  }

  // Get details of a specific filarie by ID
  getTeamById(teamsId: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/posts/1`);
  }

  // Get user IDs for a specific filarie
/*   getUserIdsForFilarie(teamsId: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseURL}/teams/${teamsId}/users`);
  } */
}
