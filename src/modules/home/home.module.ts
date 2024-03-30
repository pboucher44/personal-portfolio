import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./home-routing.module";
import { AppComponent as HomeComponent } from "./home.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SpecialitiesComponent } from "./components/specialities/specialities.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ExperienceComponent } from "./components/projects/experience/experience.component";

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    AboutComponent,
    ProjectsComponent,
    SpecialitiesComponent,
    ContactComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "/shared/assets/i18n/", ".json");
}
