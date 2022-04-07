import APP_CONSTANTS from "../constants";
import { AbstractController } from "../util/rest/controller";
import { ProjectsServices } from "../services/ProjectsServices";
import RequestWithUser from "../util/rest/request";
import { NextFunction , Response} from "express";
/**
 * Implementation of the EmployeeController route.
 *
 */
class ProjectsController extends AbstractController {

  constructor(
    private projectsService: ProjectsServices
  ) {
    super(`${APP_CONSTANTS.apiPrefix}/projects`);
    this.initializeRoutes();
  }

  protected initializeRoutes = (): void => {
      this.router.post(
          `${this.path}`,
          this.createProject
      );
  }

  private createProject=async(
      request: RequestWithUser,
      response: Response,
      next: NextFunction
      )=>{
        const data = await this.projectsService.createProject(request.body);
        response.send(
            this.fmt.formatResponse(data,Date.now() - request.startTime, "OK")
        );

      }
}

export default ProjectsController;
