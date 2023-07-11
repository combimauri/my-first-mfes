import { Component } from '@angular/core';
import { SharedLibraryService } from 'shared-library';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.css'],
})
export class FeatureOneComponent {
  data$ = this.sharedService.sharedData$;

  constructor(private sharedService: SharedLibraryService) {}

  updateSharedData(): void {
    this.sharedService.sharedData$.next('Hello from the MFE');
  }
}
