import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'companyDetails';
  result:any
  companyDetails: any = [
    {
      name: 'nokia',
      projectName: 'expression builder',
      projectDuration: '3 years',
      developmentEnvironment: ['nodejs', 'reactjs'],
      members: [
        {
          name: 'karthick',
          age: 27,
          yearOfExperience: 4,
          position: 'front-end developer',
          skills: ['reactjs', 'angularjs']
        }, {
          name: 'krishna',
          age: 25,
          yearOfExperience: 2,
          position: 'tester',
          skills: ['Automation testing']
        }, {
          name: 'kajal',
          age: 23,
          yearOfExperience: 1.2,
          position: 'designer',
          skills: ['Icon designing', 'Adobe XD']
        }, {
          name: 'Guhan',
          age: 24,
          yearOfExperience: 1.5,
          position: 'Back-end developer',
          skills: ['Nodejs', 'PHP']
        }
      ]
    },
    {
      name: 'microsoft',
      projectName: 'Trends',
      projectDuration: '2 years',
      developmentEnvironment: ['reactjs', 'coldFusion', 'd3js'],
      members: [
        {
          name: 'Arul',
          age: 31,
          yearOfExperience: 7,
          position: 'Back-end developer',
          skills: ['coldFusion', 'jQuery', 'SQL']
        }, {
          name: 'roshini',
          age: 27,
          yearOfExperience: 3,
          position: 'tester and designer',
          skills: ['manual testing', 'Sketch tool', 'icon design']
        }, {
          name: 'yokesh',
          age: 25,
          yearOfExperience: 2,
          position: 'Front-end developer',
          skills: ['Reactjs', 'd3js']
        }, {
          name: 'kalidass',
          age: 24,
          yearOfExperience: 0.8,
          position: 'junior developer',
          skills: ['reactjs', 'nodejs']
        }
      ]
    },
    {
      name: 'apple',
      projectName: 'Whatzilla',
      projectDuration: '1 year',
      developmentEnvironment: ['Reactjs', 'nodejs', 'bootstrap'],
      members: [
        {
          name: 'Rajive',
          age: 28,
          yearOfExperience: 4.5,
          position: 'developer',
          skills: ['reactjs', 'angularjs', 'nodejs']
        }, {
          name: 'Sri',
          age: 23,
          yearOfExperience: 1,
          position: 'junior developer',
          skills: ['reactnative', 'reactjs', 'vuejs']
        }, {
          name: 'Ajay',
          age: 25,
          yearOfExperience: 2.5,
          position: 'Back-end developer',
          skills: ['nodejs']
        }
      ]
    }
  ];
  checkboxRecord: any = [{
    position: "developer",
    checked: true
  },
  {
    position: "tester",
    checked: true
  },
  {
    position: "designer",
    checked: true
  }];
  data: any;
  selectedItem: number | string = "";

  ngOnInit() {
    this.result=this.companyDetails;
  }
  filterRecord() {
    this.result=this.companyDetails.map((value: any) => {
    var data:any={};
    data.name = value.name;
    data.projectName = value.projectName;
    data.projectDuration = value.projectDuration;
    data.members=[];
    this.checkboxRecord.map((item:any) => { 
      if(item.checked==true) {
      data.members.push(...value.members.filter((element:any)=>element.position.includes(item.position)))
      }
      if(this.selectedItem!="") {
        data.members=data.members.filter((element:any)=> element.yearOfExperience==this.selectedItem)
      }
      data.members=[...new Set(data.members)];
    })
    return data
    })
  }
}

