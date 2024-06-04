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


/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamMember, TeamData } from '../Models/team-data';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<TeamData[]> {
    console.log('Fetching all teams...');
    return this.http.get<TeamData[]>(`${this.baseURL}/Teams`);
  }

  getTeamById(teamId: string): Observable<TeamData> {
    console.log(`Fetching team with ID: ${teamId}`);
    return this.http.get<TeamData>(`${this.baseURL}/Teams/${teamId}`);
  }

  getAllMembers(): Observable<TeamMember[]> {
    console.log('Fetching all members...');
    return this.http.get<TeamMember[]>(`${this.baseURL}/Teams/members`);
  }

  getMemberById(memberId: string): Observable<TeamMember> {
    console.log(`Fetching member with ID: ${memberId}`);
    return this.http.get<TeamMember>(`${this.baseURL}/Teams/members/${memberId}`);
  } 
}
 */