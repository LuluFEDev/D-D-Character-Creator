import { Component, Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as $ from 'jquery';
import { CharacterInformationComponent } from "../character-information-component/character-information.component";
import { StatsComponent } from "../stats-component/stats.component";
import { FeatsComponent } from "../feats-component/feats.component";

var subRaceSelectDisplayed;
function cleanUp() {
    var racialAbilities = document.getElementById("racialAbilitiesList");
    $(racialAbilities).empty();
    FeatsComponent.hideFeats();
    if (subRaceSelectDisplayed == true) {
        document.getElementById("subDwarfSelect").style.display = "none";
        subRaceSelectDisplayed = false;
    }

    document.getElementById("subElfSelect").style.display = "none";
    document.getElementById("subGnomeSelect").style.display = "none";
    document.getElementById("subHalflingSelect").style.display = "none";
    document.getElementById("subDragonbornSelect").style.display = "none";
    //subRaceSelectDisplayed = false;

    // @ts-ignore
    document.getElementById("raceImg").src = '';

    var subRacialAbilities = document.getElementById("subRacialAbilitiesList");
    $(subRacialAbilities).empty();
}

@Component({
    selector: 'app-race',
    templateUrl: './race.component.html',
    styleUrls: ['./race.component.css'],
    providers: [CharacterInformationComponent,
        StatsComponent]
})

export class RaceComponent implements OnInit {
    ngOnInit() {
        var selectText;
        $('#raceSelect').change(function () {
            selectText = $("#raceSelect :selected").val();
            CharacterInformationComponent.printRace(selectText);
            $.getJSON("assets/race-info.json", function (data) {
                //+++HUMAN+++
                if (selectText == "Human") {
                    cleanUp();
                    document.getElementById('subHumanSelect').style.display = "block";
                    var humanText = document.getElementById('raceDescription');
                    humanText.textContent = data.human.description;

                    // @ts-ignore
                    document.getElementById("raceImg").src = data.human.imageURL;
                    var racialAbilities = document.getElementById("racialAbilitiesList");
                    document.getElementById("raceSpeed").textContent = "Speed: " + data.human.speed;
                    $('#subHumanSelect').change(function () {
                        var subSelectText = $("#subHumanSelect :selected").val();
                        if (subSelectText == "Standard") {
                            FeatsComponent.hideFeats();
                            $(racialAbilities).empty();
                            for (var i = 0; i < data.human.standard.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.appendChild(document.createTextNode(data.human.standard.racialAbilities[i]));
                                racialAbilities.appendChild(racialAbility);
                            }

                            var humanModifiers = StatsComponent.copyOfStatsArray;
                            for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                                humanModifiers[i] = StatsComponent.globalStatsArray[i] + data.human.standard.statModifiers[i];
                            }
                            StatsComponent.updateStats(humanModifiers);
                        }
                        if (subSelectText == 'Variant') {
                            $(racialAbilities).empty();
                            FeatsComponent.showFeats();
                            if (document.getElementById("humanSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }
                            for (var i = 0; i < data.human.variant.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.appendChild(document.createTextNode(data.human.variant.racialAbilities[i]));
                                racialAbilities.appendChild(racialAbility);
                            }

                            var humanModifiers = StatsComponent.copyOfStatsArray;
                            for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                                humanModifiers[i] = StatsComponent.globalStatsArray[i] + data.human.variant.statModifiers[i];
                            }
                            StatsComponent.updateStats(humanModifiers);
                        }
                    });
                }

                //+++TIEFLING+++
                if (selectText == "Tiefling") {
                    cleanUp();
                    var tieflingText = document.getElementById('raceDescription');
                    tieflingText.textContent = data.tiefling.description;

                    // @ts-ignore
                    document.getElementById("raceImg").src = data.tiefling.imageURL;

                    document.getElementById("raceSpeed").textContent = "Speed: " + data.tiefling.speed;

                    var racialAbilities = document.getElementById("racialAbilitiesList");
                    for (var i = 0; i < data.tiefling.racialAbilities.length; i++) {
                        var racialAbility = document.createElement("li");
                        racialAbility.appendChild(document.createTextNode(data.tiefling.racialAbilities[i]));
                        racialAbilities.appendChild(racialAbility);
                    }

                    var tieflingStatModifiers = StatsComponent.copyOfStatsArray;
                    for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                        tieflingStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.tiefling.statModifiers[i];
                    }
                    StatsComponent.updateStats(tieflingStatModifiers);
                }

                //+++HALF ORC+++
                if (selectText == "Half-Orc") {
                    cleanUp();
                    var tieflingText = document.getElementById('raceDescription');
                    tieflingText.textContent = data.halfOrc.description;

                    // @ts-ignore
                    document.getElementById("raceImg").src = data.halfOrc.imageURL;

                    document.getElementById("raceSpeed").textContent = "Speed: " + data.halfOrc.speed;

                    var racialAbilities = document.getElementById("racialAbilitiesList");
                    for (var i = 0; i < data.halfOrc.racialAbilities.length; i++) {
                        var racialAbility = document.createElement("li");
                        racialAbility.appendChild(document.createTextNode(data.halfOrc.racialAbilities[i]));
                        racialAbilities.appendChild(racialAbility);
                    }

                    var halfOrcStatModifiers = StatsComponent.copyOfStatsArray;
                    for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                        halfOrcStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.halfOrc.statModifiers[i];
                    }
                    StatsComponent.updateStats(halfOrcStatModifiers);
                }

                //+++HALF ELF+++
                if (selectText == "Half-Elf") {
                    cleanUp();
                    var tieflingText = document.getElementById('raceDescription');
                    tieflingText.textContent = data.halfElf.description;

                    // @ts-ignore
                    //document.getElementById("raceImg").src = data.halfElf.imageURL;

                    document.getElementById("raceSpeed").textContent = "Speed: " + data.halfElf.speed;

                    var racialAbilities = document.getElementById("racialAbilitiesList");
                    for (var i = 0; i < data.halfElf.racialAbilities.length; i++) {
                        var racialAbility = document.createElement("li");
                        racialAbility.appendChild(document.createTextNode(data.halfElf.racialAbilities[i]));
                        racialAbilities.appendChild(racialAbility);
                    }

                    var halfElfStatModifiers = StatsComponent.copyOfStatsArray;
                    for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                        halfElfStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.halfElf.statModifiers[i];
                    }
                    StatsComponent.updateStats(halfElfStatModifiers);
                }

                //+++ELF+++
                if (selectText == "Elf") {
                    cleanUp();
                    var elfText = document.getElementById('raceDescription');
                    elfText.textContent = data.elf.description;
                    document.getElementById("raceSpeed").textContent = "Speed: " + data.elf.speed;
                    document.getElementById('subElfSelect').style.display = "block";
                    var racialAbilities = document.getElementById("racialAbilitiesList");
                    var subRacialAbilities = document.getElementById("subRacialAbilitiesList");
                    for (var i = 0; i < data.elf.racialAbilities.length; i++) {
                        var racialAbility = document.createElement("li");
                        racialAbility.appendChild(document.createTextNode(data.elf.racialAbilities[i]));
                        racialAbilities.appendChild(racialAbility);
                    }
                    subRaceSelectDisplayed = true;

                    $('#subElfSelect').change(function () {
                        var subSelectText = $("#subElfSelect :selected").val();
                        if (subSelectText == "High Elf") {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.elf.highElf.imageURL;
                            document.getElementById("raceSpeed").textContent = "Speed: " + data.elf.speed;
                            if (document.getElementById("elfSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }

                            elfText.textContent = data.elf.highElf.description;
                            var highElfStatModifiers = StatsComponent.copyOfStatsArray;
                            for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                                highElfStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.elf.highElf.statModifiers[i];
                            }
                            StatsComponent.updateStats(highElfStatModifiers);
                            for (var i = 0; i < data.elf.highElf.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "elfSubRacialAbility");
                                racialAbility.appendChild(document.createTextNode(data.elf.highElf.racialAbilities[i]));
                                subRacialAbilities.appendChild(racialAbility);
                            }
                        }
                        if (subSelectText == 'Wood Elf') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.elf.woodElf.imageURL;
                            document.getElementById("raceSpeed").textContent = "Speed: " + data.elf.woodElf.speed;
                            if (document.getElementById("elfSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }
                            for (var i = 0; i < data.elf.woodElf.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "elfSubRacialAbility");
                                racialAbility.innerText = data.elf.woodElf.racialAbilities[i];
                                $(racialAbility).appendTo(subRacialAbilities);
                            }
                            var woodElfStatModifiers = StatsComponent.copyOfStatsArray;
                            for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                                woodElfStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.elf.woodElf.statModifiers[i];
                            }
                            StatsComponent.updateStats(woodElfStatModifiers);
                        }
                        if (subSelectText == 'Drow') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.elf.drow.imageURL;
                            document.getElementById("raceSpeed").textContent = "Speed: " + data.elf.speed;
                            if (document.getElementById("elfSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }
                            for (var i = 0; i < data.elf.drow.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "elfSubRacialAbility");
                                racialAbility.innerText = data.elf.drow.racialAbilities[i];
                                $(racialAbility).appendTo(subRacialAbilities);
                            }
                            var drowStatModifiers = StatsComponent.copyOfStatsArray;
                            for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                                drowStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.elf.drow.statModifiers[i];
                            }
                            StatsComponent.updateStats(drowStatModifiers);
                        }
                    });
                }

                //+++DWARF+++
                if (selectText == "Dwarf") {
                    cleanUp();
                    var dwarfText = document.getElementById('raceDescription');
                    dwarfText.textContent = data.dwarf.description;
                    document.getElementById('subDwarfSelect').style.display = "block";
                    subRaceSelectDisplayed = true;

                    $('#subDwarfSelect').change(function () {
                        var subSelectText = $("#subDwarfSelect :selected").val();
                        if (subSelectText == "Hill Dwarf") {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.dwarf.hillDwarf.imageURL;
                            if (document.getElementById("dwarfSubRacialAbility") != null) {
                                document.getElementById("dwarfSubRacialAbility").remove();
                            }
                            var racialAbility = document.createElement("li");
                            racialAbility.setAttribute("id", "dwarfSubRacialAbility");
                            racialAbility.innerText = data.dwarf.hillDwarf.racialAbilities;
                            $(racialAbility).appendTo(racialAbilities);
                            dwarfText.textContent = data.dwarf.hillDwarf.description;

                            var hillDwarfStatModifiers = StatsComponent.copyOfStatsArray;
                            for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                                hillDwarfStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.dwarf.hillDwarf.statModifiers[i];
                            }
                            StatsComponent.updateStats(hillDwarfStatModifiers);
                        }
                        if (subSelectText == 'Mountain Dwarf') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.dwarf.mountainDwarf.imageURL;
                            if (document.getElementById("dwarfSubRacialAbility") != null) {
                                document.getElementById("dwarfSubRacialAbility").remove();
                            }
                            var racialAbility = document.createElement("li");
                            racialAbility.setAttribute("id", "dwarfSubRacialAbility");
                            racialAbility.innerText = data.dwarf.mountainDwarf.racialAbilities;
                            $(racialAbility).appendTo(racialAbilities);

                            var mountainDwarfStatModifiers = StatsComponent.copyOfStatsArray;
                            for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                                mountainDwarfStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.dwarf.mountainDwarf.statModifiers[i];
                            }
                            StatsComponent.updateStats(mountainDwarfStatModifiers);
                        }
                    });

                    document.getElementById("raceSpeed").textContent = "Speed: " + data.dwarf.speed;

                    var racialAbilities = document.getElementById("racialAbilitiesList");
                    for (var i = 0; i < data.dwarf.racialAbilities.length; i++) {
                        var racialAbility = document.createElement("li");
                        racialAbility.appendChild(document.createTextNode(data.dwarf.racialAbilities[i]));
                        racialAbilities.appendChild(racialAbility);
                    }
                }

                //+++DRAGONBORN+++
                if (selectText == "Dragonborn") {
                    cleanUp();
                    var dragonbornText = document.getElementById('raceDescription');
                    dragonbornText.textContent = data.dragonborn.description;
                    document.getElementById('subDragonbornSelect').style.display = "block";
                    subRaceSelectDisplayed = true;

                    var dragonStatModifiers = StatsComponent.copyOfStatsArray;
                    var racialAbilities = document.getElementById("racialAbilitiesList");
                    var subRacialAbilities = document.getElementById("subRacialAbilitiesList");
                    document.getElementById("raceSpeed").textContent = "Speed: " + data.dragonborn.speed;

                    var racialAbilities = document.getElementById("racialAbilitiesList");
                    for (var i = 0; i < data.dragonborn.racialAbilities.length; i++) {
                        var racialAbility = document.createElement("li");
                        racialAbility.appendChild(document.createTextNode(data.dragonborn.racialAbilities[i]));
                        racialAbilities.appendChild(racialAbility);
                    }
                    for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                        dragonStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.dragonborn.statModifiers[i];
                    }
                    StatsComponent.updateStats(dragonStatModifiers);

                    $('#subDragonbornSelect').change(function () {
                        var subSelectText = $("#subDragonbornSelect :selected").val();
                        if (subSelectText == "Black") {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.dragonborn.blackDragon.imageURL;

                            if (document.getElementById("dragonbornSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }
                            for (var i = 0; i < data.dragonborn.blackDragon.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "dragonbornSubRacialAbility");
                                racialAbility.innerText = data.dragonborn.blackDragon.racialAbilities[i];
                                $(racialAbility).appendTo(subRacialAbilities);
                            }
                        }
                        if (subSelectText == 'Blue') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.dragonborn.blueDragon.imageURL;
                            if (document.getElementById("dragonbornSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }

                            for (var i = 0; i < data.dragonborn.blueDragon.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "dragonbornSubRacialAbility");
                                racialAbility.innerText = data.dragonborn.blueDragon.racialAbilities[i];
                                $(racialAbility).appendTo(subRacialAbilities);
                            }
                        }
                        if (subSelectText == 'Brass') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.dragonborn.brassDragon.imageURL;
                            if (document.getElementById("dragonbornSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }

                            for (var i = 0; i < data.dragonborn.brassDragon.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "dragonbornSubRacialAbility");
                                racialAbility.innerText = data.dragonborn.brassDragon.racialAbilities[i];
                                $(racialAbility).appendTo(subRacialAbilities);
                            }
                        }
                        if (subSelectText == 'Bronze') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.dragonborn.bronzeDragon.imageURL;
                            if (document.getElementById("dragonbornSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }

                            for (var i = 0; i < data.dragonborn.bronzeDragon.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "dragonbornSubRacialAbility");
                                racialAbility.innerText = data.dragonborn.bronzeDragon.racialAbilities[i];
                                $(racialAbility).appendTo(subRacialAbilities);
                            }
                        }
                        if (subSelectText == 'Copper') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.dragonborn.copperDragon.imageURL;
                            if (document.getElementById("dragonbornSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }

                            for (var i = 0; i < data.dragonborn.copperDragon.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "dragonbornSubRacialAbility");
                                racialAbility.innerText = data.dragonborn.copperDragon.racialAbilities[i];
                                $(racialAbility).appendTo(subRacialAbilities);
                            }
                        }
                        if (subSelectText == 'Gold') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.dragonborn.goldDragon.imageURL;
                            if (document.getElementById("dragonbornSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }

                            for (var i = 0; i < data.dragonborn.goldDragon.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "dragonbornSubRacialAbility");
                                racialAbility.innerText = data.dragonborn.goldDragon.racialAbilities[i];
                                $(racialAbility).appendTo(subRacialAbilities);
                            }
                        }
                        if (subSelectText == 'Green') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.dragonborn.greenDragon.imageURL;
                            if (document.getElementById("dragonbornSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }

                            for (var i = 0; i < data.dragonborn.greenDragon.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "dragonbornSubRacialAbility");
                                racialAbility.innerText = data.dragonborn.greenDragon.racialAbilities[i];
                                $(racialAbility).appendTo(subRacialAbilities);
                            }
                        }
                        if (subSelectText == 'Red') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.dragonborn.redDragon.imageURL;
                            if (document.getElementById("dragonbornSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }

                            for (var i = 0; i < data.dragonborn.redDragon.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "dragonbornSubRacialAbility");
                                racialAbility.innerText = data.dragonborn.redDragon.racialAbilities[i];
                                $(racialAbility).appendTo(subRacialAbilities);
                            }
                        }
                        if (subSelectText == 'Silver') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.dragonborn.silverDragon.imageURL;
                            if (document.getElementById("dragonbornSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }

                            for (var i = 0; i < data.dragonborn.silverDragon.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "dragonbornSubRacialAbility");
                                racialAbility.innerText = data.dragonborn.silverDragon.racialAbilities[i];
                                $(racialAbility).appendTo(subRacialAbilities);
                            }
                        }
                        if (subSelectText == 'White') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.dragonborn.whiteDragon.imageURL;
                            if (document.getElementById("dragonbornSubRacialAbility") != null) {
                                $(subRacialAbilities).empty()
                            }

                            for (var i = 0; i < data.dragonborn.whiteDragon.racialAbilities.length; i++) {
                                var racialAbility = document.createElement("li");
                                racialAbility.setAttribute("id", "dragonbornSubRacialAbility");
                                racialAbility.innerText = data.dragonborn.whiteDragon.racialAbilities[i];
                                $(racialAbility).appendTo(subRacialAbilities);
                            }
                        }
                    });
                }

                //+++GNOME+++
                if (selectText == "Gnome") {
                    cleanUp();
                    var gnomeText = document.getElementById('raceDescription');
                    gnomeText.textContent = data.gnome.description;
                    document.getElementById('subGnomeSelect').style.display = "block";
                    subRaceSelectDisplayed = true;

                    $('#subGnomeSelect').change(function () {
                        var subSelectText = $("#subGnomeSelect :selected").val();
                        if (subSelectText == "Forest Gnome") {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.gnome.forestGnome.imageURL;
                            if (document.getElementById("gnomeSubRacialAbility") != null) {
                                document.getElementById("gnomeSubRacialAbility").remove();
                            }
                            var racialAbility = document.createElement("li");
                            racialAbility.setAttribute("id", "gnomeSubRacialAbility");
                            racialAbility.innerText = data.gnome.forestGnome.racialAbilities;
                            $(racialAbility).appendTo(racialAbilities);
                            var forestGnomeText = document.getElementById('subRaceDescription');
                            forestGnomeText.textContent = data.gnome.forestGnome.description;

                            var forestGnomeStatModifiers = StatsComponent.copyOfStatsArray;
                            for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                                forestGnomeStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.gnome.forestGnome.statModifiers[i];
                            }
                            StatsComponent.updateStats(forestGnomeStatModifiers);
                        }
                        if (subSelectText == 'Rock Gnome') {
                            // @ts-ignore
                            document.getElementById("raceImg").src = data.gnome.rockGnome.imageURL;
                            if (document.getElementById("gnomeSubRacialAbility") != null) {
                                document.getElementById("gnomeSubRacialAbility").remove();
                            }
                            var racialAbility = document.createElement("li");
                            racialAbility.setAttribute("id", "gnomeSubRacialAbility");
                            racialAbility.innerText = data.gnome.rockGnome.racialAbilities;
                            $(racialAbility).appendTo(racialAbilities);

                            var rockGnomeStatModifiers = StatsComponent.copyOfStatsArray;
                            for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                                rockGnomeStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.gnome.rockGnome.statModifiers[i];
                            }
                            StatsComponent.updateStats(rockGnomeStatModifiers);
                        }
                    });

                    document.getElementById("raceSpeed").textContent = "Speed: " + data.gnome.speed;

                    var racialAbilities = document.getElementById("racialAbilitiesList");
                    for (var i = 0; i < data.gnome.racialAbilities.length; i++) {
                        var racialAbility = document.createElement("li");
                        racialAbility.appendChild(document.createTextNode(data.gnome.racialAbilities[i]));
                        racialAbilities.appendChild(racialAbility);
                    }
                }

                //+++HALFLING+++
                if (selectText == "Halfling") {
                    cleanUp();
                    var halflingText = document.getElementById('raceDescription');
                    halflingText.textContent = data.halfling.description;
                    document.getElementById('subHalflingSelect').style.display = "block";
                    subRaceSelectDisplayed = true;

                    $('#subHalflingSelect').change(function () {
                        var subSelectText = $("#subHalflingSelect :selected").val();
                        if (subSelectText == "Lightfoot") {
                            // @ts-ignore
                            //document.getElementById("raceImg").src = data.halfling.lightfoot.imageURL;
                            if (document.getElementById("halflingSubRacialAbility") != null) {
                                document.getElementById("halflingSubRacialAbility").remove();
                            }
                            var racialAbility = document.createElement("li");
                            racialAbility.setAttribute("id", "halflingSubRacialAbility");
                            racialAbility.innerText = data.halfling.lightfoot.racialAbilities;
                            $(racialAbility).appendTo(racialAbilities);
                            var lightfootText = document.getElementById('subRaceDescription');
                            lightfootText.textContent = data.halfling.lightfoot.description;

                            var lightfootStatModifiers = StatsComponent.copyOfStatsArray;
                            for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                                lightfootStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.halfling.lightfoot.statModifiers[i];
                            }
                            StatsComponent.updateStats(lightfootStatModifiers);
                        }
                        if (subSelectText == 'Stout') {
                            // @ts-ignore
                            //document.getElementById("raceImg").src = data.halfling.stout.imageURL;
                            if (document.getElementById("halflingSubRacialAbility") != null) {
                                document.getElementById("halflingSubRacialAbility").remove();
                            }
                            var racialAbility = document.createElement("li");
                            racialAbility.setAttribute("id", "halflingSubRacialAbility");
                            racialAbility.innerText = data.halfling.stout.racialAbilities;
                            $(racialAbility).appendTo(racialAbilities);
                            var stoutText = document.getElementById('subRaceDescription');
                            stoutText.textContent = data.halfling.stout.description;

                            var stoutStatModifiers = StatsComponent.copyOfStatsArray;
                            for (var i = 0; i < StatsComponent.globalStatsArray.length; i++) {
                                stoutStatModifiers[i] = StatsComponent.globalStatsArray[i] + data.halfling.stout.statModifiers[i];
                            }
                            StatsComponent.updateStats(stoutStatModifiers);
                        }
                    });

                    document.getElementById("raceSpeed").textContent = "Speed: " + data.halfling.speed;

                    var racialAbilities = document.getElementById("racialAbilitiesList");
                    for (var i = 0; i < data.halfling.racialAbilities.length; i++) {
                        var racialAbility = document.createElement("li");
                        racialAbility.appendChild(document.createTextNode(data.halfling.racialAbilities[i]));
                        racialAbilities.appendChild(racialAbility);
                    }
                }
            })
        });
    }
}