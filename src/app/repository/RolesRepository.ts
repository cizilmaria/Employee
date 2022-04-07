import { getConnection, Repository } from "typeorm";
import { Roles} from "../entities/Roles";

export class RolesRepository extends Repository<Roles> {
    public async CreateRoles(RolesDetails: Roles){
        const RolesConnection=getConnection().getRepository(Roles);
        const saveDetails =await RolesConnection.save(RolesDetails);
        return saveDetails;
    }
    public async updateRoleDetails(roleid: string, rolesDetails: any){

        const rolesRepo=getConnection().getRepository(Roles);
        const UpdateRoleDetails =await rolesRepo.update({roleid:roleid, isDeleted: false},{
            rolename: rolesDetails.name ? rolesDetails.name : undefined,
            roleDescription: rolesDetails.roleDescription ?  rolesDetails.roleDescription : undefined
        });
        
    
        return UpdateRoleDetails;
    }
    public async softDeleteRolebyId(roleid: string) {
            const roleRepo = getConnection().getRepository(Roles);
            return roleRepo.softDelete({roleid
            });
        }
    }