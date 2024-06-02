import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllTeams() {
    return this.http.get<any[]>(`${this.baseURL}/Teams`);
  }

  getTeamById(teamId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/Teams/${teamId}`);
  }
}
