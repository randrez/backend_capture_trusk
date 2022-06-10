import { Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    OneToOne, 
    JoinColumn, 
    Index} from "typeorm";
import { Auth } from './Auth';

@Entity({name:"user_app"})
export class User {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public firstName!: string;

    @Column()
    public lastName!: string;
    
    @Index({ unique: true })
    @Column()
    public email!: string;

    @Column()
    public createdAt!: Date;

    @Column()
    public updatedAt!: Date;

    @OneToOne(() => Auth, (auth) => auth.user)
    @JoinColumn()
    public auth!: Auth
}