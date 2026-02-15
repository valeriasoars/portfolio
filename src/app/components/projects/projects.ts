import { Component } from '@angular/core';
import { CardProject } from "./card-project/card-project";
import { Title } from "../title/title";

@Component({
  selector: 'app-projects',
  imports: [CardProject, Title],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

projects = [
    {
      image: "contifica-projeto.png",
      title: "Contifica",
      shortDescription: "Sistema inteligente de extração e gestão de contas a pagar utilizando IA e OCR.",
      fullDescription: "O Contifica é uma plataforma web desenvolvida para automatizar o processo de extração, organização e gestão de contas a pagar. Utilizando Inteligência Artificial e tecnologia OCR (Reconhecimento Óptico de Caracteres), o sistema interpreta automaticamente boletos, notas fiscais e documentos financeiros, reduzindo erros manuais e aumentando a produtividade do setor financeiro. A aplicação permite centralizar informações, acompanhar vencimentos, organizar pagamentos e gerar maior controle financeiro para empresas. A arquitetura foi construída com Angular e Tailwind no frontend, Node.js e Python no backend para processamento de IA, além de Docker para conteinerização e MySQL para persistência de dados, garantindo escalabilidade, segurança e eficiência.",
      technologies: ['Angular', 'Tailwind CSS' ,'NodeJS', 'Python' ,'Docker', 'MySQL'], 
      githubUrl: "https://contifica.app/",
      demoUrl: "https://contifica.app/"
    },
    {
      image: "timer-projeto.png",
      title: "Timer",
      shortDescription: "Aplicação de produtividade baseada na técnica Pomodoro para organização do tempo de estudo.",
      fullDescription: "O Timer é uma aplicação web desenvolvida para auxiliar na gestão eficiente do tempo utilizando a técnica Pomodoro. A ferramenta permite dividir o tempo de estudo em ciclos focados de concentração intercalados com pausas estratégicas, aumentando a produtividade e reduzindo a procrastinação. A aplicação oferece contagem regressiva em tempo real, controle de ciclos, interface intuitiva e design responsivo. Desenvolvido com Angular e estilizado com Tailwind CSS",
      technologies: ['Angular', 'Tailwind CSS'], 
      githubUrl: "https://github.com/valeriasoars/timer_angular.git",
      demoUrl: "https://demo-projeto.com"
    },
    {
      image: "projeto.jpeg",
      title: "Snippet",
      shortDescription: "Plataforma para organização e gerenciamento inteligente de snippets de código.",
      fullDescription: "O Snippet é uma aplicação web desenvolvida para auxiliar desenvolvedores na organização, armazenamento e reutilização de trechos de código. A plataforma permite cadastrar, editar, excluir e categorizar snippets por tecnologia, além de realizar buscas rápidas para otimizar o fluxo de trabalho. O objetivo é aumentar a produtividade e centralizar soluções reutilizáveis em um único ambiente.",
      technologies: ['Angular', 'NodeJs', 'MongoDB'], 
      githubUrl: "https://github.com/seuusuario/projeto",
      demoUrl: "https://demo-projeto.com"
    },
    // {
    //   image: "projeto.jpeg",
    //   title: "Emprestimo de Livros",
    //   shortDescription: "Plataforma para compra e gerenciamento de ingressos.",
    //   fullDescription: "Sistema completo desenvolvido com Angular e Spring Boot, permitindo cadastro de eventos, compra de ingressos e gerenciamento de usuários.",
    //   technologies: ['ASP.NET'], 
    //   githubUrl: "https://github.com/seuusuario/projeto",
    //   demoUrl: "https://demo-projeto.com"
    // },
    // {
    //   image: "projeto.jpeg",
    //   title: "Burguer Mania",
    //   shortDescription: "Plataforma para compra e gerenciamento de ingressos.",
    //   fullDescription: "Sistema completo desenvolvido com Angular e Spring Boot, permitindo cadastro de eventos, compra de ingressos e gerenciamento de usuários.",
    //   technologies: ['ASP.NET'], 
    //   githubUrl: "https://github.com/seuusuario/projeto",
    //   demoUrl: "https://demo-projeto.com"
    // },
    {
      image: "workshop-projeto.png",
      title: "Workshop Asp.NET Core",
      shortDescription: "Este projeto foi baseado no projeto desenvolvido pelo professor Nélio Alves no curso de C#",
      fullDescription: "Este projeto foi baseado no projeto desenvolvido pelo professor Nélio Alves no curso de C#. Originalmente desenvolvido em .NET 2.1, foi atualizado por mim para .NET 8.0, garantindo compatibilidade com as tecnologias mais recentes e proporcionando melhorias em desempenho e segurança.",
      technologies: ['ASP.NET'], 
      githubUrl: "https://github.com/valeriasoars/workshop-asp-net-core-mvc",
      demoUrl: "https://demo-projeto.com"
    }
  ]
}
