import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { BodyComponent } from './components/body/body.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skill/skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectComponent } from './components/proyect/proyect.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperiencieComponent } from './components/experience/new-experiencie.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewProyectComponent } from './components/proyect/new-proyect.component';
import { EditProyectComponent } from './components/proyect/edit-proyect.component';
import { NewSkillComponent } from './components/skill/new-skill.component';
import { EditSkillComponent } from './components/skill/edit-skill.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    BodyComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    ProyectComponent,
    FooterComponent,
    LoginComponent,
    NewExperiencieComponent,
    EditExperienceComponent,
    NewEducationComponent,
    EditEducationComponent,
    NewProyectComponent,
    EditProyectComponent,
    NewSkillComponent,
    EditSkillComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
