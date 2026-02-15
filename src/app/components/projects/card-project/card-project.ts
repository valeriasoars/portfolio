import { Component, Input } from '@angular/core';
import { Tag } from "../../tag/tag";

@Component({
  selector: 'app-card-project',
  imports: [Tag],
  templateUrl: './card-project.html',
  styleUrl: './card-project.css',
})
export class CardProject {
  @Input() image!: string
  @Input() title!: string
  @Input() shortDescription!: string
  @Input() fullDescription!: string
  @Input() technologies!: string[]
  @Input() githubUrl!: string
  @Input() demoUrl!: string

  isOpen = false

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
