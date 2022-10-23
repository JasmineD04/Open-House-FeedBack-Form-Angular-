import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  starRating=0

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
      exterior:new FormControl(),
      interior:new FormControl(),
      location:new FormControl(),
      price:new FormControl(),
      amenities:new FormControl(),
      most:new FormControl(),
      least:new FormControl(),
      starRating:new FormControl(),



    })
  }

  submitForm(){
    console.log("hii")
  }

}
