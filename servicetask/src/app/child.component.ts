import { Component, Input } from '@angular/core';
import {EmployeesService} from './employees.service';

@Component ({
selector : 'app-child',
templateUrl : './child.component.html',
styleUrls : ['./child.component.css']
})


export class ChildComponent
{
    @Input() received;
    
    constructor (private empService:EmployeesService){
        console.log(this.received);

    } 

}