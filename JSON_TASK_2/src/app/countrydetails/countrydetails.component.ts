import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrl: './countrydetails.component.scss'
})
export class CountrydetailsComponent implements OnInit {
  public selectedRadio: string = '';
  public searchText: string = '';
  public filteredCountries: any[] = [];
  public sortedArray: number[] = []
  public countries: any[] = [
    {
      "name": {
        "common": "Ireland",
        "official": "Republic of Ireland",
      },
      "cca2": "IE",
      "ccn3": "372",
      "cca3": "IRL",
      "cioc": "IRL",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Dublin"
      ],
      "region": "Europe",
      "subregion": "Northern Europe",
      "languages": [
        "English",
        "Irish"
      ],
      "latlng": [
        53.0,
        -8.0
      ],
      "landlocked": false,
      "borders": [
        "GBR"
      ],
      "area": 70273.0,
      "population": 4994724,
      "car": {
        "signs": [
          "IRL"
        ],
        "side": "left"
      },
      "timezones": [
        "UTC"
      ],
      "continents": [
        "Europe"
      ],
      "startOfWeek": "monday",
    },
    {
      "name": {
        "common": "India",
        "official": "Republic of India",
      },
      "cca2": "IN",
      "ccn3": "356",
      "cca3": "IND",
      "cioc": "IND",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "INR": {
          "name": "Indian rupee",
          "symbol": "₹"
        }
      },
      "capital": [
        "New Delhi"
      ],
      "region": "Asia",
      "subregion": "Southern Asia",
      "languages": [
        "English",
        "Hindi",
        "Tamil"
      ],
      "latlng": [
        20.0,
        77.0
      ],
      "landlocked": false,
      "borders": [
        "BGD",
        "BTN",
        "MMR",
        "CHN",
        "NPL",
        "PAK"
      ],
      "area": 3287590.0,
      "population": 1380004385,
      "car": {
        "signs": [
          "IND"
        ],
        "side": "left"
      },
      "timezones": [
        "UTC+05:30"
      ],
      "continents": [
        "Asia"
      ],
      "startOfWeek": "monday",
    },
    {
      "name": {
        "common": "China",
        "official": "People's Republic of China",
      },
      "cca2": "CN",
      "ccn3": "156",
      "cca3": "CHN",
      "cioc": "CHN",
      "independent": true, "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "CNY": {
          "name": "Chinese yuan",
          "symbol": "¥"
        }
      },
      "capital": [
        "Beijing"
      ],
      "region": "Asia",
      "subregion": "Eastern Asia",
      "latlng": [
        35.0,
        105.0
      ],
      "landlocked": false,
      "borders": [
        "AFG",
        "BTN",
        "MMR",
        "HKG",
        "IND",
        "KAZ",
        "NPL",
        "PRK",
        "KGZ",
        "LAO",
        "MAC",
        "MNG",
        "PAK",
        "RUS",
        "TJK",
        "VNM"
      ],
      "area": 9706961.0,
      "population": 1402112000,
      "car": {
        "signs": [
          "RC"
        ],
        "side": "right"
      },
      "timezones": [
        "UTC+08:00"
      ],
      "continents": [
        "Asia"
      ],
      "startOfWeek": "monday",
    },
    {
      "name": {
        "common": "Australia",
        "official": "Commonwealth of Australia",
      },
      "cca2": "AU",
      "ccn3": "036",
      "cca3": "AUS",
      "cioc": "AUS",
      "independent": true,
      "status": "officially-assigned", "unMember": true,
      "currencies": {
        "AUD": {
          "name": "Australian dollar",
          "symbol": "$"
        }
      },
      "capital": [
        "Canberra"
      ],
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "languages": [
        "English"
      ],
      "latlng": [
        -27.0,
        133.0
      ],
      "landlocked": false,
      "area": 7692024.0,
      "population": 25687041,
      "car": {
        "signs": [
          "AUS"
        ],
        "side": "left"
      },
      "timezones": [
        "UTC+05:00",
        "UTC+06:30",
        "UTC+07:00",
        "UTC+08:00",
        "UTC+09:30",
        "UTC+10:00",
        "UTC+10:30",
        "UTC+11:30"
      ],
      "continents": [
        "Oceania"
      ],
      "startOfWeek": "monday",
    },
    {
      "name": {
        "common": "Portugal",
        "official": "Portuguese Republic",
      },
      "cca2": "PT",
      "ccn3": "620",
      "cca3": "PRT",
      "cioc": "POR",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Lisbon"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "languages": [
        "Portuguese"
      ],
      "latlng": [
        39.5,
        -8.0
      ],
      "landlocked": false,
      "borders": [
        "ESP"
      ],
      "area": 92090.0,
      "population": 10305564,
      "car": {
        "signs": [
          "P"
        ],
        "side": "right"
      },
      "timezones": [
        "UTC-01:00",
        "UTC"
      ],
      "continents": [
        "Europe"
      ],
      "startOfWeek": "monday",
    },
    {
      "name": {
        "common": "Egypt",
        "official": "Arab Republic of Egypt",
      },
      "cca2": "EG",
      "ccn3": "818",
      "cca3": "EGY",
      "cioc": "EGY",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "EGP": {
          "name": "Egyptian pound",
          "symbol": "£"
        }
      },
      "capital": [
        "Cairo"
      ],
      "region": "Africa",
      "subregion": "Northern Africa",
      "languages": [
        "Arabic"
      ],
      "latlng": [
        27.0,
        30.0
      ],
      "landlocked": false,
      "borders": ["ISR",
        "LBY",
        "PSE",
        "SDN"
      ],
      "area": 1002450.0,
      "population": 102334403,
      "car": {
        "signs": [
          "ET"
        ],
        "side": "right"
      },
      "timezones": [
        "UTC+02:00"
      ],
      "continents": [
        "Africa"
      ],
      "startOfWeek": "sunday",
      "capitalInfo": {
        "latlng": [
          30.05,
          31.25
        ]
      },
    },
    {
      "name": {
        "common": "Brazil",
        "official": "Federative Republic of Brazil",
      },
      "cca2": "BR",
      "ccn3": "076",
      "cca3": "BRA",
      "cioc": "BRA",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "BRL": {
          "name": "Brazilian real",
          "symbol": "R$"
        }
      },
      "idd": {
        "root": "+5",
        "suffixes": [
          "5"
        ]
      },
      "capital": [
        "Brasília"
      ],
      "region": "Americas",
      "subregion": "South America",
      "languages": [
        "Portuguese"
      ],
      "latlng": [
        -10.0,
        -55.0
      ], "landlocked": false,
      "borders": [
        "ARG",
        "BOL",
        "COL",
        "GUF",
        "GUY",
        "PRY",
        "PER",
        "SUR",
        "URY",
        "VEN"
      ],
      "area": 8515767.0,
      "population": 212559409,
      "fifa": "BRA",
      "car": {
        "signs": [
          "BR"
        ],
        "side": "right"
      },
      "timezones": [
        "UTC-05:00",
        "UTC-04:00",
        "UTC-03:00",
        "UTC-02:00"
      ],
      "continents": [
        "South America"
      ],
      "startOfWeek": "monday",
    },
    {
      "name": {
        "common": "Germany",
        "official": "Federal Republic of Germany",
      },
      "cca2": "DE",
      "ccn3": "276",
      "cca3": "DEU",
      "cioc": "GER",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "capital": [
        "Berlin"
      ],
      "region": "Europe",
      "subregion": "Western Europe",
      "languages": [
        "German"
      ],
      "latlng": [
        51.0,
        9.0
      ], "landlocked": false,
      "borders": [
        "AUT",
        "BEL",
        "CZE",
        "DNK",
        "FRA",
        "LUX",
        "NLD",
        "POL",
        "CHE"
      ],
      "area": 357114.0,
      "population": 83240525,
      "car": {
        "signs": [
          "DY"
        ],
        "side": "right"
      },
      "timezones": [
        "UTC+01:00"
      ],
      "continents": [
        "Europe"
      ],
      "startOfWeek": "monday",
    },
    {
      "name": {
        "common": "Vietnam",
        "official": "Socialist Republic of Vietnam",
      },
      "cca2": "VN",
      "ccn3": "704",
      "cca3": "VNM",
      "cioc": "VIE",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "VND": {
          "name": "Vietnamese đồng",
          "symbol": "₫"
        }
      },
      "capital": [
        "Hanoi"
      ],
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "languages": [
        "Vietnamese"
      ],
      "latlng": [
        16.16666666,
        107.83333333
      ],
      "landlocked": false,
      "borders": [
        "KHM",
        "CHN",
        "LAO"],
      "area": 331212.0,
      "population": 97338583,
      "car": {
        "signs": [
          "VN"
        ],
        "side": "right"
      },
      "timezones": [
        "UTC+07:00"
      ],
      "continents": [
        "Asia"
      ],
      "startOfWeek": "monday",
    },
    {
      "name": {
        "common": "Turkey",
        "official": "Republic of Turkey",
      },
      "cca2": "TR",
      "ccn3": "792",
      "cca3": "TUR",
      "cioc": "TUR",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "TRY": {
          "name": "Turkish lira",
          "symbol": "₺"
        }
      },
      "capital": [
        "Ankara"
      ],
      "region": "Asia",
      "subregion": "Western Asia",
      "languages": [
        "Turkish"
      ],
      "latlng": [
        39.0,
        35.0
      ],
      "landlocked": false,
      "borders": [
        "ARM",
        "AZE",
        "BGR",
        "GEO",
        "GRC",
        "IRN",
        "IRQ",
        "SYR"
      ],
      "area": 783562.0,
      "population": 84339067,
      "car": {
        "signs": [
          "TR"],
        "side": "right"
      },
      "timezones": [
        "UTC+03:00"
      ],
      "continents": [
        "Asia"
      ],
      "startOfWeek": "monday",
    }
  ]
  ngOnInit() {
    this.filteredCountries = this.countries;
  }
  sortData() {
    this.filteredCountries = [...this.countries];
    if (this.searchText !== '') {
      const searchTextLower = this.searchText.toLowerCase();
      this.filteredCountries = this.filteredCountries.filter(country => {
        return (
          country.name.common.toLowerCase().includes(searchTextLower) ||
          country.name.official.toLowerCase().includes(searchTextLower) ||
          country.capital.toString().toLowerCase().includes(searchTextLower) ||
          country.region.toLowerCase().includes(searchTextLower) ||
          country.subregion.toLowerCase().includes(searchTextLower) ||
          country.continents.toString().toLowerCase().includes(searchTextLower)
        );
      });
    }
    if (this.selectedRadio === 'asc') {
      this.filteredCountries.sort((top, bottom) => top.population - bottom.population);
    }
    else if (this.selectedRadio === 'desc') {
      this.filteredCountries.sort((top, bottom) => bottom.population - top.population);
    }
  }
}