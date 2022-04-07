import { plainToClass } from "class-transformer";
import { Project } from "../entities/projects";
import { ProjectsRepository } from "../repository/ProjectsRepository";

export class ProjectsServices {
    constructor(
        private projectsRepository: ProjectsRepository
    ) {}

    public async createProject(projectInput: any){
        const projectData=plainToClass(Project, {
            "projectname": projectInput.name,
            "projectdescription": "KeyValue 123"

        });

    const saveDetails = await this.projectsRepository.createProject(projectData);
    return saveDetails;
    }
    
}
