import { Injectable } from '@angular/core';
import Color from '../interfaces/color';
import * as _ from  'lodash';

@Injectable({
  providedIn: 'root'
})
export default class ColorService {

  public colorsArray: Array<Color>;

  constructor() {
    this.colorsArray = [
      {
        "colorName": "red",
        "hexValue": "#f00"
      },
      {
        "colorName": "green",
        "hexValue": "#0f0"
      },
      {
        "colorName": "blue",
        "hexValue": "#00f"
      },
      {
        "colorName": "cyan",
        "hexValue": "#0ff"
      },
      {
        "colorName": "magenta",
        "hexValue": "#f0f"
      },
      {
        "colorName": "yellow",
        "hexValue": "#ff0"
      },
      {
        "colorName": "black",
        "hexValue": "#000"
      }
    ];
  };

  public getColors (sortField: string, sortDirection: number): Array<Color> {
    return _.orderBy(this.colorsArray, [sortField], [sortDirection === 1 ? 'desc' : 'asc']);
  }

}
