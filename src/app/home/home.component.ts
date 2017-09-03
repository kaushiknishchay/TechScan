import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results: Object;
  techIcons = {
    "Javascript": "devicon-javascript-plain colored",
    "Java":"devicon-java-plain-wordmark colored",
    "Python":"devicon-python-plain-wordmark colored",
    "PHP":"devicon-php-plain colored",
    "Ruby":"devicon-ruby-plain-wordmark colored",
    "C":"devicon-c-plain colored",
    "C++":"devicon-cplusplus-plain colored",
    "Go":"devicon-go-plain colored",
    "C#":"devicon-csharp-plain colored",
    "HTML":"devicon-html5-plain-wordmark colored"
  };
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    this.http.get<ItemsResponse>('https://api.github.com/search/repositories?q=javascript').subscribe(data => {
      // data is now an instance of type ItemsResponse, so you can do this:
      this.results = data;
      console.log(data['total_count']);
    });
  }

  title = 'app';
  technologies = ["Javascript", "Java", "Python", "PHP", "Ruby", "C", "C++", "Go", "C#", "HTML"];

}
interface ItemsResponse {
  results: Object;
}
