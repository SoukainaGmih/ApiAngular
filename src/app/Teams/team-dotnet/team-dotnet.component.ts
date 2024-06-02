import { Component, ViewChild } from '@angular/core';
import { TableService } from '../../Service/table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TeamMember } from '../../Models/team-data'

@Component({
  selector: 'app-team-dotnet',
  templateUrl: './team-dotnet.component.html',
  styleUrl: '/src/assets/css/styles.css'
})
export class TeamDotnetComponent {

  displayedColumns: string[] = ['Nom', 'Prenom', 'numero_de_telephone', 'Email_Personnel', 'Email_JobIntech'];
  dataSource!: MatTableDataSource<TeamMember>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: TableService) {
    this.getTeamById('TeamDotnet'); 
  }

  getTeamById(teamId: string) { 
    this.service.getTeamById(teamId).subscribe((team: any) => {
      console.log(team);
      // Assuming team.members contains the members for the team
      this.dataSource = new MatTableDataSource(team.members);
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
