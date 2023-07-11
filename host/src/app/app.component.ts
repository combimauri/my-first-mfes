import { Component } from '@angular/core';
import { SharedLibraryService } from 'shared-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data$ = this.sharedService.sharedData$;

  constructor(private sharedService: SharedLibraryService) {}
}
