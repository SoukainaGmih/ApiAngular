import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCyberComponent } from './team-cyber.component';

describe('TeamCyberComponent', () => {
  let component: TeamCyberComponent;
  let fixture: ComponentFixture<TeamCyberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamCyberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamCyberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
