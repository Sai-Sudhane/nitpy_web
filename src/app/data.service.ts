// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private sharedData1: string = '';
  private sharedData2: string = '';

  setSharedData1(data: string) {
    this.sharedData1 = data;
  }

  getSharedData1(): string {
    return this.sharedData1;
  }

  setSharedData2(data: string) {
    this.sharedData2 = data;
  }

  getSharedData2(): string {
    return this.sharedData2;
  }
}
