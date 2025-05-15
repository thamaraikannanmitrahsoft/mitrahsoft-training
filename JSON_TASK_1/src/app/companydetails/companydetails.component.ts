import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrl: './companydetails.component.scss'
})
export class CompanydetailsComponent implements OnInit {
  filteredCompanyDetails: any[] = [];
  selectedRole: string[] = [];
  filteredMembers: any[] = [];
  checkbox: { id: number; title: string; checked: boolean; }[] = [];
  selectedExperience: number = 0;
  experienceArray: number[] = [];
  ngOnInit() {
    this.filteredCompanyDetails = this.companyDetails;
    this.getexperience();
    this.checkbox = [
      {
        id: 1,
        title: 'Developer',
        checked: true,
      },
      {
        id: 2,
        title: 'Tester',
        checked: true,
      },
      {
        id: 3,
        title: 'Designer',
        checked: true,
      }
    ]
  }
  public companyDetails: any[] = [
    {
      name: 'nokia',
      projectName: 'expression builder',
      projectDuration: '3 years',
      developmentEnvironment: ['nodejs', 'reactjs'
      ],
      members: [
        {
          name: 'karthick',
          age: 27,
          yearOfExperience: 4,
          position: 'front-end developer',
          skills: ['reactjs', 'angularjs'
          ]
        },
        {
          name: 'krishna',
          age: 25,
          yearOfExperience: 2,
          position: 'tester',
          skills: ['Automation testing'
          ]
        },
        {
          name: 'kajal',
          age: 23,
          yearOfExperience: 1.2,
          position: 'designer',
          skills: ['Icon designing', 'Adobe XD'
          ]
        },
        {
          name: 'Guhan',
          age: 24,
          yearOfExperience: 1.5,
          position: 'Back-end developer',
          skills: ['Nodejs', 'PHP'
          ]
        }
      ]
    },
    {
      name: 'microsoft',
      projectName: 'Trends',
      projectDuration: '2 years',
      developmentEnvironment: ['reactjs', 'coldFusion', 'd3js'
      ],
      members: [
        {
          name: 'Arul',
          age: 31,
          yearOfExperience: 7,
          position: 'Back-end developer',
          skills: ['coldFusion', 'jQuery', 'SQL'
          ]
        },
        {
          name: 'roshini',
          age: 27,
          yearOfExperience: 3,
          position: 'tester and designer',
          skills: ['manual testing', 'Sketch tool', 'icon design'
          ]
        },
        {
          name: 'yokesh',
          age: 25,
          yearOfExperience: 2,
          position: 'Front-end developer',
          skills: ['Reactjs', 'd3js'
          ]
        },
        {
          name: 'kalidass',
          age: 24,
          yearOfExperience: 0.8,
          position: 'junior developer',
          skills: ['reactjs', 'nodejs'
          ]
        }
      ]
    },
    {
      name: 'apple',
      projectName: 'Whatzilla',
      projectDuration: '1 year',
      developmentEnvironment: ['Reactjs', 'nodejs', 'bootstrap'
      ],
      members: [
        {
          name: 'Rajive',
          age: 28,
          yearOfExperience: 4.5,
          position: 'developer',
          skills: ['reactjs', 'angularjs', 'nodejs'
          ]
        },
        {
          name: 'Sri',
          age: 23,
          yearOfExperience: 1,
          position: 'junior developer',
          skills: ['reactnative', 'reactjs', 'vuejs'
          ]
        },
        {
          name: 'Ajay',
          age: 25,
          yearOfExperience: 2.5,
          position: 'Back-end developer',
          skills: ['nodejs'
          ]
        }
      ]
    }
  ]
  getexperience = () => {
    const listOfExperience = this.companyDetails.map((details) => {
      details.members.map((experience: { yearOfExperience: any; }) => {
        const value: number = experience.yearOfExperience
        this.experienceArray.push(value)
        this.experienceArray = [...new Set(this.experienceArray.sort())]
      })
    })
  }
  filterData = () => {
    let experienceMatch: boolean = true
    this.selectedRole = this.checkbox.filter(item => item.checked).map(item => item.title.toLowerCase());
    this.filteredCompanyDetails = this.companyDetails.map(company => {
      const filteredMembers = company.members.filter((member: { position: string; yearOfExperience: number; }) => {
        const position = member.position.toLowerCase();
        const roleMatch = this.selectedRole.length > 0
          ? this.selectedRole.some(role => position.includes(role)) : false;
        if (this.selectedExperience != 0) {
          experienceMatch = this.selectedExperience != null
            ? member.yearOfExperience == this.selectedExperience : false;
        }
        return roleMatch && experienceMatch;
      });
      return { ...company, members: filteredMembers };
    }).filter(company => company.members.length > 0);
  };
}