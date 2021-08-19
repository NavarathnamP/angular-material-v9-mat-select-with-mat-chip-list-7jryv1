import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
  styleUrls: ['select-multiple-example.css'],
})
export class SelectMultipleExample {
  selectedRegion = new FormControl([]);
  //toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  regions=[{
    "region_id":"1",
    "region_name":"IND"
  },
  {
    "region_id":"2",
    "region_name":"USA"
  },
  {
    "region_id":"3",
    "region_name":"Global"
  },]

  
  onToppingRemoved(topping: string) {
    const toppings = this.selectedRegion.value as string[];
    this.removeFirst(toppings, topping);
    this.selectedRegion.setValue(toppings); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */