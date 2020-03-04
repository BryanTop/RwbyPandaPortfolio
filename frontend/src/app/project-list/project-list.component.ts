import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass']
})
export class ProjectListComponent implements OnInit {

  projectPage = false;

  projects: Project[] = [
    // id: number;
    // name: string;
    // description: string;
    // url: string;
    // dateCreated: Date;
    // src: string;

    {
      id: 1,
      name: 'calculator',
      description: 'Calculator made in javascript',
      url: '/project/1',
      dateCreated: Date(),
      src: ''
    }
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.projectPage);
    this.route.url.subscribe(data => {
      console.log(data);
    })
  }

  GoToProject() {
    this.projectPage = true;
    console.log(this.projectPage);
  }

}
