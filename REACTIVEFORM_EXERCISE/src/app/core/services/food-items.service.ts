import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodItemsService {
  foodTiming = [
    { id: 1, value: 'Breakfast' },
    { id: 2, value: 'Lunch' },
    { id: 3, value: 'Dinner' }
  ]
  foodPreference = [
    { id: 1, label: 'Idly', timingId: 1 },
    { id: 2, label: 'Dosa', timingId: 1 },
    { id: 3, label: 'Pongal', timingId: 1 },
    { id: 4, label: 'Meals', timingId: 2 },
    { id: 5, label: 'Biryani', timingId: 2 },
    { id: 6, label: 'Curd Rice', timingId: 2 },
    { id: 7, label: 'Chappathi', timingId: 3 },
    { id: 8, label: 'Parotta', timingId: 3 },
    { id: 9, label: 'Fried Rice', timingId: 3 }
  ]
}
