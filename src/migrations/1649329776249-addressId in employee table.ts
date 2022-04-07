import {MigrationInterface, QueryRunner} from "typeorm";

export class addressIdInEmployeeTable1649329776249 implements MigrationInterface {
    name = 'addressIdInEmployeeTable1649329776249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "address_id" character varying`);
        await queryRunner.query(`ALTER TABLE "Address" ADD "employee_id" uuid`);
        await queryRunner.query(`ALTER TABLE "Address" ADD CONSTRAINT "UQ_87759c7e4cf228e6f5086a3affb" UNIQUE ("employee_id")`);
        await queryRunner.query(`ALTER TABLE "Address" ADD CONSTRAINT "FK_87759c7e4cf228e6f5086a3affb" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Address" DROP CONSTRAINT "FK_87759c7e4cf228e6f5086a3affb"`);
        await queryRunner.query(`ALTER TABLE "Address" DROP CONSTRAINT "UQ_87759c7e4cf228e6f5086a3affb"`);
        await queryRunner.query(`ALTER TABLE "Address" DROP COLUMN "employee_id"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "address_id"`);
    }

}
