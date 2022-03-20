import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit(): void {
    this.init();
  }

  init(){
    this.setStickyContainersSize();
    this.bindEvents();
  }

  bindEvents(){
    this.trackScroll();
    window.addEventListener("resize", () => this.setStickyContainersSize());
  }

  setStickyContainersSize(){
    document.querySelectorAll('.sticky-container').forEach(function(container){
      let mainContainer = container.querySelector('main');
      if (mainContainer && container instanceof HTMLElement) {
        const stickyContainerHeight = (mainContainer.offsetWidth + window.innerHeight);
        container.setAttribute('style', 'height: ' + stickyContainerHeight + 'px');
      }
    });
  }

  isElementInViewport (el: HTMLElement): any {
    if (el instanceof HTMLElement) {
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= document.documentElement.clientHeight;
    }
    return false;
  }

  trackScroll(): any{
    const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter((container ) =>{
      const isVisible = this.isElementInViewport(container as HTMLElement);
      if(!isVisible && container instanceof HTMLElement){
        let containerWidth = container.offsetTop + container.offsetWidth;
        let mainSelector = container.querySelector('main')
        if(containerWidth < window.pageYOffset && mainSelector){
          mainSelector.scrollLeft = containerWidth;
        }else if(container.offsetTop < window.pageYOffset && mainSelector){
          mainSelector.scrollLeft = 0;
        }
      }
      return isVisible;
    })[0];

    if(!containerInViewPort || !(containerInViewPort instanceof HTMLElement)){
      requestAnimationFrame(() => {this.trackScroll()});
      return;
    }

    let isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
    let isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
    let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    let mainContainer = containerInViewPort.querySelector('main');
    if(g_canScrollHorizontally && mainContainer){
      mainContainer.scrollLeft = window.pageYOffset - containerInViewPort.offsetTop;
    }

    requestAnimationFrame(() => {this.trackScroll()});
  }

}
