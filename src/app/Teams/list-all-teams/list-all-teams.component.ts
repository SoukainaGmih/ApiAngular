import { Component, ViewChild } from '@angular/core';
import { TableService } from '../../Service/table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TeamMember, TeamData } from '../../Models/team-data'
import { MatDialog } from '@angular/material/dialog';
import { InfoTeamIDComponent } from '../info-team-id/info-team-id.component';
@Component({
  selector: 'app-list-all-teams',
  templateUrl: './list-all-teams.component.html',
  styleUrl: '/src/assets/css/styles.css'
})
export class ListAllTeamsComponent {


  openDialog(row: any): void {
    this.dialog.open(InfoTeamIDComponent, {
      width: '80%',  // Adjust width as needed
      height: '80%',  // Adjust height as needed
      data: row
    });
  }

  displayedColumns: string[] = ['student_id','Nom', 'Prenom','id_cin', 'numero_de_telephone','Email_JobIntech','address'];
  dataSource!: MatTableDataSource<TeamMember>;
  teams: TeamData[] = [];
  teamIds: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private service: TableService) {
    this.service.getAllTeams().subscribe((data: TeamData[]) => {
      console.log(data);
      this.teams = data;
      // Extract team IDs using map
      this.teamIds = this.teams.map(team => team.id);
      console.log(this.teamIds);


      // Flatten the members array and assign the data to the data source for the table to render
      const allMembers: TeamMember[] = this.teams.reduce<TeamMember[]>((members, team) => members.concat(team.members), []);
      this.dataSource = new MatTableDataSource(allMembers);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/* import { Component, ViewChild } from '@angular/core';
import { TableService } from '../../Service/table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TeamMember, TeamData } from '../../Models/team-data';
import { MatDialog } from '@angular/material/dialog';
import { InfoTeamIDComponent } from '../info-team-id/info-team-id.component';

@Component({
  selector: 'app-list-all-teams',
  templateUrl: './list-all-teams.component.html',
  styleUrls: ['/src/assets/css/styles.css']  // Corrected from styleUrl to styleUrls
})
export class ListAllTeamsComponent {

  displayedColumns: string[] = ['student_id', 'Nom', 'Prenom', 'id_cin', 'numero_de_telephone', 'Email_JobIntech', 'address'];
  dataSource!: MatTableDataSource<TeamMember>;
  teams: TeamData[] = [];
  teamIds: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private service: TableService) {
    // Fetching all members for initial table display
    this.service.getAllMembers().subscribe((members: TeamMember[]) => {
      console.log(members);

      this.dataSource = new MatTableDataSource(members);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    // Fetching all teams and extracting team IDs
    this.service.getAllTeams().subscribe((data: TeamData[]) => {
      console.log(data);
      this.teams = data;
      this.teamIds = this.teams.map(team => team.id);
      console.log(this.teamIds);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(row: any): void {
    this.dialog.open(InfoTeamIDComponent, {
      width: '80%',  // Adjust width as needed
      height: '80%',  // Adjust height as needed
      data: row
    });
  }

  // Fetch team by ID
  fetchTeamById(teamId: string) {
    this.service.getTeamById(teamId).subscribe((team: TeamData) => {
      console.log(team);
      // Process team data as needed
    });
  }

  // Fetch member by ID
  fetchMemberById(memberId: string) {
    this.service.getMemberById(memberId).subscribe((member: TeamMember) => {
      console.log(member);
      // Process member data as needed
    });
  }
}
 */