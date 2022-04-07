import {MigrationInterface, QueryRunner} from "typeorm";

export class change1649333213552 implements MigrationInterface {
    name = 'change1649333213552'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "address_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "address_id" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "address_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "address_id" character varying`);
    }

}
