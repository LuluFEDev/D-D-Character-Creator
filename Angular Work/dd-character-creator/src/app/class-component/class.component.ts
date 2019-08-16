import { Component, Injectable, OnInit } from "@angular/core";
import * as $ from 'jquery';
import { BackgroundComponent } from "../background-component/background.component"
import { CharacterInformationComponent } from "../character-information-component/character-information.component";

function cleanUpFeatures() {
    var levelFeatures = document.getElementById("levelFeaturesList");
    $(levelFeatures).empty();

    var incrementalFeatures = document.getElementById('incrementalFeatures');
    $(incrementalFeatures).empty();
}

function cleanUpSubClassFeatures() {
    var levelFeatures = document.getElementById("subClassFeaturesList");
    $(levelFeatures).empty();

    var levelSpells = document.getElementById("subClassSpellsList");
    $(levelSpells).empty();
}

function cleanUpSubClass() {
    document.getElementById('subClass').style.display = 'none';
}

function cleanUp() {
    var levelFeatures = document.getElementById("levelFeaturesList");
    $(levelFeatures).empty();

    var incrementalFeatures = document.getElementById('incrementalFeatures');
    $(incrementalFeatures).empty();

    var itemProficiencies = document.getElementById('classItemProfsList');
    $(itemProficiencies).empty();

    var savingThrowProficiencies = document.getElementById('classSaveThrowProfsList');
    $(savingThrowProficiencies).empty();

    var skillProfs = document.getElementById('skillProfsList');
    $(skillProfs).empty();

    var levelFeatures = document.getElementById("subClassFeaturesList");
    $(levelFeatures).empty();

    document.getElementById('subClassHeader').textContent = '';
    document.getElementById('subClassFeaturesHeader').textContent = '';
    document.getElementById('divineDomainSelect').style.display = 'none';
    document.getElementById('primalPathSelect').style.display = 'none';
    document.getElementById('subClassDescription').textContent = '';
    document.getElementById('itemProfsHeader').style.display = 'none';
    document.getElementById('saveThrowProfsHeader').style.display = 'none';
    document.getElementById('skillProfsHeader').style.display = 'none';
    document.getElementById('itemProfsHeader').style.display = 'none';
    document.getElementById('levelSelect').style.display = 'none';
    document.getElementById('levelSelectHeader').style.display = 'none';
    document.getElementById('classDescription').textContent = '';

    var levelSelect = document.getElementById('levelSelect');
    var blankSelect = document.getElementById('blankLevel');
    // @ts-ignore
    levelSelect.value = blankSelect;
}

function featPopUp() {
    // @ts-ignore
    $('#exampleModal').modal('show');
}

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.css'],
    providers: []
})

