import { Component, ViewChild } from '@angular/core';
import { TableService } from '../../Service/table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData {
  id: string;
  userId: string;
  title: any;
  body: any;
}


@Component({
  selector: 'app-team-dotnet',
  templateUrl: './team-dotnet.component.html',
  styleUrl: '/src/assets/css/styles.css'
})
export class TeamDotnetComponent {

  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
  dataSource!: MatTableDataSource<UserData>;
  posts: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: TableService) {
    this.service.getData().subscribe((data) => {
      console.log(data);
      this.posts = data;
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.posts);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // console.log(this.posts);
    // console.log('users', users);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

