import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {APIServiceService} from "../apiservice.service";
import 'rxjs/add/operator/switchMap';
import {PageEvent} from "@angular/material";

@Component({
  selector: 'app-repo-listing',
  templateUrl: './repo-listing.component.html',
  styleUrls: ['./repo-listing.component.css']
})
export class RepoListingComponent implements OnInit {


  repositories: any = '';
  pageEvent: PageEvent;
  title: string;
  isLoading: boolean = true;
  sortSelect: string = "";
  curPage: number = 1;

  constructor(private route: ActivatedRoute, private service: APIServiceService) {

  }


  selectSort(event) {
    this.sortSelect = event.value;
    this.isLoading = true;
    this.updateRepoList();
  }

  changePage(event) {
    this.isLoading = true;
    this.curPage = +event.pageIndex + 1;
    this.updateRepoList();
  }


  updateRepoList(){
    this.service.getRepos(this.title, this.curPage, this.sortSelect).subscribe(
      data => {
        this.isLoading = false;
        this.repositories = data;
      });
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.isLoading = true;
        this.title = params['title'];
        this.service.getRepos(this.title, this.curPage, this.sortSelect).subscribe(data => {
          this.isLoading = false;
          data['items'] = data['items'].splice(0, 9);
          this.repositories = data;
        });
      });
  }

}
