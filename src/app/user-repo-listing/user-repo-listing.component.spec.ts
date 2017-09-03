import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepoListingComponent } from './user-repo-listing.component';

describe('UserRepoListingComponent', () => {
  let component: UserRepoListingComponent;
  let fixture: ComponentFixture<UserRepoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRepoListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
