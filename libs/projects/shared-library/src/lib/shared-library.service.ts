import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedLibraryService {
  sharedData$ = new BehaviorSubject<string>('Hello World!');
}
