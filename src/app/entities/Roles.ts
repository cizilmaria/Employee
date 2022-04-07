import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("Roles")
export class Roles extends AbstractEntity {
    @PrimaryGeneratedColumn('increment')
    public roleid: string;

    @Column({ nullable: false })
    public rolename: string;

    @Column({ nullable: true})
    public roleDescription: string;

    @Column({ nullable: true})
    public isDeleted: boolean;
 
}