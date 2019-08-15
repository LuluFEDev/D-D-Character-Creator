import { Component, Injectable, OnInit } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import * as $ from 'jquery';
import { Subject, Observable } from "../../../node_modules/rxjs";

@Injectable()
export class DataService {

    statsArray : number;
    private raceSource = new Subject<String>();
    private nameSource = new Subject<String>();

    race$ = this.raceSource.asObservable();
    name$ = this.nameSource.asObservable();

    static printRace(race)
    {
        
    }

    race(race:string)
    {
        this.raceSource.next(race);
    }

    name(name:string)
    {
        this.nameSource.next(name);
    }
}