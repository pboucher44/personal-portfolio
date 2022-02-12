import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class AppComponent {
  title = 'personal-portfolio';
  languageUsed = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.languageUsed);
  }

  selectFrench() {
    if (this.languageUsed == 'en') {
      this.languageUsed = 'fr';
      document.getElementById('french')?.classList.remove("disabled");
      document.getElementById('english')?.classList.add("disabled");
      this.translate.setDefaultLang(this.languageUsed);
    }
  };

  selectEnglish() {
    if (this.languageUsed == 'fr') {
      this.languageUsed = 'en';
      document.getElementById('english')?.classList.remove("disabled");
      document.getElementById('french')?.classList.add("disabled");
      this.translate.setDefaultLang(this.languageUsed);
    }
  }

}
