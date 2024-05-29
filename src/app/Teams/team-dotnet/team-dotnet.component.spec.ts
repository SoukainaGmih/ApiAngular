import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDotnetComponent } from './team-dotnet.component';

describe('TeamDotnetComponent', () => {
  let component: TeamDotnetComponent;
  let fixture: ComponentFixture<TeamDotnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamDotnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamDotnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
