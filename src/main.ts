import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
