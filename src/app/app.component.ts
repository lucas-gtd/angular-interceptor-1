import { Component, OnInit } from '@angular/core';
import { LogInterceptor } from './core/log.interceptor';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'interceptor';
  constructor(private service: RequestService) {}
  ngOnInit(): void {
    this.service.getData();
  }
}
