import { Component, ViewChild } from '@angular/core';
import { TableService } from '../../Service/table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TeamMember, TeamData } from '../../Models/team-data'

@Component({
  selector: 'app-list-all-teams',
  templateUrl: './list-all-teams.component.html',
  styleUrl: '/src/assets/css/styles.css'
})
export class ListAllTeamsComponent {
  displayedColumns: string[] = ['Nom', 'Prenom', 'numero_de_telephone', 'Email_Personnel', 'Email_JobIntech'];
  dataSource!: MatTableDataSource<TeamMember>;
  teams: TeamData[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: TableService) {
    this.service.getAllTeams().subscribe((data: TeamData[]) => {
      console.log(data);
      this.teams = data;
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
