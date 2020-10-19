import { Component, OnInit } from '@angular/core';
import {JSONPlaceholderService} from '../services/jsonplaceholder.service'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  data:Array<any>

  constructor(private JSONPlaceholder:JSONPlaceholderService){
    this.data = new Array<any>()
  }

  getDataFromAPI() {
    this.JSONPlaceholder.getData().subscribe((data) => {
      console.log(data)
      this.data = data
    })
  }

  ngOnInit(): void {
  }

}
