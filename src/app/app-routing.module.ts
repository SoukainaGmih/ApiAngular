import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './Teams/team/team.component';
import { TeamDotnetComponent } from './Teams/team-dotnet/team-dotnet.component';
import { ListAllTeamsComponent } from './Teams/list-all-teams/list-all-teams.component';
import { TeamJavaComponent } from './Teams/team-java/team-java.component';
import { TeamCyberComponent } from './Teams/team-cyber/team-cyber.component';
import { TeamDataComponent } from './Teams/team-data/team-data.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'teams', component: TeamComponent },
  { path: 'team-dotnet', component: TeamDotnetComponent },
  { path: 'team-java', component: TeamJavaComponent },
  { path: 'team-cyber', component: TeamCyberComponent },
  { path: 'team-data', component: TeamDataComponent },
  { path: 'team', component: ListAllTeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
