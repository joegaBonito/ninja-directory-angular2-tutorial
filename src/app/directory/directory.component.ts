import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoggingService} from '../logging.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService,DataService]
})
export class DirectoryComponent implements OnInit {
  ninjas = [];
  bool = null;

  constructor(private logger: LoggingService, private dataService:DataService) {}

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.ninjas = data
    )
  }

}
