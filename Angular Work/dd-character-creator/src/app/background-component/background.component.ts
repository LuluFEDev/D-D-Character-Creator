import { Component, OnInit } from "@angular/core";
import { backgroundConstants, getKeyByValue } from '../helpers/helpers';
import * as $ from 'jquery';
import { CharacterInformationComponent } from "../character-information-component/character-information.component";


function cleanUp() {
    var backgroundToolProfs = document.getElementById('backgroundToolProfs');
    $(backgroundToolProfs).empty();

    var backgroundLanguages = document.getElementById('backgroundLanguages');
    $(backgroundLanguages).empty();

    var backgroundItems = document.getElementById('backgroundItems');
    $(backgroundItems).empty();

    var skillProfs = document.getElementById('backgroundSkillProfs');
    $(skillProfs).empty();

    document.getElementById('backgroundItemsHeader').style.display = 'none';
    document.getElementById('backgroundToolProfsHeader').style.display = 'none';
    document.getElementById('backgroundLanguagesHeader').style.display = 'none';
    document.getElementById('backgroundSkillProfsHeader').style.display = 'none';
    document.getElementById('backgroundDescription').textContent = '';

}

function setChosenBackground(background, data) {
    cleanUp();
    BackgroundComponent.backgroundSkillProfs = data[background].skillProfs;
    var skillProfs = document.getElementById('backgroundSkillProfs');
    var toolProfs = document.getElementById('backgroundToolProfs');
    var languages = document.getElementById('backgroundLanguages');
    var items = document.getElementById('backgroundItems');
    document.getElementById('backgroundDescription').textContent = data[background].description;
    console.log('data[background].description', background)
    document.getElementById('backgroundSkillProfsHeader').style.display = "block";
    for (var i = 0; i < data[background].skillProfs.length; i++) {
        var skillProf = document.createElement("li");
        skillProf.appendChild(document.createTextNode(data[background].skillProfs[i]));
        skillProfs.appendChild(skillProf);
    }
    if (data[background].toolProfs.length > 0) {
        document.getElementById('backgroundToolProfsHeader').style.display = "block";
        for (var i = 0; i < data[background].toolProfs.length; i++) {
            var toolProf = document.createElement("li");
            toolProf.appendChild(document.createTextNode(data[background].toolProfs[i]));
            toolProfs.appendChild(toolProf);
        }
    }
    document.getElementById('backgroundLanguagesHeader').style.display = "block";

    var language = document.createElement("li");
    language.appendChild(document.createTextNode(data.acolyte.languages));
    languages.appendChild(language);
    for (var i = 0; i < data[background].equipment.length; i++) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(data[background].equipment[i]));
        items.appendChild(item);
    }
    document.getElementById('backgroundItemsHeader').style.display = "block";
}
@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.css'],
})
export class BackgroundComponent implements OnInit {
    static backgroundSkillProfs: any;
    ngOnInit() {
        var selectText;
        $('#backgroundSelect').change(function () {
            selectText = $('#backgroundSelect :selected').val();
            CharacterInformationComponent.printBackground(selectText);
            $.getJSON("assets/background-info.json", function (data) {
                if (selectText == "--Background--") {
                    cleanUp();
                }
                var background = getKeyByValue(backgroundConstants, selectText);
                console.log('background', background)
                setChosenBackground(background, data)
            })
        })
    }
}