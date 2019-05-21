import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile=null;
  constructor(private http: HttpClient){}
  onfileselected(event){
    this.selectedFile=event.target.files[0];
  }
 onUpload(event)
 {
  console.log(event); 
 }
}
    