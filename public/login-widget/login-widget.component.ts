import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {WebServiceService} from "../../services/web-service.service"
@Component({
  selector: 'app-login-widget',
  templateUrl: './login-widget.component.html',
  styleUrls: ['./login-widget.component.scss']
})
export class LoginWidgetComponent implements OnInit {
@Input() url;
@Output() done:EventEmitter<any>=new EventEmitter<any>()
public error =false
  constructor(private web:WebServiceService) { }

  ngOnInit(): void {
  }
  async sigIn(login){
    let r=await this.web.auntUser(this.url, login.username, login.password).toPromise()
    if(r["isSucceeded"]){
    //  window.location.href="/"
    }else{
      this.error=true
    }
    this.done.emit(r);
    //this.error=true;
    
  }
}
