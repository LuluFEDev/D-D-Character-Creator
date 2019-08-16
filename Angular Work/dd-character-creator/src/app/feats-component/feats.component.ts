import { Component, Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as $ from 'jquery';
import { CharacterInformationComponent } from "../character-information-component/character-information.component";


function cleanUp() {
    var featPointsList = document.getElementById('featPointsList');
    $(featPointsList).empty();
    document.getElementById('featDescription').textContent = '';

}
@Component({
    selector: 'app-feats',
    templateUrl: './feats.component.html',
    styleUrls: ['./feats.component.css'],
})
export class FeatsComponent implements OnInit {
    static showFeats() {
        document.getElementById("featsBody").style.display = 'block';
    }
    static hideFeats() {
        var blankSelect = document.getElementById('blankSelect').textContent;
        $('#featSelect').val(blankSelect);
        cleanUp();
        document.getElementById("featsBody").style.display = 'none';
    }
    static featSkillProfs: any;
    ngOnInit() {
        var selectText;
        $('#featSelect').change(function () {
            selectText = $('#featSelect :selected').val();
            $.getJSON("assets/feats-info.json", function (data) {
                if (selectText == "--Feat--") {
                    cleanUp();
                }
                if (selectText == "Alert") {
                    cleanUp();
                    var featPoints = document.getElementById('featPointsList');
                    document.getElementById('featDescription').textContent = data.alert.featDescription;
                    for (var i = 0; i < data.alert.featPoints.length; i++) {
                        var featPoint = document.createElement("li");
                        featPoint.appendChild(document.createTextNode(data.alert.featPoints[i]));
                        featPoints.appendChild(featPoint);
                    }
                }

                if (selectText == "Athlete") {
                    cleanUp();
                    var featPoints = document.getElementById('featPointsList');
                    document.getElementById('featDescription').textContent = data.athlete.featDescription;
                    for (var i = 0; i < data.athlete.featPoints.length; i++) {
                        var featPoint = document.createElement("li");
                        featPoint.appendChild(document.createTextNode(data.athlete.featPoints[i]));
                        featPoints.appendChild(featPoint);
                    }
                }

                if (selectText == "Actor") {
                    cleanUp();
                    var featPoints = document.getElementById('featPointsList');
                    document.getElementById('featDescription').textContent = data.actor.featDescription;
                    for (var i = 0; i < data.actor.featPoints.length; i++) {
                        var featPoint = document.createElement("li");
                        featPoint.appendChild(document.createTextNode(data.actor.featPoints[i]));
                        featPoints.appendChild(featPoint);
                    }
                }
            })
        })
    }
}