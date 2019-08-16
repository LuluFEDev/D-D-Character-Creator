import { Component, Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as $ from 'jquery';
import { CharacterInformationComponent } from "../character-information-component/character-information.component";

@Component({
    selector: 'app-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

    submitName(): void {
        // @ts-ignore
        var name = document.getElementById('nameEntry').value;
        document.getElementById('nameHeader').textContent = "Welcome " + name;
        document.getElementById('name-body').outerHTML = "";
    }
    ngOnInit() {
        $('#nameEntry').change(function () {
            var nameText = $("#nameEntry").val();
            CharacterInformationComponent.printName(nameText);
        });
        var input = document.getElementById('nameEntry');

        input.addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                // @ts-ignore
                var name = document.getElementById('nameEntry').value;
                document.getElementById('nameHeader').textContent = "Welcome " + name;
                document.getElementById('name-body').outerHTML = "";
            }
        })
    }
}