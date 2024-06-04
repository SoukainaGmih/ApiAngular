import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-team-id',
  templateUrl: './info-team-id.component.html',
  styleUrl: './info-team-id.component.css'
})
export class InfoTeamIDComponent {
  constructor(
    public dialogRef: MatDialogRef<InfoTeamIDComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  

}
