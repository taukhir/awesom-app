import {Component} from "@angular/core";

@Component({
    selector : "databinding",
    templateUrl : "./databinding.component.html",
    styles : [` p {
        color : red
    }`]
})

export class DataBindingComponent {

    public name : string;
    public count : number;
    public isPanelVisible:boolean


    constructor(){
        this.name = "Angula app";
        this.count = 10;
        this.isPanelVisible = false;
    }


    inc(evnt: any){
        this.count ++;
        console.log(evnt);
    }

    change(event : any){
        this.count =event.target.value;
        console.log(this.count);
    }

}