export class ClassComponent implements OnInit {
    ngOnInit() {
        var selectText;
        $('#classSelect').change(function () {
            selectText = $("#classSelect :selected").val();
            CharacterInformationComponent.printClass(selectText);
            $.getJSON("assets/class-info.json", function (data) {
                if (selectText == "--Class--") {
                    cleanUp();
                }
                //+++BARBARIAN+++
                if (selectText == "Barbarian") {
                    cleanUp();
                    document.getElementById('levelSelect').style.display = 'block';
                    document.getElementById('levelSelectHeader').style.display = 'block';
                    var barbarianText = document.getElementById('classDescription');
                    barbarianText.textContent = data.barbarian.description;

                    // @ts-ignore
                    document.getElementById('classImg').src = data.barbarian.imageURL;

                    var itemProficiencies = document.getElementById('classItemProfsList');
                    document.getElementById('itemProfsHeader').style.display = 'block';
                    for (var i = 0; i < data.barbarian.itemProficiencies.length; i++) {
                        var itemProficiency = document.createElement("li");
                        itemProficiency.appendChild(document.createTextNode(data.barbarian.itemProficiencies[i]));
                        itemProficiencies.appendChild(itemProficiency);
                    }

                    var savingThrowProficiencies = document.getElementById('classSaveThrowProfsList');
                    document.getElementById('saveThrowProfsHeader').style.display = 'block';
                    for (var i = 0; i < data.barbarian.savingThrowProficiencies.length; i++) {
                        var savingThrowProficiency = document.createElement("li");
                        savingThrowProficiency.appendChild(document.createTextNode(data.barbarian.savingThrowProficiencies[i]));
                        savingThrowProficiencies.appendChild(savingThrowProficiency);
                    }

                    var skillProfs = document.getElementById('skillProfsList');
                    document.getElementById('skillProfsHeader').style.display = "block";
                    for (var i = 0; i < data.barbarian.skillProficiencies.length; i++) {
                        var skillProf = document.createElement('li');
                        var skillProfCheckBox = document.createElement('input');
                        skillProfCheckBox.setAttribute('type', 'checkbox');
                        skillProfCheckBox.setAttribute('name', 'skillProfBox');
                        skillProfCheckBox.setAttribute('value', data.barbarian.skillProficiencies[i]);
                        skillProfCheckBox.setAttribute('id', data.barbarian.skillProficiencies[i]);
                        skillProf.setAttribute('id', data.barbarian.skillProficiencies[i]);
                        skillProf.appendChild(document.createTextNode(data.barbarian.skillProficiencies[i]));
                        skillProf.appendChild(skillProfCheckBox);
                        skillProfs.appendChild(skillProf);
                    }
                    var numberOfSkillProfs = 2;
                    document.getElementById("numberOfSkillsSpan").style.display = 'flex';
                    document.getElementById("numberOfSkills").textContent = numberOfSkillProfs.toString();
                    $(":checkbox[name='skillProfBox']").change(function () {
                        if ($(":checkbox[name='skillProfBox']:checked").length == numberOfSkillProfs)
                            $(':checkbox:not(:checked)').prop('disabled', true);
                        else
                            $(':checkbox:not(:checked)').prop('disabled', false);
                    });

                    $('#levelSelect').change(function () {
                        var levelSelect = $("#levelSelect :selected").val();
                        var levelFeatures = document.getElementById('levelFeaturesList');
                        var incrementalFeatures = document.getElementById('incrementalFeatures');
                        if (levelSelect == "1st Level") {
                            cleanUpFeatures();
                            cleanUpSubClass();
                            for (var i = 0; i < data.barbarian.firstLevel.features.length; i++) {
                                var levelFeature = document.createElement("li");
                                levelFeature.appendChild(document.createTextNode(data.barbarian.firstLevel.features[i]));
                                levelFeatures.appendChild(levelFeature);
                            }
                            for (var i = 0; i < data.barbarian.firstLevel.incrementalFeatures.length; i++) {
                                var incrementalFeature = document.createElement("li");
                                incrementalFeature.appendChild(document.createTextNode(data.barbarian.firstLevel.incrementalFeatures[i]));
                                incrementalFeatures.appendChild(incrementalFeature);
                            }
                        }

                        if (levelSelect == "2nd Level") {
                            cleanUpFeatures();
                            cleanUpSubClass();
                            for (var i = 0; i < data.barbarian.secondLevel.features.length; i++) {
                                var levelFeature = document.createElement("li");
                                levelFeature.appendChild(document.createTextNode(data.barbarian.secondLevel.features[i]));
                                levelFeatures.appendChild(levelFeature);
                            }
                            for (var i = 0; i < data.barbarian.secondLevel.incrementalFeatures.length; i++) {
                                var incrementalFeature = document.createElement("li");
                                incrementalFeature.appendChild(document.createTextNode(data.barbarian.secondLevel.incrementalFeatures[i]));
                                incrementalFeatures.appendChild(incrementalFeature);
                            }
                        }

                        if (levelSelect == "3rd Level") {
                            cleanUpFeatures();
                            cleanUpSubClass();
                            document.getElementById('subClass').style.display = 'block';
                            document.getElementById('subClassHeader').textContent = 'Primal Path';
                            document.getElementById('primalPathSelect').style.display = 'block';
                            for (var i = 0; i < data.barbarian.thirdLevel.features.length; i++) {
                                var levelFeature = document.createElement("li");
                                levelFeature.appendChild(document.createTextNode(data.barbarian.thirdLevel.features[i]));
                                levelFeatures.appendChild(levelFeature);
                            }
                            for (var i = 0; i < data.barbarian.thirdLevel.incrementalFeatures.length; i++) {
                                var incrementalFeature = document.createElement("li");
                                incrementalFeature.appendChild(document.createTextNode(data.barbarian.thirdLevel.incrementalFeatures[i]));
                                incrementalFeatures.appendChild(incrementalFeature);
                            }
                        }
                        if (levelSelect == "4th Level") {
                            cleanUpFeatures();
                            cleanUpSubClass();
                            document.getElementById('subClass').style.display = 'block';
                            document.getElementById('subClassHeader').textContent = 'Primal Path';
                            document.getElementById('primalPathSelect').style.display = 'block';
                            featPopUp();
                            for (var i = 0; i < data.barbarian.thirdLevel.features.length; i++) {
                                var levelFeature = document.createElement("li");
                                levelFeature.appendChild(document.createTextNode(data.barbarian.thirdLevel.features[i]));
                                levelFeatures.appendChild(levelFeature);
                            }
                            for (var i = 0; i < data.barbarian.thirdLevel.incrementalFeatures.length; i++) {
                                var incrementalFeature = document.createElement("li");
                                incrementalFeature.appendChild(document.createTextNode(data.barbarian.thirdLevel.incrementalFeatures[i]));
                                incrementalFeatures.appendChild(incrementalFeature);
                            }
                        }

                        $('#primalPathSelect').change(function () {
                            var subClassSelect = $('#primalPathSelect :selected').val();
                            var levelSelect = $("#levelSelect :selected").val();
                            var subClassFeatures = document.getElementById('subClassFeaturesList');

                            if (levelSelect == "3rd Level") {
                                if (subClassSelect == "Berserker") {
                                    cleanUpSubClassFeatures();
                                    var subClassText = document.getElementById('subClassDescription');
                                    subClassText.textContent = data.barbarian.thirdLevel.pathBerserkerDescription;
                                    var subClassHeader = document.getElementById('subClassFeaturesHeader');
                                    subClassHeader.textContent = 'Primal Path Features';
                                    for (var i = 0; i < data.barbarian.thirdLevel.pathBerserkerFeatures.length; i++) {
                                        var subClassFeature = document.createElement("li");
                                        subClassFeature.appendChild(document.createTextNode(data.barbarian.thirdLevel.pathBerserkerFeatures[i]));
                                        subClassFeatures.appendChild(subClassFeature);
                                    }

                                }
                                if (subClassSelect == "Totem Warrior") {
                                    cleanUpSubClassFeatures();
                                    var domainText = document.getElementById('subClassDescription');
                                    domainText.textContent = data.barbarian.thirdLevel.pathTotemDescription;
                                    var subClassHeader = document.getElementById('subClassFeaturesHeader');
                                    subClassHeader.textContent = 'Primal Path Features';
                                    for (var i = 0; i < data.barbarian.thirdLevel.pathTotemFeatures.length; i++) {
                                        var subClassFeature = document.createElement("li");
                                        subClassFeature.appendChild(document.createTextNode(data.barbarian.thirdLevel.pathTotemFeatures[i]));
                                        subClassFeatures.appendChild(subClassFeature);
                                    }
                                }
                            }
                        })
                    })
                }


                //+++BARD+++
                if (selectText == "Bard") {
                    cleanUp();
                    document.getElementById('levelSelect').style.display = 'block';
                    document.getElementById('levelSelectHeader').style.display = 'block';
                    var bardText = document.getElementById('classDescription');
                    bardText.textContent = data.bard.description;

                    // @ts-ignore
                    document.getElementById('classImg').src = data.bard.imageURL;

                    document.getElementById('itemProfsHeader').style.display = 'block';
                    var itemProficiencies = document.getElementById('classItemProfsList');
                    for (var i = 0; i < data.bard.itemProficiencies.length; i++) {
                        var itemProficiency = document.createElement("li");
                        itemProficiency.appendChild(document.createTextNode(data.bard.itemProficiencies[i]));
                        itemProficiencies.appendChild(itemProficiency);
                    }

                    document.getElementById('saveThrowProfsHeader').style.display = 'block';
                    var savingThrowProficiencies = document.getElementById('classSaveThrowProfsList');
                    for (var i = 0; i < data.bard.savingThrowProficiencies.length; i++) {
                        var savingThrowProficiency = document.createElement("li");
                        savingThrowProficiency.appendChild(document.createTextNode(data.bard.savingThrowProficiencies[i]));
                        savingThrowProficiencies.appendChild(savingThrowProficiency);
                    }

                    document.getElementById('skillProfsHeader').style.display = "block";
                    var skillProfs = document.getElementById('skillProfsList');
                    for (var i = 0; i < data.bard.skillProficiencies.length; i++) {
                        var skillProf = document.createElement('li');
                        var skillProfCheckBox = document.createElement('input');
                        skillProfCheckBox.setAttribute('type', 'checkbox');
                        skillProfCheckBox.setAttribute('name', 'skillProfBox');
                        skillProfCheckBox.setAttribute('value', data.bard.skillProficiencies[i]);
                        skillProf.appendChild(document.createTextNode(data.bard.skillProficiencies[i]));
                        skillProf.appendChild(skillProfCheckBox);
                        skillProfs.appendChild(skillProf);
                    }

                    var numberOfSkillProfs = 3;
                    document.getElementById("numberOfSkillsSpan").style.display = 'flex';
                    document.getElementById("numberOfSkills").textContent = numberOfSkillProfs.toString();
                    $(":checkbox[name='skillProfBox']").change(function () {
                        if ($(":checkbox[name='skillProfBox']:checked").length == 3)
                            $(':checkbox:not(:checked)').prop('disabled', true);
                        else
                            $(':checkbox:not(:checked)').prop('disabled', false);
                    });

                    $('#levelSelect').change(function () {
                        var levelSelect = $("#levelSelect :selected").val();
                        var levelFeatures = document.getElementById('levelFeaturesList');
                        var incrementalFeatures = document.getElementById('incrementalFeatures');
                        if (levelSelect == "1st Level") {
                            cleanUpFeatures();
                            cleanUpSubClass();
                            for (var i = 0; i < data.bard.firstLevel.features.length; i++) {
                                var levelFeature = document.createElement("li");
                                levelFeature.appendChild(document.createTextNode(data.bard.firstLevel.features[i]));
                                levelFeatures.appendChild(levelFeature);
                            }
                            for (var i = 0; i < data.bard.firstLevel.incrementalFeatures.length; i++) {
                                var incrementalFeature = document.createElement("li");
                                incrementalFeature.appendChild(document.createTextNode(data.bard.firstLevel.incrementalFeatures[i]));
                                incrementalFeatures.appendChild(incrementalFeature);
                            }
                        }

                        if (levelSelect == "2nd Level") {
                            cleanUpFeatures();
                            cleanUpSubClass();
                            for (var i = 0; i < data.bard.secondLevel.features.length; i++) {
                                var levelFeature = document.createElement("li");
                                levelFeature.appendChild(document.createTextNode(data.bard.secondLevel.features[i]));
                                levelFeatures.appendChild(levelFeature);
                            }
                            for (var i = 0; i < data.bard.secondLevel.incrementalFeatures.length; i++) {
                                var incrementalFeature = document.createElement("li");
                                incrementalFeature.appendChild(document.createTextNode(data.bard.secondLevel.incrementalFeatures[i]));
                                incrementalFeatures.appendChild(incrementalFeature);
                            }
                        }
                    })
                }

                //+++CLERIC+++
                if (selectText == "Cleric") {
                    cleanUp();
                    document.getElementById('levelSelect').style.display = 'block';
                    document.getElementById('levelSelectHeader').style.display = 'block';
                    var clericText = document.getElementById('classDescription');
                    clericText.textContent = data.cleric.description;

                    // @ts-ignore
                    document.getElementById('classImg').src = data.cleric.imageURL;

                    document.getElementById('itemProfsHeader').style.display = 'block';
                    var itemProficiencies = document.getElementById('classItemProfsList');
                    for (var i = 0; i < data.cleric.itemProficiencies.length; i++) {
                        var itemProficiency = document.createElement("li");
                        itemProficiency.appendChild(document.createTextNode(data.cleric.itemProficiencies[i]));
                        itemProficiencies.appendChild(itemProficiency);
                    }

                    document.getElementById('saveThrowProfsHeader').style.display = 'block';
                    var savingThrowProficiencies = document.getElementById('classSaveThrowProfsList');
                    for (var i = 0; i < data.cleric.savingThrowProficiencies.length; i++) {
                        var savingThrowProficiency = document.createElement("li");
                        savingThrowProficiency.appendChild(document.createTextNode(data.cleric.savingThrowProficiencies[i]));
                        savingThrowProficiencies.appendChild(savingThrowProficiency);
                    }

                    document.getElementById('skillProfsHeader').style.display = "block";
                    var skillProfs = document.getElementById('skillProfsList');
                    for (var i = 0; i < data.cleric.skillProficiencies.length; i++) {
                        var skillProf = document.createElement('li');
                        var skillProfCheckBox = document.createElement('input');
                        skillProfCheckBox.setAttribute('type', 'checkbox');
                        skillProfCheckBox.setAttribute('name', 'skillProfBox');
                        skillProfCheckBox.setAttribute('value', data.cleric.skillProficiencies[i]);
                        skillProf.appendChild(document.createTextNode(data.cleric.skillProficiencies[i]));
                        skillProf.appendChild(skillProfCheckBox);
                        skillProfs.appendChild(skillProf);
                    }

                    var numberOfSkillProfs = 2;
                    document.getElementById("numberOfSkillsSpan").style.display = 'flex';
                    document.getElementById("numberOfSkills").textContent = numberOfSkillProfs.toString();
                    $(":checkbox[name='skillProfBox']").change(function () {
                        if ($(":checkbox[name='skillProfBox']:checked").length == 2)
                            $(':checkbox:not(:checked)').prop('disabled', true);
                        else
                            $(':checkbox:not(:checked)').prop('disabled', false);
                    });

                    $('#levelSelect').change(function () {
                        var levelSelect = $("#levelSelect :selected").val();
                        var levelFeatures = document.getElementById('levelFeaturesList');
                        var incrementalFeatures = document.getElementById('incrementalFeatures');

                        if (levelSelect == "1st Level") {
                            cleanUpFeatures();
                            document.getElementById('subClass').style.display = 'block';
                            document.getElementById('subClassHeader').textContent = 'Divine Domain';
                            document.getElementById('divineDomainSelect').style.display = 'block';
                            for (var i = 0; i < data.cleric.firstLevel.features.length; i++) {
                                var levelFeature = document.createElement("li");
                                levelFeature.appendChild(document.createTextNode(data.cleric.firstLevel.features[i]));
                                levelFeatures.appendChild(levelFeature);
                            }
                            for (var i = 0; i < data.cleric.firstLevel.incrementalFeatures.length; i++) {
                                var incrementalFeature = document.createElement("li");
                                incrementalFeature.appendChild(document.createTextNode(data.cleric.firstLevel.incrementalFeatures[i]));
                                incrementalFeatures.appendChild(incrementalFeature);
                            }
                        }

                        if (levelSelect == "2nd Level") {
                            cleanUpFeatures();
                            document.getElementById('subClass').style.display = 'block';
                            document.getElementById('subClassHeader').textContent = 'Divine Domain';
                            document.getElementById('divineDomainSelect').style.display = 'block';
                            for (var i = 0; i < data.cleric.secondLevel.features.length; i++) {
                                var levelFeature = document.createElement("li");
                                levelFeature.appendChild(document.createTextNode(data.cleric.secondLevel.features[i]));
                                levelFeatures.appendChild(levelFeature);
                            }
                            for (var i = 0; i < data.cleric.secondLevel.incrementalFeatures.length; i++) {
                                var incrementalFeature = document.createElement("li");
                                incrementalFeature.appendChild(document.createTextNode(data.cleric.secondLevel.incrementalFeatures[i]));
                                incrementalFeatures.appendChild(incrementalFeature);
                            }
                        }
                    })

                    $('#divineDomainSelect').change(function () {
                        var domainSelect = $('#divineDomainSelect :selected').val();
                        var levelSelect = $("#levelSelect :selected").val();
                        var domainFeatures = document.getElementById('subClassFeaturesList');
                        var domainSpells = document.getElementById('subClassSpellsList');

                        if (levelSelect == "1st Level") {
                            if (domainSelect == "Knowledge") {
                                cleanUpSubClassFeatures();
                                var domainText = document.getElementById('subClassDescription');
                                domainText.textContent = data.cleric.firstLevel.knowledgeDomainDescription;
                                var subClassHeader = document.getElementById('subClassFeaturesHeader');
                                subClassHeader.textContent = 'Divine Domain Features';
                                var subClassSpellsHeader = document.getElementById('subClassSpellsHeader');
                                subClassSpellsHeader.textContent = 'Divine Domain Spells';
                                for (var i = 0; i < data.cleric.firstLevel.knowledgeDomainFeatures.length; i++) {
                                    var domainFeature = document.createElement("li");
                                    domainFeature.appendChild(document.createTextNode(data.cleric.firstLevel.knowledgeDomainFeatures[i]));
                                    domainFeatures.appendChild(domainFeature);
                                }

                                for (var i = 0; i < data.cleric.firstLevel.knowledgeDomainSpells.length; i++) {
                                    var domainSpell = document.createElement("li");
                                    domainSpell.appendChild(document.createTextNode(data.cleric.firstLevel.knowledgeDomainSpells[i]));
                                    domainSpells.appendChild(domainSpell);
                                }
                            }
                            if (domainSelect == "Life") {
                                cleanUpSubClassFeatures();
                                var domainText = document.getElementById('subClassDescription');
                                domainText.textContent = data.cleric.firstLevel.lifeDomainDescription;
                                var subClassHeader = document.getElementById('subClassFeaturesHeader');
                                subClassHeader.textContent = 'Divine Domain Features';
                                var subClassSpellsHeader = document.getElementById('subClassSpellsHeader');
                                subClassSpellsHeader.textContent = 'Divine Domain Spells';
                                for (var i = 0; i < data.cleric.firstLevel.lifeDomainFeatures.length; i++) {
                                    var domainFeature = document.createElement("li");
                                    domainFeature.appendChild(document.createTextNode(data.cleric.firstLevel.lifeDomainFeatures[i]));
                                    domainFeatures.appendChild(domainFeature);
                                }

                                for (var i = 0; i < data.cleric.firstLevel.lifeDomainSpells.length; i++) {
                                    var domainSpell = document.createElement("li");
                                    domainSpell.appendChild(document.createTextNode(data.cleric.firstLevel.lifeDomainSpells[i]));
                                    domainSpells.appendChild(domainSpell);
                                }
                            }
                            if (domainSelect == "Light") {
                                cleanUpSubClassFeatures();
                                var domainText = document.getElementById('subClassDescription');
                                domainText.textContent = data.cleric.firstLevel.lightDomainDescription;
                                var subClassHeader = document.getElementById('subClassFeaturesHeader');
                                subClassHeader.textContent = 'Divine Domain Features';
                                var subClassSpellsHeader = document.getElementById('subClassSpellsHeader');
                                subClassSpellsHeader.textContent = 'Divine Domain Spells';
                                for (var i = 0; i < data.cleric.firstLevel.lightDomainFeatures.length; i++) {
                                    var domainFeature = document.createElement("li");
                                    domainFeature.appendChild(document.createTextNode(data.cleric.firstLevel.lightDomainFeatures[i]));
                                    domainFeatures.appendChild(domainFeature);
                                }

                                for (var i = 0; i < data.cleric.firstLevel.lightDomainSpells.length; i++) {
                                    var domainSpell = document.createElement("li");
                                    domainSpell.appendChild(document.createTextNode(data.cleric.firstLevel.lightDomainSpells[i]));
                                    domainSpells.appendChild(domainSpell);
                                }
                            }
                            if (domainSelect == "Nature") {
                                cleanUpSubClassFeatures();
                                var domainText = document.getElementById('subClassDescription');
                                domainText.textContent = data.cleric.firstLevel.natureDomainDescription;
                                var subClassHeader = document.getElementById('subClassFeaturesHeader');
                                subClassHeader.textContent = 'Divine Domain Features';
                                var subClassSpellsHeader = document.getElementById('subClassSpellsHeader');
                                subClassSpellsHeader.textContent = 'Divine Domain Spells';
                                for (var i = 0; i < data.cleric.firstLevel.natureDomainFeatures.length; i++) {
                                    var domainFeature = document.createElement("li");
                                    domainFeature.appendChild(document.createTextNode(data.cleric.firstLevel.natureDomainFeatures[i]));
                                    domainFeatures.appendChild(domainFeature);
                                }

                                for (var i = 0; i < data.cleric.firstLevel.natureDomainSpells.length; i++) {
                                    var domainSpell = document.createElement("li");
                                    domainSpell.appendChild(document.createTextNode(data.cleric.firstLevel.natureDomainSpells[i]));
                                    domainSpells.appendChild(domainSpell);
                                }
                            }
                            if (domainSelect == "Tempest") {
                                cleanUpSubClassFeatures();
                                var domainText = document.getElementById('subClassDescription');
                                domainText.textContent = data.cleric.firstLevel.tempestDomainDescription;
                                var subClassHeader = document.getElementById('subClassFeaturesHeader');
                                subClassHeader.textContent = 'Divine Domain Features';
                                var subClassSpellsHeader = document.getElementById('subClassSpellsHeader');
                                subClassSpellsHeader.textContent = 'Divine Domain Spells';
                                for (var i = 0; i < data.cleric.firstLevel.tempestDomainFeatures.length; i++) {
                                    var domainFeature = document.createElement("li");
                                    domainFeature.appendChild(document.createTextNode(data.cleric.firstLevel.tempestDomainFeatures[i]));
                                    domainFeatures.appendChild(domainFeature);
                                }

                                for (var i = 0; i < data.cleric.firstLevel.tempestDomainSpells.length; i++) {
                                    var domainSpell = document.createElement("li");
                                    domainSpell.appendChild(document.createTextNode(data.cleric.firstLevel.tempestDomainSpells[i]));
                                    domainSpells.appendChild(domainSpell);
                                }
                            }
                            if (domainSelect == "Trickery") {
                                cleanUpSubClassFeatures();
                                var domainText = document.getElementById('subClassDescription');
                                domainText.textContent = data.cleric.firstLevel.trickeryDomainDescription; var subClassHeader = document.getElementById('subClassFeaturesHeader');
                                subClassHeader.textContent = 'Divine Domain Features';
                                var subClassSpellsHeader = document.getElementById('subClassSpellsHeader');
                                subClassSpellsHeader.textContent = 'Divine Domain Spells';
                                for (var i = 0; i < data.cleric.firstLevel.trickeryDomainFeatures.length; i++) {
                                    var domainFeature = document.createElement("li");
                                    domainFeature.appendChild(document.createTextNode(data.cleric.firstLevel.trickeryDomainFeatures[i]));
                                    domainFeatures.appendChild(domainFeature);
                                }

                                for (var i = 0; i < data.cleric.firstLevel.trickeryDomainSpells.length; i++) {
                                    var domainSpell = document.createElement("li");
                                    domainSpell.appendChild(document.createTextNode(data.cleric.firstLevel.trickeryDomainSpells[i]));
                                    domainSpells.appendChild(domainSpell);
                                }
                            }
                            if (domainSelect == "War") {
                                cleanUpSubClassFeatures();
                                var domainText = document.getElementById('subClassDescription');
                                domainText.textContent = data.cleric.firstLevel.warDomainDescription;
                                var subClassHeader = document.getElementById('subClassFeaturesHeader');
                                subClassHeader.textContent = 'Divine Domain Features';
                                var subClassSpellsHeader = document.getElementById('subClassSpellsHeader');
                                subClassSpellsHeader.textContent = 'Divine Domain Spells';
                                for (var i = 0; i < data.cleric.firstLevel.warDomainFeatures.length; i++) {
                                    var domainFeature = document.createElement("li");
                                    domainFeature.appendChild(document.createTextNode(data.cleric.firstLevel.warDomainFeatures[i]));
                                    domainFeatures.appendChild(domainFeature);
                                }

                                for (var i = 0; i < data.cleric.firstLevel.warDomainSpells.length; i++) {
                                    var domainSpell = document.createElement("li");
                                    domainSpell.appendChild(document.createTextNode(data.cleric.firstLevel.warDomainSpells[i]));
                                    domainSpells.appendChild(domainSpell);
                                }
                            }
                        }
                    })
                }
            })
        })
    }
}