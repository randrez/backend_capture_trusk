import { Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    OneToOne, 
    JoinColumn, 
    Index} from "typeorm";
import { Auth } from './Auth';

@Entity({name:"user_app"})
export class User {

    @PrimaryGeneratedColumn({name:"id"})
    public id!: number;

    @Column({name:"first_name"})
    public firstName!: string;

    @Column({name:"last_name"})
    public lastName!: string;
    
    @Index({ unique: true })
    @Column({name:"email"})
    public email!: string;

    @Column({name:"created_at"})
    public createdAt!: Date;

    @Column({name:"update_at"})
    public updatedAt!: Date;

    @OneToOne(() => Auth, (auth) => auth.user)
    @JoinColumn({name:"auth_id"})
    public auth!: Auth
}