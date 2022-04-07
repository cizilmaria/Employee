import {MigrationInterface, QueryRunner} from "typeorm";

export class address1649326616443 implements MigrationInterface {
    name = 'address1649326616443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "rolesid"`);
        await queryRunner.query(`ALTER TABLE "Address" DROP CONSTRAINT "PK_9034683839599c80ebe9ebb0891"`);
        await queryRunner.query(`ALTER TABLE "Address" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "roles_id" character varying`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "address_id" character varying`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "address_address_id" integer`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "UQ_6b8e7c75fe60bcf09f309687ba5" UNIQUE ("address_address_id")`);
        await queryRunner.query(`ALTER TABLE "Address" ADD "address_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Address" ADD CONSTRAINT "PK_d411533ca3e85a9fba4737df946" PRIMARY KEY ("address_id")`);
        await queryRunner.query(`ALTER TABLE "Address" ADD "employee_id" uuid`);
        await queryRunner.query(`ALTER TABLE "Address" ADD CONSTRAINT "UQ_87759c7e4cf228e6f5086a3affb" UNIQUE ("employee_id")`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_6b8e7c75fe60bcf09f309687ba5" FOREIGN KEY ("address_address_id") REFERENCES "Address"("address_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Address" ADD CONSTRAINT "FK_87759c7e4cf228e6f5086a3affb" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Address" DROP CONSTRAINT "FK_87759c7e4cf228e6f5086a3affb"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_6b8e7c75fe60bcf09f309687ba5"`);
        await queryRunner.query(`ALTER TABLE "Address" DROP CONSTRAINT "UQ_87759c7e4cf228e6f5086a3affb"`);
        await queryRunner.query(`ALTER TABLE "Address" DROP COLUMN "employee_id"`);
        await queryRunner.query(`ALTER TABLE "Address" DROP CONSTRAINT "PK_d411533ca3e85a9fba4737df946"`);
        await queryRunner.query(`ALTER TABLE "Address" DROP COLUMN "address_id"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "UQ_6b8e7c75fe60bcf09f309687ba5"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "address_address_id"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "address_id"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "roles_id"`);
        await queryRunner.query(`ALTER TABLE "Address" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Address" ADD CONSTRAINT "PK_9034683839599c80ebe9ebb0891" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "rolesid" character varying`);
    }

}
