import { Component, Input } from '@angular/core';
import { Tag } from "../../tag/tag";

@Component({
  selector: 'app-card-skills',
  imports: [Tag],
  templateUrl: './card-skills.html',
  styleUrl: './card-skills.css',
})
export class CardSkills {
  @Input() title!: string
  @Input() skills!: string[]
}
