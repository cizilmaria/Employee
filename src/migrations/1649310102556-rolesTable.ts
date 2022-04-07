import {MigrationInterface, QueryRunner} from "typeorm";

export class rolesTable1649310102556 implements MigrationInterface {
    name = 'rolesTable1649310102556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Roles" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "roleid" SERIAL NOT NULL, "rolename" character varying NOT NULL, "role_description" character varying, CONSTRAINT "PK_23c5d8d514c01bd937337ff1962" PRIMARY KEY ("roleid"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying, "age" integer NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "department_id" integer NOT NULL, "rolesid" character varying, "roles_roleid" integer, CONSTRAINT "UQ_389fe2fe09430efb8eabc4e1b6e" UNIQUE ("username"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_d62835db8c0aec1d18a5a927549" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_d12dd709b6eb36ea750ffacc676" FOREIGN KEY ("roles_roleid") REFERENCES "Roles"("roleid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_d12dd709b6eb36ea750ffacc676"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_d62835db8c0aec1d18a5a927549"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "Roles"`);
    }

}
