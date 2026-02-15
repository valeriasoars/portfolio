import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { AboutMe } from "../../components/about-me/about-me";
import { Projects } from "../../components/projects/projects";
import { Skills } from "../../components/skills/skills";
import { Contact } from "../../components/contact/contact";
import { Footer } from "../../components/footer/footer";
import { SocialMedia } from "../../components/social-media/social-media";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, AboutMe, Projects, Skills, Contact, Footer, SocialMedia, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

