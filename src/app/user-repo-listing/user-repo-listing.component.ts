import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {APIServiceService} from "../apiservice.service";

@Component({
  selector: 'app-user-repo-listing',
  templateUrl: './user-repo-listing.component.html',
  styleUrls: ['./user-repo-listing.component.css']
})
export class UserRepoListingComponent implements OnInit {

  username: string;
  user_info: any = '';
  user_repos: any = '';
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private service: APIServiceService) {
    // console.log("UserListing");
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.username = params['username'];

        this.service.getUserInfo(this.username).subscribe(data => {
          // console.debug(data);
          this.isLoading = false;
          data['items'] = data['items'][0];//.splice(0, 1);
          this.user_info = data;
        });

        this.service.getUserRepos(this.username).subscribe(data => {
          // console.debug(data);
          //data['items'] = data['items'];//.splice(0, 1);
          this.user_repos = data;
        });


      });
  }

}
