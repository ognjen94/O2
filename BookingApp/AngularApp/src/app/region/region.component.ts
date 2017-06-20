import { Component, OnInit } from '@angular/core';
import { Region } from '../model/region.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
})

export class RegionComponent implements OnInit {
    regions : Region[];
    selectedRegion: Region;
    
  constructor(private regionService: RegionService,
    private router: Router) { 
  }

  getRegion(): void {
      this.regionService
      .getRegion()
      .then(r => {this.regions = r; debugger});
  }

  deletePlace(r : Region) : void {
    this.regionService
    .deleteRegion(r)
    .then(() => {
      this.regions = this.regions.filter(a => a !== r);
      if (this.selectedRegion === r) {this.selectedRegion = null; }
    });
    }

  goToAddRegion(): void {
    this.router.navigate(['/add-region']);
  }

  goToUpdateRegion(r : Region) : void {
    this.router.navigate(['/update-region', this.selectedRegion.Id]);
  }

   onSelect(r : Region) : void {
    this.selectedRegion = r;
  }

  ngOnInit() {
    this.getRegion();
  }
}