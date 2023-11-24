import { Component, Input, OnInit } from "@angular/core";
import { Project } from "../../../../../shared/assets/model/project";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() experience: Project = {
    title: '',
    client: "",
    role: "",
    description: '',
    imageUrl: "",
    date: new Date()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
