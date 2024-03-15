import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';
export class Initial1697901746756 implements MigrationInterface {
  name = 'Initial1697901746756';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "centro_custo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "nome" character varying(50) NOT NULL, "descricao" character varying(50) NOT NULL, CONSTRAINT "PK_5dda16ec7a91c4ea1876f9c4522" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "movimentacao" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "observacao" character varying(300) NOT NULL, "documento_numero" character varying NOT NULL, "valor" numeric NOT NULL, "data_movimentacao" TIMESTAMP NOT NULL, "origem_id" uuid, "centro_custo_id" uuid, "operacao_id" uuid, "user_id" uuid, CONSTRAINT "REL_9dc7f6281abdac232f16be6851" UNIQUE ("origem_id"), CONSTRAINT "REL_3bd80935b00fdba5d4fe836735" UNIQUE ("centro_custo_id"), CONSTRAINT "REL_1ce6a1d309baf2cafdf2787658" UNIQUE ("operacao_id"), CONSTRAINT "REL_47b0d7e272e40c9c509e23e649" UNIQUE ("user_id"), CONSTRAINT "PK_623863f0070f0cf47efcc0fb7c7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "operacao" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "nome" character varying(50) NOT NULL, "descricao" character varying(50) NOT NULL, CONSTRAINT "PK_16547c55b40eed622fb83182677" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "origem" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "nome" character varying(50) NOT NULL, "descricao" character varying(50) NOT NULL, CONSTRAINT "PK_a7593b950552f323dd32627573e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, "email" character varying(150) NOT NULL, "password" character varying(300) NOT NULL, "username" character varying(100) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "movimentacao" ADD CONSTRAINT "FK_9dc7f6281abdac232f16be6851e" FOREIGN KEY ("origem_id") REFERENCES "origem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "movimentacao" ADD CONSTRAINT "FK_3bd80935b00fdba5d4fe8367358" FOREIGN KEY ("centro_custo_id") REFERENCES "centro_custo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "movimentacao" ADD CONSTRAINT "FK_1ce6a1d309baf2cafdf27876580" FOREIGN KEY ("operacao_id") REFERENCES "operacao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "movimentacao" ADD CONSTRAINT "FK_47b0d7e272e40c9c509e23e6497" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `INSERT INTO "user" ("name", "email", "password", "username", "isActive") VALUES ('Administrador', 'admin@localhost.local', '${bcrypt.hashSync(
        'admqwe123@',
        10,
      )}', 'admin', true)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "user"`);
    await queryRunner.query(
      `ALTER TABLE "movimentacao" DROP CONSTRAINT "FK_47b0d7e272e40c9c509e23e6497"`,
    );
    await queryRunner.query(
      `ALTER TABLE "movimentacao" DROP CONSTRAINT "FK_1ce6a1d309baf2cafdf27876580"`,
    );
    await queryRunner.query(
      `ALTER TABLE "movimentacao" DROP CONSTRAINT "FK_3bd80935b00fdba5d4fe8367358"`,
    );
    await queryRunner.query(
      `ALTER TABLE "movimentacao" DROP CONSTRAINT "FK_9dc7f6281abdac232f16be6851e"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "origem"`);
    await queryRunner.query(`DROP TABLE "operacao"`);
    await queryRunner.query(`DROP TABLE "movimentacao"`);
    await queryRunner.query(`DROP TABLE "centro_custo"`);
  }
}
