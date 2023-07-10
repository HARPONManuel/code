import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Project } from '../project/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService
{
  urlPrefix: string = "http://localhost:4000"
  constructor(private httpClient: HttpClient)
  {
  }

  getAllProjects(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.urlPrefix + "/projects", { responseType: "json" })
      .pipe(map(
        (data: Project[]) =>
        {
          for (let i = 0; i < data.length; i++)
          {
            //data[i].teamSize = data[i].teamSize * 100;
          }
          return data;
        }
      ));
  }

  getProjectByProjectID(ProjectID: number): Observable<Project>
  {
    return this.httpClient.get<Project>(this.urlPrefix + "/projects/searchbyprojectid/" + ProjectID, { responseType: "json" });
  }

  insertProject(newProject: Project): Observable<Project>
  {
    var requestHeaders = new HttpHeaders();
    requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage['XSRFRequestToken']);
    return this.httpClient.post<Project>(this.urlPrefix + "/projects", newProject, { headers: requestHeaders, responseType: "json" });
  }

  updateProject(existingProject: Project): Observable<Project>
  {
    return this.httpClient.put<Project>(this.urlPrefix + "/projects", existingProject, { responseType: "json" });
  }

  deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpClient.delete<string>(this.urlPrefix + "/projects?ProjectID=" + ProjectID);
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.urlPrefix + "/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
  }
}

