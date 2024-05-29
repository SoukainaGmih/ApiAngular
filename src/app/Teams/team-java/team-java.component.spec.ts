import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamJavaComponent } from './team-java.component';

describe('TeamJavaComponent', () => {
  let component: TeamJavaComponent;
  let fixture: ComponentFixture<TeamJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamJavaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
