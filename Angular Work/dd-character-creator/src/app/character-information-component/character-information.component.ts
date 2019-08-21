import { DataService } from "../service-component/service.component";
import { Component } from "@angular/core";
import * as $ from 'jquery';


@Component({
    selector: 'app-character-information',
    templateUrl: './character-information.component.html',
    styleUrls: ['./character-information.component.css']
})
export class CharacterInformationComponent {
    static printRace(race) {
        $("#raceArea").text(race);
    }

    static printName(name) {
        $("#nameArea").text(name);
    }

    static printClass(classText) {
        $("#classArea").text(classText);
    }

    static printBackground(background) {
        $("#backgroundArea").text(background);
    }

    static printFeat(background) {
        $("#backgroundArea").text(background);
    }
}