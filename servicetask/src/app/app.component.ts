import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {EmployeesService} from './employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employeeslist=[];
  public updateemployee=[];
  ref1:string;
  ref2:string;
  ref3:string;
  
  ngOnInit(){}
  constructor (private empService:EmployeesService){} 

  showDetails(){
    this.updateemployee=[]
  for(let i=0;i<this.empService.details.length;i++)
  {
  this.updateemployee.push(this.empService.details[i]);
    }
    console.log(this.updateemployee);
    
  }
  
  onSubmit(){
    this.updateemployee.push({Name:this.ref1, Tech:this.ref2, Company: this.ref3 });
      console.log(this.ref1,this.ref2,this.ref3);
      console.log(this.updateemployee);
  }
  // onSubmit(){
  //   this.employeeslist=this.empService.employeesService();
  //   this.employeeslist.push({name:this.ref1, role:this.ref2, company: this.ref3 });
  //  console.log(this.ref1,this.ref2,this.ref3);
  //  console.log(this.employeeslist);
  // }
  
  customTrackBy(index: number, obj: any): any {
    return index;
  }

  onEdit(index){
    
    this.ref1=this.updateemployee[index].Name;
    this.ref2=this.updateemployee[index].Tech;
    this.ref3=this.updateemployee[index].Company;
  }
  
  
}
      
  
  