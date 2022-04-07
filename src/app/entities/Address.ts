import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Employee } from "./Employee";

@Entity("Address")
export class Address extends AbstractEntity {
    @PrimaryGeneratedColumn('increment')
    public addressId: number;

    @Column({ nullable: false })
    public line1: string;

    @Column({ nullable: true})
    public line2: string;

    @Column({ nullable: true})
    public line3: string;
    
    @OneToOne((type) => Employee, { cascade: true })
    @JoinColumn()
    public Employee: Employee;

    @Column({nullable: true})
    public employeeId: string;
}