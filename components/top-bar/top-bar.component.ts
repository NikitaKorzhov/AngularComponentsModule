import { Component,EventEmitter, Input, OnInit,Output } from '@angular/core';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() locked:boolean
  @Input() text:string;
@Output() out=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public outB(){
    this.out.emit();
  }

}
