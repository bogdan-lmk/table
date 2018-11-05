import { Component, OnInit } from '@angular/core';
import Color from '../interfaces/color';
import SortColors from '../interfaces/sort-colors';
import ColorService from '../services/color.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public colorsArray: Array<Color>;

  public sortState: SortColors = {
    sortField: SortFields.hexValue,
    sortDirection: SortDirection.asc
  };

  constructor(
    public colorService: ColorService
  ) { }

  ngOnInit() {
    this.updateTable();
  }

  public updateTable (sortField?: string) {

    if (sortField) {
      this.sortState.sortDirection = this.sortState.sortDirection  ? SortDirection.asc : SortDirection.desc;
      if (this.sortState.sortField !== sortField) this.sortState.sortDirection = SortDirection.asc;
      this.sortState.sortField = sortField;
    }

    this.colorsArray = this.colorService.getColors(this.sortState.sortField, this.sortState.sortDirection);
  }

}

enum SortDirection {
  asc = 0,
  desc = 1
}

enum SortFields {
  colorName = 'colorName',
  hexValue = 'hexValue'
}

