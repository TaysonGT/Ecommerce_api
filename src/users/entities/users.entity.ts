import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User{
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  first_name: string;
  
  @Column()
  last_name: string;
  
  @Column()
  username: string;
  
  @Column()
  password: string;
  
  @Column()
  telephone: number;
  
  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  modified_at: Date;
}