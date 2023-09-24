import { Component,ViewChild,ElementRef } from '@angular/core';
import { FormControl,FormGroup,FormArray,Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  studentDetails:FormGroup; 


 

  constructor(private fb:FormBuilder){
    
    this.studentDetails=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      Gender:['',Validators.required],
      location:['',Validators.required],
      address:['',[Validators.required,Validators.minLength(6),Validators.maxLength(150)]],
      skills1:false,
      skills2:false,
      skills3:false,

      })

  }

  checkboxarray=[];
  finalarray:any =[];
  temp:boolean= false;
  
  serial:number =1;

  
  add(){
    this.temp=true;
    if(this.studentDetails.valid){
    let data:any = this.studentDetails.value;
    if(data.skills1){
      data.skills1 = "HTML";
    }
    else{
      data.skills1 = "";

    }
    if(data.skills2){
      data.skills2="JAVA"

    }
    else{
      data.skills2 = "";

    }
    if(data.skills3){
      data.skills3="ANGULAR"

    }
    else{
      data.skills3 = "";

    }
    this.finalarray.push(data);
    this.clear();
    this.temp=false;
   
  }
}


 clear(){
  this.studentDetails.reset();
  this.temp=false;
  }
  
  edit(p:any){
     this.studentDetails.get('name')?.setValue(p.name);
     this.studentDetails.get('Gender')?.setValue(p.Gender);
     this.studentDetails.get('location')?.setValue(p.location);
     this.studentDetails.get('address')?.setValue(p.address);
     this.studentDetails.get('address')?.setValue(p.address);
     if(p.skills1!=' ' || p.skills2!='' || p.skills3!='')
     {
     this.studentDetails.get('skills1')?.setValue(p.skills1);
     this.studentDetails.get('skills2')?.setValue(p.skills2);
     this.studentDetails.get('skills3')?.setValue(p.skills3);
     }

     }
}




  
