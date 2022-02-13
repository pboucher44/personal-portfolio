import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.init();
  }


  init(){
    this.setStickyContainersSize();
    this.bindEvents();
  }

  bindEvents(){
    window.addEventListener("wheel", (evt) => this.wheelHandler(evt));
    window.addEventListener("resize", () => this.setStickyContainersSize());
  }

  setStickyContainersSize(){
    document.querySelectorAll('.sticky-container').forEach(function(container){
      const mainSelector = container.querySelector('main')
      if (mainSelector) {
        const stikyContainerHeight = ((mainSelector.offsetWidth + window.innerHeight) * 2) + mainSelector.offsetWidth;
        container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
      }
    });
  }

  isElementInViewport (el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }

  wheelHandler(evt: WheelEvent){

    const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container'))
      .filter((container) =>{
        return this.isElementInViewport(container as HTMLElement);
      })[0];

    if(!containerInViewPort || !(containerInViewPort instanceof HTMLElement)){
      return;
    }

    var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
    var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
    let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    if(g_canScrollHorizontally){
      const viewPortContainer = containerInViewPort.querySelector('main');
      if (viewPortContainer) {
        viewPortContainer.scrollLeft += evt.deltaY;
      }
    }
  }


}
