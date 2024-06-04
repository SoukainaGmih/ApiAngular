import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamDotnetComponent } from './Teams/team-dotnet/team-dotnet.component';
import { TeamJavaComponent } from './Teams/team-java/team-java.component';
import { TeamCyberComponent } from './Teams/team-cyber/team-cyber.component';
import { TeamDataComponent } from './Teams/team-data/team-data.component';
import { TeamComponent } from './Teams/team/team.component';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MainComponent } from './Layout/main/main.component';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './Layout/aside/aside.component';
import { HeaderComponent } from './Layout/header/header.component';
import { ListAllTeamsComponent } from './Teams/list-all-teams/list-all-teams.component';
import { InfoTeamIDComponent } from './Teams/info-team-id/info-team-id.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamDotnetComponent,
    TeamJavaComponent,
    TeamCyberComponent,
    TeamDataComponent,
    TeamComponent,
    MainComponent,
    AsideComponent,
    HeaderComponent,
    ListAllTeamsComponent,
    InfoTeamIDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
