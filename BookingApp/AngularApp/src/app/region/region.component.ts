import { Component, OnInit } from '@angular/core';
import { Region } from '../model/region.model';

import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
})

export class RegionComponent implements OnInit {
    regions : Region[];
    
  constructor(private regionService: RegionService) { 
  }

  getRegion(): void {
      this.regionService
      .getRegion()
      .then(r => {this.regions = r; debugger});
  }

  ngOnInit() {
    this.getRegion();
  }
}