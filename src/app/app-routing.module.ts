import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './Teams/team/team.component';
import { TeamDotnetComponent } from './Teams/team-dotnet/team-dotnet.component';
import { MainComponent } from './Layout/main/main.component';

const routes: Routes = [
   { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team-dotnet', component: TeamDotnetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
