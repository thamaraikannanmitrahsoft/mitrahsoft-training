import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrl: './mobile-details.component.scss'
})
export class MobileDetailsComponent implements OnInit {
  public filteredMobileDetails: any[] = []
  public searchText: string = ''
  public checkbox: any[] = [];
  public mobileDetails: any = {
    brands: [
      {
        brand: 'Apple',
        models: [
          {
            name: 'iphone 13', price: 69990, processor: 'A 15', colors: ['green', 'pink', 'blue', 'midnight'], storageCapacity:
              [128, 256, 512]
          },
          {
            name: 'iphone se', price: 43900, processor: 'A 15', colors: ['red', 'midnight'], storageCapacity: [64, 128,
              256,]
          },
          {
            name: 'iphone 12', price: 45990, processor: 'A 14', colors: ['green', 'purple', 'blue', 'black'], storageCapacity:
              [64, 128, 256,]
          },
        ]
      },
      {
        brand: 'Samsung',
        models: [
          {
            name: 'S22', price: 72999, processor: 'snapdragon 8 gen1', colors: ['phantom green', 'phantom black', 'blue'],
            storageCapacity: [128, 256]
          },
          {
            name: 'Z fold', price: 157999, processor: 'snapdragon 8 gen1', colors: ['phantom green', 'phantom black'],
            storageCapacity: [128, 256, 512]
          },
          {
            name: 'Z flip', price: 84999, processor: 'snapdragon 8 gen1', colors: ['cream', 'phantom black'],
            storageCapacity: [128, 256, 512]
          },
        ]
      },
      {
        brand: 'Oneplus',
        models: [
          {
            name: 'OnePlus 9', price: 44999, processor: 'Snapdragon 888', colors: ['mist', 'phantom black',],
            storageCapacity: [128, 256]
          },
          {
            name: 'OnePlus 9RT', price: 42999, processor: 'Snapdragon 888', colors: ['phantom green', 'phantom black'],
            storageCapacity: [128, 256]
          },
          {
            name: 'nord CE2', price: 23999, processor: 'Snapdragon 666', colors: ['blue', 'mirror'], storageCapacity:
              [128]
          },
        ]
      },
      {
        brand: 'Vivo',
        models: [
          {
            name: 'X70 Pro', price: 46999, processor: 'snapdragon 8 gen1', colors: ['black', 'aurora dawn',],
            storageCapacity: [128, 256]
          },
          {
            name: 'V23 Pro', price: 38990, processor: 'Snapdragon 888', colors: ['gold', 'black'], storageCapacity: [128,
              256]
          },
          {
            name: 'S1 Pro', price: 18990, processor: 'Snapdragon 888', colors: ['white', 'blue', 'black'], storageCapacity:
              [128]
          },
        ]
      },
    ]
  }
  ngOnInit() {
    this.filteredMobileDetails = this.mobileDetails.brands;
    this.checkbox = [
      {
        value: 64,
        checked: true,
      },
      {
        value: 128,
        checked: true,
      },
      {
        value: 256,
        checked: true,
      },
      {
        value: 512,
        checked: true,
      }
    ]
  }
  filterData() {
    const selectedValues = this.checkbox.filter(item => item.checked).map(item => item.value);
    const searchTextLower = this.searchText.toLowerCase();
    this.filteredMobileDetails = this.mobileDetails.brands.map((brand: { brand: string; models: any[]; }) => {
      const filteredModels = brand.models.filter((model: { name: string; processor: string; storageCapacity: number[]; }) => {
        const matcheSearch = model.name.toLowerCase().includes(searchTextLower) ||
          model.processor.toLowerCase().includes(searchTextLower) ||
          brand.brand.toLowerCase().includes(searchTextLower);
        const matchStorage = model.storageCapacity.filter(storageValue => selectedValues.includes(storageValue));
        return matcheSearch && matchStorage.length > 0;
      })
        .map(model => {
          const filteredStorage = model.storageCapacity.filter((storageValue: number[]) =>
            selectedValues.includes(storageValue)
          );
          return {
            ...model,
            storageCapacity: filteredStorage
          };
        });
      if (filteredModels.length > 0) {
        return {
          ...brand,
          models: filteredModels
        };
      }
      return 0;
    })
      .filter((brand: number) => brand !== 0);
  }
}