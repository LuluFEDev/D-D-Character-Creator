import { Component, Injectable, OnInit } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import * as $ from 'jquery';
import { CharacterInformationComponent } from "../character-information-component/character-information.component";


function cleanUp()
{
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
@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.css'],
})
export class BackgroundComponent implements OnInit {
    static backgroundSkillProfs :any;
   ngOnInit(){
       var selectText;
    $('#backgroundSelect').change(function () {
        selectText = $('#backgroundSelect :selected').val();
        CharacterInformationComponent.printBackground(selectText);
        $.getJSON("assets/background-info.json", function (data) {
            if (selectText == "--Background--") {
                cleanUp();
            }
            if (selectText == "Acolyte") {
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.acolyte.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.acolyte.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.acolyte.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.acolyte.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundLanguagesHeader').style.display = "block";

                var language = document.createElement("li");
                language.appendChild(document.createTextNode(data.acolyte.languages));
                languages.appendChild(language);
                
                for(var i = 0; i < data.acolyte.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.acolyte.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }

            if (selectText == "Charlatan"){
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.charlatan.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.charlatan.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.charlatan.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.charlatan.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundToolProfsHeader').style.display = "block";
                for(var i = 0; i < data.charlatan.toolProfs.length; i++)
                {
                    var toolProf = document.createElement("li");
                    toolProf.appendChild(document.createTextNode(data.charlatan.toolProfs[i]));
                    toolProfs.appendChild(toolProf);
                }
                for(var i = 0; i < data.charlatan.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.charlatan.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }
            if (selectText == "Criminal"){
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.criminal.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.criminal.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.criminal.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.criminal.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundToolProfsHeader').style.display = "block";
                for(var i = 0; i < data.criminal.toolProfs.length; i++)
                {
                    var toolProf = document.createElement("li");
                    toolProf.appendChild(document.createTextNode(data.criminal.toolProfs[i]));
                    toolProfs.appendChild(toolProf);
                }
                for(var i = 0; i < data.criminal.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.criminal.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }
            if (selectText == "Entertainer"){
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.entertainer.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.entertainer.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.entertainer.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.entertainer.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundToolProfsHeader').style.display = "block";
                for(var i = 0; i < data.entertainer.toolProfs.length; i++)
                {
                    var toolProf = document.createElement("li");
                    toolProf.appendChild(document.createTextNode(data.entertainer.toolProfs[i]));
                    toolProfs.appendChild(toolProf);
                }
                for(var i = 0; i < data.entertainer.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.entertainer.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }
            if (selectText == "Folk Hero"){
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.folkHero.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.folkHero.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.folkHero.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.folkHero.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundToolProfsHeader').style.display = "block";
                for(var i = 0; i < data.folkHero.toolProfs.length; i++)
                {
                    var toolProf = document.createElement("li");
                    toolProf.appendChild(document.createTextNode(data.folkHero.toolProfs[i]));
                    toolProfs.appendChild(toolProf);
                }
                for(var i = 0; i < data.folkHero.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.folkHero.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }
            if (selectText == "Guild Artisan"){
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.guildArtisan.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.guildArtisan.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.guildArtisan.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.guildArtisan.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundToolProfsHeader').style.display = "block";
                for(var i = 0; i < data.guildArtisan.toolProfs.length; i++)
                {
                    var toolProf = document.createElement("li");
                    toolProf.appendChild(document.createTextNode(data.guildArtisan.toolProfs[i]));
                    toolProfs.appendChild(toolProf);
                }
                for(var i = 0; i < data.guildArtisan.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.guildArtisan.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }
            if (selectText == "Hermit"){
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.hermit.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.hermit.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.hermit.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.hermit.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundToolProfsHeader').style.display = "block";
                for(var i = 0; i < data.hermit.toolProfs.length; i++)
                {
                    var toolProf = document.createElement("li");
                    toolProf.appendChild(document.createTextNode(data.hermit.toolProfs[i]));
                    toolProfs.appendChild(toolProf);
                }
                document.getElementById('backgroundLanguagesHeader').style.display = "block";

                var language = document.createElement("li");
                language.appendChild(document.createTextNode(data.acolyte.languages));
                languages.appendChild(language);
                for(var i = 0; i < data.hermit.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.hermit.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }
            if (selectText == "Noble"){
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.noble.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.noble.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.noble.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.noble.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundToolProfsHeader').style.display = "block";
                for(var i = 0; i < data.noble.toolProfs.length; i++)
                {
                    var toolProf = document.createElement("li");
                    toolProf.appendChild(document.createTextNode(data.noble.toolProfs[i]));
                    toolProfs.appendChild(toolProf);
                }
                document.getElementById('backgroundLanguagesHeader').style.display = "block";

                var language = document.createElement("li");
                language.appendChild(document.createTextNode(data.acolyte.languages));
                languages.appendChild(language);
                for(var i = 0; i < data.noble.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.noble.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }
            if (selectText == "Outlander"){
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.outlander.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.outlander.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.outlander.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.outlander.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundToolProfsHeader').style.display = "block";
                for(var i = 0; i < data.outlander.toolProfs.length; i++)
                {
                    var toolProf = document.createElement("li");
                    toolProf.appendChild(document.createTextNode(data.outlander.toolProfs[i]));
                    toolProfs.appendChild(toolProf);
                }
                document.getElementById('backgroundLanguagesHeader').style.display = "block";

                var language = document.createElement("li");
                language.appendChild(document.createTextNode(data.acolyte.languages));
                languages.appendChild(language);
                for(var i = 0; i < data.outlander.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.outlander.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }
            if (selectText == "Sage"){
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.sage.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.sage.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.sage.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.sage.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundLanguagesHeader').style.display = "block";

                var language = document.createElement("li");
                language.appendChild(document.createTextNode(data.acolyte.languages));
                languages.appendChild(language);
                for(var i = 0; i < data.sage.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.sage.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }
            if (selectText == "Sailor"){
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.sailor.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.sailor.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.sailor.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.sailor.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundToolProfsHeader').style.display = "block";
                for(var i = 0; i < data.sailor.toolProfs.length; i++)
                {
                    var toolProf = document.createElement("li");
                    toolProf.appendChild(document.createTextNode(data.sailor.toolProfs[i]));
                    toolProfs.appendChild(toolProf);
                }
                for(var i = 0; i < data.sailor.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.sailor.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }
            if (selectText == "Soldier"){
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.soldier.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.soldier.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.soldier.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.soldier.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundToolProfsHeader').style.display = "block";
                for(var i = 0; i < data.soldier.toolProfs.length; i++)
                {
                    var toolProf = document.createElement("li");
                    toolProf.appendChild(document.createTextNode(data.soldier.toolProfs[i]));
                    toolProfs.appendChild(toolProf);
                }
                for(var i = 0; i < data.soldier.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.soldier.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }
            if (selectText == "Urchin"){
                cleanUp();
                BackgroundComponent.backgroundSkillProfs = data.urchin.skillProfs;
                var skillProfs = document.getElementById('backgroundSkillProfs');
                var toolProfs = document.getElementById('backgroundToolProfs');
                var languages = document.getElementById('backgroundLanguages');
                var items = document.getElementById('backgroundItems');
                document.getElementById('backgroundDescription').textContent = data.urchin.description;
                document.getElementById('backgroundSkillProfsHeader').style.display = "block";
                for(var i = 0; i < data.urchin.skillProfs.length; i++)
                {
                    var skillProf = document.createElement("li");
                    skillProf.appendChild(document.createTextNode(data.urchin.skillProfs[i]));
                    skillProfs.appendChild(skillProf);
                }
                document.getElementById('backgroundToolProfsHeader').style.display = "block";
                for(var i = 0; i < data.urchin.toolProfs.length; i++)
                {
                    var toolProf = document.createElement("li");
                    toolProf.appendChild(document.createTextNode(data.urchin.toolProfs[i]));
                    toolProfs.appendChild(toolProf);
                }
                for(var i = 0; i < data.urchin.equipment.length; i++)
                {
                    var item = document.createElement("li");
                    item.appendChild(document.createTextNode(data.urchin.equipment[i]));
                    items.appendChild(item);
                }
                document.getElementById('backgroundItemsHeader').style.display = "block";
            }
        })
    })
   }
}