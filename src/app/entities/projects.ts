import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("Project")
export class Project extends AbstractEntity {
    @PrimaryGeneratedColumn('increment')
    public projectid: string;

    @Column({ nullable: false })
    public projectname: string;

    @Column({ nullable: true})
    public projectdescription: string;

    @Column({ default: true})
    public isActive: boolean;

}
