import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTeamsComponent } from './list-all-teams.component';

describe('ListAllTeamsComponent', () => {
  let component: ListAllTeamsComponent;
  let fixture: ComponentFixture<ListAllTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAllTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAllTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
