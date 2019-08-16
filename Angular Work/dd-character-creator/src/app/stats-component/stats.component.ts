import { DataService } from "../service-component/service.component";
import { Component } from "../../../node_modules/@angular/core";
import * as $ from 'jquery';


@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css'],
    providers: [DataService]
})
export class StatsComponent {
    static globalStatsArray: any;
    static copyOfStatsArray: any;
    static statsArray: any;
    static randomStatsChosen = false;
    static userStatsChosen = false;
    static getStatsArray(): any {
        return this.globalStatsArray;
    }
    constructor() {
     }
    
    getStatsArray () : number[]
    {
        return StatsComponent.globalStatsArray;
    }
    randomStats() : void
    {
        StatsComponent.randomStatsChosen = true;
        document.getElementById("statsRandomList").style.display = "block";
        document.getElementById("randomButton").style.display = "none";
        document.getElementById("chooseButton").style.display = "none";
        document.getElementById("statsDescription").style.display = "none";
        
        var strStat = document.getElementById("strRndLabel").innerText;
        var dexStat = document.getElementById("dexRndLabel").innerText;
        var conStat = document.getElementById("conRndLabel").innerText;
        var intStat = document.getElementById("intRndLabel").innerText;
        var wisStat = document.getElementById("wisRndLabel").innerText;
        var chaStat = document.getElementById("chaRndLabel").innerText;
        StatsComponent.statsArray= [strStat, dexStat, conStat, intStat, wisStat, chaStat];

        for(var i = 0; i < StatsComponent.statsArray.length; i++)
        {
            var randomNumber = Math.floor(Math.random() * (19 - 4) + 4)
            StatsComponent.statsArray[i] = randomNumber.toString();
        }
        document.getElementById("strRndLabel").innerText = StatsComponent.statsArray[0];
        document.getElementById("dexRndLabel").innerText = StatsComponent.statsArray[1];
        document.getElementById("conRndLabel").innerText = StatsComponent.statsArray[2];
        document.getElementById("intRndLabel").innerText = StatsComponent.statsArray[3];
        document.getElementById("wisRndLabel").innerText = StatsComponent.statsArray[4];
        document.getElementById("chaRndLabel").innerText = StatsComponent.statsArray[5];
        var strStatNum = parseInt( StatsComponent.statsArray[0]);
        var dexStatNum = parseInt( StatsComponent.statsArray[1]);
        var conStatNum = parseInt( StatsComponent.statsArray[2]);
        var intStatNum = parseInt( StatsComponent.statsArray[3]);
        var wisStatNum = parseInt( StatsComponent.statsArray[4]);
        var chaStatNum = parseInt( StatsComponent.statsArray[5]);
        StatsComponent.globalStatsArray= [strStatNum, dexStatNum, conStatNum, intStatNum, wisStatNum, chaStatNum];
        StatsComponent.copyOfStatsArray= [strStatNum, dexStatNum, conStatNum, intStatNum, wisStatNum, chaStatNum];
    }

    static updateStats(statModifiers) : void
    {
        console.log(statModifiers);
        for (var i = 0; i < StatsComponent.globalStatsArray.length; i++)
        {
            StatsComponent.statsArray[i] = statModifiers[i]; 
        }
        if (this.randomStatsChosen == true)
        {
            document.getElementById("strRndLabel").innerText = statModifiers[0];
            document.getElementById("dexRndLabel").innerText = statModifiers[1];
            document.getElementById("conRndLabel").innerText = statModifiers[2];
            document.getElementById("intRndLabel").innerText = statModifiers[3];
            document.getElementById("wisRndLabel").innerText = statModifiers[4];
            document.getElementById("chaRndLabel").innerText = statModifiers[5];
        }

        if (this.userStatsChosen == true)
        {
            document.getElementById("strStatLabel").innerText = statModifiers[0];
            document.getElementById("dexStatLabel").innerText = statModifiers[1];
            document.getElementById("conStatLabel").innerText = statModifiers[2];
            document.getElementById("intStatLabel").innerText = statModifiers[3];
            document.getElementById("wisStatLabel").innerText = statModifiers[4];
            document.getElementById("chaStatLabel").innerText = statModifiers[5];
        }
    }
    
    userStats() : void
    {
        document.getElementById("statsChooseList").style.display = "block";
        document.getElementById("randomButton").style.display = "none";
        document.getElementById("chooseButton").style.display = "none";
        document.getElementById("statsDescription").style.display = "none";

    }

