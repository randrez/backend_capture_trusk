import { Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    OneToOne,
    UpdateDateColumn,
    Index} from "typeorm";
import {User} from "./User"

@Entity()
export class Auth {

    @PrimaryGeneratedColumn()
    public id!: number;
    
    @Index({ unique: true })
    @Column()
    public username!: string;

    @Column()
    public password!: string;

    @CreateDateColumn({name:"created_at"})
    public createdAt!: Date;

    @UpdateDateColumn({name:"date_update"})
    public dateupdate!: Date;

    @OneToOne(() => User, (user:User) => user.auth)
    public user!:User
}