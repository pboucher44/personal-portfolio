import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  constructor() {}

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
