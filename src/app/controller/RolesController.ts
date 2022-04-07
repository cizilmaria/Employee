import APP_CONSTANTS from "../constants";
import { AbstractController } from "../util/rest/controller";
import { RolesServices } from "../services/RolesServices";
import RequestWithUser from "../util/rest/request";
import { NextFunction , Response} from "express";
/**
 * Implementation of the EmployeeController route.
 *
 */
class RolesController extends AbstractController {

  constructor(
    private rolesServices: RolesServices
  ) {
    super(`${APP_CONSTANTS.apiPrefix}/roles`);
    this.initializeRoutes();
  }

  protected initializeRoutes = (): void => {
      this.router.post(
          `${this.path}`,
          this.CreateRoles
      );
      this.router.put(
        `${this.path}`,
        this.UpdateRoles
    );
    this.router.delete(
      `${this.path}`,
      this.DeleteRoles
  );

  }

  private CreateRoles=async(
      request: RequestWithUser,
      response: Response,
      next: NextFunction
      )=>{
        const data = await this.rolesServices.CreateRoles(request.body);
        response.send(
            this.fmt.formatResponse(data,Date.now() - request.startTime, "OK")
        );

      }

  private UpdateRoles = async (
      request: RequestWithUser,
      response: Response,
      next: NextFunction
      ) => {
        const data = await this.rolesServices.UpdateRoles(request.params.roleid, request.body);
        response.status(201).send(
            this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
      );
}


  private DeleteRoles = async (
      request: RequestWithUser,
      response: Response,
      next: NextFunction
    ) => {
        const data = await this.rolesServices.DeleteRoles(request.params.roleid);
        response.status(201).send(
            this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
    );
    }
    }    

export default RolesController;
