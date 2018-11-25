import { Component, OnInit } from '@angular/core';
import {ProjectModel} from '../project.model';
@Component({
  selector: 'app-pcard',
  templateUrl: './pcard.component.html',
  styleUrls: ['./pcard.component.css']
})
export class PcardComponent implements OnInit {
  project: ProjectModel;
  tit: string;

  constructor() {
    const id = Math.floor(Math.random() * 11);
    this.project = new ProjectModel(
      {id: id.toString(),
      title: 'Project',
      subtitle: 'Subtitle',
      thumbnailUrl: 'https://picsum.photos/200/100?random',
      projectUrl: 'null'}
    );
  }

  ngOnInit() {
  }

}