    submitUserStats() : void
    {
        StatsComponent.userStatsChosen = true;
        var strLabel = document.getElementById('strLabel');
        var dexLabel = document.getElementById('dexLabel');
        var conLabel = document.getElementById('conLabel');
        var wisLabel = document.getElementById('wisLabel');
        var intLabel = document.getElementById('intLabel');
        var chaLabel = document.getElementById('chaLabel');
        var currentValue;
        var legitStats;
        $('input[type="number"]').each(function(){
            currentValue = $(this).val();
            if(isNaN(currentValue)){
                alert("Please enter numbers into the fields");
                legitStats = false;
                return false;

            }
            else if(currentValue < 4 || currentValue > 18 || currentValue == 'e')
            {
                alert("Please enter valid stat numbers (Between 4 and 18)");
                legitStats = false;
                return false;
            }
            else if(currentValue==""){
                alert("Please fill out all fields");
                legitStats = false;
                return false;
                
            }
            else
            {
                legitStats = true;
            }
        })
        if (legitStats == true)
        {
            var strStatLabel = document.createElement("li");;
            strStatLabel.setAttribute("id", "strStatLabel");
            strStatLabel.setAttribute('class', 'statLabel');
            strStatLabel.innerText = $('#strStat').val().toString();
            $(strStatLabel).appendTo(strLabel);
            
            var dexStatLabel = document.createElement("li");;
            dexStatLabel.setAttribute("id", "dexStatLabel");
            dexStatLabel.setAttribute('class', 'statLabel');
            dexStatLabel.innerText = $('#dexStat').val().toString();
            $(dexStatLabel).appendTo(dexLabel);
            
            var conStatLabel = document.createElement("li");
            conStatLabel.setAttribute("id", "conStatLabel");
            conStatLabel.setAttribute('class', 'statLabel');
            conStatLabel.innerText = $('#conStat').val().toString();
            $(conStatLabel).appendTo(conLabel);
            
            var intStatLabel = document.createElement("li");
            intStatLabel.setAttribute("id", "intStatLabel");
            intStatLabel.setAttribute('class', 'statLabel');
            intStatLabel.innerText = $('#intStat').val().toString();
            $(intStatLabel).appendTo(intLabel);

            var wisStatLabel = document.createElement("li");
            wisStatLabel.setAttribute("id", "wisStatLabel");
            wisStatLabel.setAttribute('class', 'statLabel');
            wisStatLabel.innerText = $('#wisStat').val().toString();
            $(wisStatLabel).appendTo(wisLabel);

            var chaStatLabel = document.createElement("li");
            chaStatLabel.setAttribute("id", "chaStatLabel");
            chaStatLabel.setAttribute('class', 'statLabel');
            chaStatLabel.innerText = $('#chaStat').val().toString();
            $(chaStatLabel).appendTo(chaLabel);

            $('#strStat').remove();
            $('#dexStat').remove();
            $('#conStat').remove();
            $('#wisStat').remove();
            $('#intStat').remove();
            $('#chaStat').remove();        
            document.getElementById("submitStatsBtn").style.display = "none";
            StatsComponent.statsArray= [0, 0, 0, 0, 0, 0];

            StatsComponent.statsArray[0] = document.getElementById("strStatLabel").innerText;
            StatsComponent.statsArray[1] = document.getElementById("dexStatLabel").innerText;
            StatsComponent.statsArray[2] = document.getElementById("conStatLabel").innerText;
            StatsComponent.statsArray[3] = document.getElementById("intStatLabel").innerText;
            StatsComponent.statsArray[4] = document.getElementById("wisStatLabel").innerText;
            StatsComponent.statsArray[5] = document.getElementById("chaStatLabel").innerText;
            var strStatNum = parseInt( StatsComponent.statsArray[0]);
            var dexStatNum = parseInt( StatsComponent.statsArray[1]);
            var conStatNum = parseInt( StatsComponent.statsArray[2]);
            var intStatNum = parseInt( StatsComponent.statsArray[3]);
            var wisStatNum = parseInt( StatsComponent.statsArray[4]);
            var chaStatNum = parseInt( StatsComponent.statsArray[5]);
            StatsComponent.globalStatsArray= [strStatNum, dexStatNum, conStatNum, intStatNum, wisStatNum, chaStatNum];
            StatsComponent.copyOfStatsArray= [strStatNum, dexStatNum, conStatNum, intStatNum, wisStatNum, chaStatNum];
            console.log(StatsComponent.globalStatsArray);
        }
    }
}