import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageComponent } from './image-component/image.component';
import { RaceComponent } from './race-component/race.component';
import { NameComponent } from './name-component/name.component';
import { CharacterInformationComponent } from './character-information-component/character-information.component';
import { StatsComponent } from './stats-component/stats.component';
import { ClassComponent } from './class-component/class.component';
import { BackgroundComponent } from './background-component/background.component';
import { FeatsComponent } from './feats-component/feats.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    RaceComponent,
    NameComponent,
    CharacterInformationComponent,
    StatsComponent,
    ClassComponent,
    BackgroundComponent,
    FeatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
