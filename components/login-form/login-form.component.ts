import { Component,EventEmitter, Input, OnInit,Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() error=false
  public username: NgModel;
  public password: string;
  public register: boolean = false;
  public ok: boolean = false
  firstFormGroup: FormGroup;
  @Output() inputSliderValueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() sigIn=new EventEmitter<any>()

  constructor(private _formBuilder: FormBuilder) { }

  public async l() {
    //console.log(this.firstFormGroup.errors)
    if (this.firstFormGroup.valid) {
      let y =  this.sigIn.emit({username:this.username,password:this.password})
      if (!this.error) {
        this.register = true
        this.ok = true
      } else {
        this.register = true
        this.ok = false
      }
    }
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      login: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
    });

  }

}