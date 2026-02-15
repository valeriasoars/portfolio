import { Component } from '@angular/core';
import { CardSkills } from "./card-skills/card-skills";
import { Title } from "../title/title";

@Component({
  selector: 'app-skills',
  imports: [CardSkills, Title],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

}
