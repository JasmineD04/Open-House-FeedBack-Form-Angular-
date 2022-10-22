import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  
  FeedBackForm!:FormGroup;
  ngOnInit(): void {
    this.createForm();
  }

  get formControls(){
    return this.FeedBackForm.controls
  }

  createForm(){
      this.FeedBackForm=new FormGroup({
      firstName:new FormControl(),
      surName:new FormControl(),
      phoneNo:new FormControl(),
      email:new FormControl(),
      hear:new FormControl(),
      rating:new FormControl(),
      most:new FormControl(),
      least:new FormControl(),



    })
  }

  submitForm(){
    console.log("hii")
  }

}
