import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class APIServiceService {

  constructor(private http: HttpClient) {
  }


  getRepos(title: string, page: number = 1, sort: string = "") {
    return this.http.get("https://api.github.com/search/repositories?per_page=9&q=" + title + "&page=" + page + "&sort=" + sort);
    // (+) before `id` turns the string into a number
    //.then(heroes => heroes.find(hero => hero.id === +id));
  }

  getUserRepos(username: string) {
    return this.http.get("https://api.github.com/users/" + username + "/repos");
  }

  getUserInfo(username: string) {
    console.log(username);
    return this.http.get("https://api.github.com/search/users?q=" + username);
  }
}
