import { plainToClass } from "class-transformer";
import { Roles } from "../entities/Roles";
import { RolesRepository } from "../repository/RolesRepository";


export class RolesServices {
    constructor(
        private rolesRepository: RolesRepository
    ) {}

    public async CreateRoles(RolesInput: any){
        const RolesData=plainToClass(Roles, {
            "rolename": RolesInput.name,
            "roleDescription": "Developer"});
        const saveDetails = await this.rolesRepository.CreateRoles(RolesData);
        return saveDetails;
    }

    public async UpdateRoles(roleid: string, RolesDetails: any) {
        const UpdateRoles = await this.rolesRepository.updateRoleDetails(roleid, RolesDetails);
        return UpdateRoles;
    }

    public async DeleteRoles(roleid: string){
        return this.rolesRepository.softDeleteRolebyId(roleid);
        
        
    }
    
}