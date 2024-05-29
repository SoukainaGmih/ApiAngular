import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamDotnetComponent } from './Teams/team-dotnet/team-dotnet.component';
import { TeamJavaComponent } from './Teams/team-java/team-java.component';
import { TeamCyberComponent } from './Teams/team-cyber/team-cyber.component';
import { TeamDataComponent } from './Teams/team-data/team-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamDotnetComponent,
    TeamJavaComponent,
    TeamCyberComponent,
    TeamDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
