import { getConnection, Repository } from "typeorm";
import { Project} from "../entities/projects";

export class ProjectsRepository extends Repository<Project> {
    public async createProject(projectDetails: Project){
        const ProjectsConnection=getConnection().getRepository(Project);
        const saveDetails =await ProjectsConnection.save(projectDetails);
        return saveDetails;
    }


    }

