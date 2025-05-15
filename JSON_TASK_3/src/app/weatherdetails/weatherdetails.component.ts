import { Component } from '@angular/core';
@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrl: './weatherdetails.component.scss'
})
export class WeatherdetailsComponent {
  public filteredWeatherDetails: any[] = [];
  public selectedRole: string[] = [];
  checkbox: { id: number; title: string; checked: boolean; }[] = [];
  ngOnInit() {
    this.filteredWeatherDetails = this.weatherDetails;
    this.checkbox = [
      {
        id: 1,
        title: 'India',
        checked: true,
      },
      {
        id: 2,
        title: 'Spain',
        checked: true,
      },
      {
        id: 3,
        title: 'Italy',
        checked: true,
      },
      {
        id: 3,
        title: 'South Korea',
        checked: true,
      },
      {
        id: 3,
        title: 'Russia',
        checked: true,
      }
    ]
    this.sortTemperature();
  }
  public weatherDetails: any[] = [
    {
      country: 'India',
      cities: [
        {
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
            }
          ],
          "main": {
            "temp": 28.87,
            "feels_like": 32.81,
            "temp_min": 28.87,
            "temp_max": 28.99,
            "pressure": 1013,
            "humidity": 72
          },
          "sys": {
            "type": 2,
            "id": 2012809,
            "country": "IN",
            "sunrise": 1646787031,
            "sunset": 1646830126
          },
          "timezone": 19800,
          "id": 1264527,
          "name": "Chennai",
        },
        {
          "weather": [
            {
              "id": 711,
              "main": "Smoke",
              "description": "smoke",
            }
          ],
          "main": {
            "temp": 30.99,
            "feels_like": 32.22,
            "temp_min": 29.94,
            "temp_max": 30.99,
            "pressure": 1008,
            "humidity": 48
          },
          "sys": {
            "type": 1,
            "id": 9052,
            "country": "IN",
            "sunrise": 1646788931,
            "sunset": 1646831792
          },
          "timezone": 19800, "id": 1275339,
          "name": "Mumbai",
        },
        {
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
            }
          ],
          "main": {
            "temp": 29.99,
            "feels_like": 35.01,
            "temp_min": 29.99,
            "temp_max": 29.99,
            "pressure": 1007,
            "humidity": 70,
          },
          "sys": {
            "type": 1,
            "id": 9211,
            "country": "IN",
            "sunrise": 1646787934,
            "sunset": 1646831152
          },
          "timezone": 19800,
          "id": 1273874,
          "name": "Kochi",
        }
      ]
    },
    {
      country: 'spain',
      cities: [
        {
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
            }
          ],
          "main": {
            "temp": 11.67,
            "feels_like": 10.46,
            "temp_min": 8.51,
            "temp_max": 13.34,
            "pressure": 1021,
            "humidity": 60
          },
          "sys": {
            "type": 2,
            "id": 2007545,
            "country": "ES",
            "sunrise": 1646807792,
            "sunset": 1646849669
          },
          "timezone": 3600,
          "id": 3117735,
          "name": "Madrid",
        },
        {
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
            }
          ],
          "main": {
            "temp": 13.6,
            "feels_like": 13,
            "temp_min": 12.7,
            "temp_max": 16.22,
            "pressure": 1023,
            "humidity": 76
          },
          "sys": {
            "type": 2,
            "id": 2003688,
            "country": "ES",
            "sunrise": 1646806415,
            "sunset": 1646848232
          },
          "timezone": 3600,
          "id": 3128760,
          "name": "Barcelona",
        },
        {
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
            }
          ],
          "main": {
            "temp": 17.53,
            "feels_like": 16.96,
            "temp_min": 16.95,
            "temp_max": 19.43,
            "pressure": 1020,
            "humidity": 62
          },
          "sys": {
            "type": 2,
            "id": 2011488,
            "country": "ES",
            "sunrise": 1646808253,
            "sunset": 1646850299
          },
          "timezone": 3600,
          "id": 2510911,
          "name": "Seville",
        }
      ]
    },
    {
      country: 'Italy',
      cities: [
        {
          "weather": [
            {
              "id": 804,
              "main": "Clouds", "description": "overcast clouds",
            }
          ],
          "main": {
            "temp": 10.25,
            "feels_like": 9.84,
            "temp_min": 8.48,
            "temp_max": 12.46,
            "pressure": 1013,
            "humidity": 96
          },
          "sys": {
            "type": 2,
            "id": 2009645,
            "country": "US",
            "sunrise": 1646827160,
            "sunset": 1646869395
          },
          "timezone": -18000,
          "id": 4219762,
          "name": "Rome",
        },
        {
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
            }
          ],
          "main": {
            "temp": 21.56,
            "feels_like": 22.15,
            "temp_min": 20.15,
            "temp_max": 22.77,
            "pressure": 1016,
            "humidity": 91
          },
          "sys": {
            "type": 2,
            "id": 2005161,
            "country": "US",
            "sunrise": 1646999019,
            "sunset": 1647041771
          },
          "timezone": -18000,
          "id": 4176380,
          "name": "Venice",
        },
        {
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
            }
          ],
          "main": {
            "temp": 11.33,
            "feels_like": 9.54,
            "temp_min": 9.64,
            "temp_max": 13.5,
            "pressure": 1023, "humidity": 39
          },
          "sys": {
            "type": 2,
            "id": 2012644,
            "country": "IT",
            "sunrise": 1646804859,
            "sunset": 1646846415
          },
          "timezone": 3600,
          "id": 3173435,
          "name": "Milan",
        }
      ]
    },
    {
      country: 'south korea',
      cities: [
        {
          "weather": [
            {
              "id": 701,
              "main": "Mist",
              "description": "mist",
            }
          ],
          "main": {
            "temp": 2.38,
            "feels_like": 2.38,
            "temp_min": 1.93,
            "temp_max": 7.01,
            "pressure": 1023,
            "humidity": 100
          },
          "sys": {
            "type": 1,
            "id": 8093,
            "country": "KR",
            "sunrise": 1646776513,
            "sunset": 1646818502
          },
          "timezone": 32400,
          "id": 1843561,
          "name": "Incheon",
        },
        {
          "weather": [
            {
              "id": 701,
              "main": "Mist",
              "description": "mist",
            }
          ],
          "main": {
            "temp": 5.16,
            "feels_like": 3.49,
            "temp_min": 1.69,
            "temp_max": 6.78,
            "pressure": 1022,
            "humidity": 70
          },
          "sys": {
            "type": 1, "id": 8105,
            "country": "KR",
            "sunrise": 1646776382,
            "sunset": 1646818364
          },
          "timezone": 32400,
          "id": 1835848,
          "name": "Seoul",
        },
        {
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
            }
          ],
          "main": {
            "temp": 8.99,
            "feels_like": 7.96,
            "temp_min": 8.99,
            "temp_max": 9.08,
            "pressure": 1023,
            "humidity": 66
          },
          "sys": {
            "type": 1,
            "id": 8086,
            "country": "KR",
            "sunrise": 1646775821,
            "sunset": 1646817935
          },
          "timezone": 32400,
          "id": 1838524,
          "name": "Busan",
        }
      ]
    },
    {
      country: 'russia',
      cities: [
        {
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
            }
          ],
          "main": {
            "temp": -3.92,
            "feels_like": -7.02,
            "temp_min": -3.92,
            "temp_max": -3.92,
            "pressure": 1034,
            "humidity": 33
          },
          "sys": {
            "type": 1,
            "id": 8926,
            "country": "RU",
            "sunrise": 1646800471,
            "sunset": 1646840688
          },
          "timezone": 10800,
          "id": 498817,
          "name": "Saint Petersburg",
        },
        {
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
            }
          ],
          "main": {
            "temp": -5.78,
            "feels_like": -11.86,
            "temp_min": -5.9,
            "temp_max": -5.25,
            "pressure": 1028,
            "humidity": 73,
          },
          "sys": {
            "type": 1,
            "id": 9027,
            "country": "RU",
            "sunrise": 1646798472,
            "sunset": 1646839159
          },
          "timezone": 10800,
          "id": 524901,
          "name": "Moscow",
        },
        {
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
            }
          ],
          "main": {
            "temp": -13.39,
            "feels_like": -19.58,
            "temp_min": -13.39,
            "temp_max": -13.39,
            "pressure": 1029,
            "humidity": 61
          },
          "sys": {
            "type": 1,
            "id": 8958,
            "country": "RU",
            "sunrise": 1646787579,
            "sunset": 1646828304
          },
          "timezone": 25200,
          "id": 1496747,
          "name": "Novosibirsk",
        }
      ]
    }
  ]
  getColor(value: number) {
    if (value <= 10) {
      return 'blue';
    }
    else if (value <= 20) {
      return 'orange';
    }
    else {
      return 'red';
    }
  }
  filterData() {
    this.selectedRole = this.checkbox.filter(item => item.checked).map(item => item.title.toLowerCase());
    this.filteredWeatherDetails = this.weatherDetails.filter((details) => {
      const filteredCountries = this.selectedRole.toString().includes(details.country.toLowerCase())
      return filteredCountries;
    })
  }
  sortTemperature() {
    this.filteredWeatherDetails.map((details: any) => {
      details.cities.map((value: any) => details.cities.sort((valueOne: any, valueTwo: any) => valueOne.main.temp - valueTwo.main.temp))
    })
  }
}