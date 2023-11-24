import { AfterViewInit, Component } from "@angular/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "../../../../shared/assets/model/project";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements AfterViewInit {
  constructor() {
  }

  listOfExperiences: Project[] = [{
    title: "Velco",
    role: "Ingénieur full stack",
    description: "Participation à un projet en tant que développeur sur une application web pour le compte de Velco. Je participe donc à l’évaluation de la faisabilité de faire communiquer un produit customisé au travers du web sans passer par un driver. À la suite de ça, j'ai fais une librairie JavaScript compatible avec Angular pour permettre une intégration simple dans les applications déjà existante. Création d'une application web (VDS) permettant aux bike shop d'avoir une interface destinée à la réparation de vélo. Et pour finir, création d'un Back-end en kotlin servant à décoder des trames hexadécimal (Spring boot).",
    imageUrl: "/shared/assets/images/velco.png",
    date: new Date("01/09/2022")
  }, {
    title: "OpenClassrooms",
    role: "Mentor OpenClassrooms",
    description: "Participation à l'apprentissage du développement Full Stack en JavaScript (nodeJs et ReactJs) à des étudiants Openclassrooms en reconversion professionnelle.",
    imageUrl: "/shared/assets/images/Logo_OpenClassrooms.png",
    date: new Date("01/10/2021")
  }, {
    title: "Mobiapps",
    role: "Ingénieur Full Stack",
    description: "Participation à un projet en tant que développeur sur une application web pour le compte de Velco. Je participe donc à l’évaluation de la faisabilité de faire communiquer un produit customisé au travers du web sans passer par un driver. À la suite de ça, j'ai fais une librairie JavaScript compatible avec Angular pour permettre une intégration simple dans les applications déjà existante. Création d'une application web (VDS) permettant aux bike shop d'avoir une interface destinée à la réparation de vélo. Et pour finir, création d'un Back-end en kotlin servant à décoder des trames hexadécimal (Spring boot).",
    imageUrl: "/shared/assets/images/Logo_Mobiapps.png",
    date: new Date("01/01/2022")
  }, {
    title: "Mobiapps",
    role: "Chef de projet",
    description: "Participation à un projet en tant que chef de projet sur deux applications mobile (Driver et Fleet Manager) pour le compte de AS24. J’ai donc pu mettre en place un processus plus agile et ainsi grandement améliorer la communication qui était l’irritant principale du projet.",
    imageUrl: "/shared/assets/images/Logo_Mobiapps.png",
    date: new Date("01/09/2021")
  }, {
    title: "Sopra Steria",
    role: "Développeur Full Stack",
    description: "Participation à deux projets en tant que développeur full-stack sur une application Web front/back-end pour maintenir et faire évoluer le SI d'une des plus grosses entreprises ferroviaire. Je m'occupe aussi bien de la partie développement de nouvelle story que de la partie maintenance au travers de correction d'anomalie.",
    imageUrl: "/shared/assets/images/Logo_SopraSteria.png",
    date: new Date("01/09/2021")
  }];

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    let container = document.getElementById('container');

    gsap.to(container, {
      x: () =>
        -(
          container!.scrollWidth * 1.25 -
          document.documentElement.clientWidth
        ) + 'px',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        end: () => '+=' + container!.offsetWidth,
      },
    });
  }
}
