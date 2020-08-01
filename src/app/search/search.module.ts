import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [SearchBarComponent, SearchResultsComponent],
  imports: [CommonModule, SearchRoutingModule],
  exports: [SearchBarComponent],
})
export class SearchModule {}
