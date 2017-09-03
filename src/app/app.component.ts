import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "TechScan";
  technologies = ["Javascript", "Java", "Python", "PHP", "Ruby", "C", "C++", "Go", "C#", "HTML"];
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

}
