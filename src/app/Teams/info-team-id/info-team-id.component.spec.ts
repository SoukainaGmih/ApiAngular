import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTeamIDComponent } from './info-team-id.component';

describe('InfoTeamIDComponent', () => {
  let component: InfoTeamIDComponent;
  let fixture: ComponentFixture<InfoTeamIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoTeamIDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoTeamIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
