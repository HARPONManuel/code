import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  

  designation : string = '';
  username : string = '';
  numTeamMembers : number = 0;
  totCostAllProjects : number = 0;
  pendingTasks : number = 0;
  upComingProj : number = 0;
  projCost: number = 0;

  currentExpend: number = 0;
  availableFunds : number = 0;

  clients: string[]= [];
  projects: string[] = [];
  years : number[] = [];
  teamMembersSummary: any[] = [];
  teamMembers: any[] = [];
  toDay: Date = new Date();

  isOnClick=false;



  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.designation = "Chef d'équipe";
    this.username = "Manuel HARPON";
    this.numTeamMembers = 9;
    this.totCostAllProjects = 260;
    this.pendingTasks = 24;
    this.upComingProj = 4;
    this.projCost = 79000000;
    this.currentExpend = 130214;
    this.availableFunds = 1999730884;

    this.clients = ["ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"];

    this.projects = ["Projet 1","Projet 2","Projet 3","Projet 4"];

    this.teamMembersSummary = this.dashboardService.getTeamMembersSummary();

    for (var i = 2019; i>=2016;i--) {
      this.years.push(i);
    }

    this.teamMembersSummary = [
      {Region:"Est", TeamMembersCount:20, TemporarilyUnvailableMembers: 4},
      {Region:"Nord", TeamMembersCount:2, TemporarilyUnvailableMembers: 24},
      {Region:"Ouest", TeamMembersCount:12, TemporarilyUnvailableMembers: 40},
      {Region:"Sud", TeamMembersCount:10, TemporarilyUnvailableMembers: 14}
    ];

    this.teamMembers = [
      {
        Region: 'Est',
        Members: [
          { ID: 1, Nom: 'Ford', Status: 'Dispo' },
          { ID: 2, Nom: 'Miller', Status: 'Dispo' },
          { ID: 3, Nom: 'Jones', Status: 'Occupé' },
          { ID: 4, Nom: 'James', Status: 'Occupé' },
        ],
      },
      {
        Region: 'Nord',
        Members: [
          { ID: 5, Nom: 'Anna', Status: 'Dispo' },
          { ID: 6, Nom: 'Arun', Status: 'Dispo' },
          { ID: 7, Nom: 'Varun', Status: 'Occupé' },
          { ID: 8, Nom: 'Jasmine', Status: 'Occupé' },
        ],
      },
      {
        Region: 'Ouest',
        Members: [
          { ID: 9, Nom: 'Krishna', Status: 'Dispo' },
          { ID: 10, Nom: 'Mohan', Status: 'Dispo' },
          { ID: 11, Nom: 'Raju', Status: 'Occupé' },
          { ID: 12, Nom: 'Farooq', Status: 'Occupé' },
        ],
      },
      {
        Region: 'Sud',
        Members: [
          { ID: 13, Nom: 'Jacob', Status: 'Dispo' },
          { ID: 14, Nom: 'Smith', Status: 'Dispo' },
          { ID: 15, Nom: 'Jones', Status: 'Occupé' },
          { ID: 16, Nom: 'James', Status: 'Occupé' },
        ],
      },
    ];
  }

  userClick(){
    this.isOnClick=false;
  }

  onProjectChange($event :any) {
    if($event.target.innerHTML=="Projet 1"){
      this.projCost = 4646000;
      this.currentExpend = 402142;
      this.availableFunds = 49730884;
    }
    else if($event.target.innerHTML=="Projet 2"){
      this.projCost = 2000000;
      this.currentExpend = 144148;
      this.availableFunds = 9430884;
    }
    else if($event.target.innerHTML=="Projet 3"){
      this.projCost = 8370000;
      this.currentExpend = 102140;
      this.availableFunds = 730884;
    }
    else if($event.target.innerHTML=="Projet 4"){
      this.projCost = 3660000;
      this.currentExpend = 30214;
      this.availableFunds = 530884;
    }    
  }

}
