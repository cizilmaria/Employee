import {MigrationInterface, QueryRunner} from "typeorm";

export class projectsTable1648804787590 implements MigrationInterface {
    name = 'projectsTable1648804787590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Project" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "projectid" SERIAL NOT NULL, "projectname" character varying NOT NULL, "projectdescription" character varying, "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_01ebd45f0fec72e9c3caf11c002" PRIMARY KEY ("projectid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Project"`);
    }

}
