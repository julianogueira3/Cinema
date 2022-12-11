import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Funcionarios {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  local: string;

  @Column({ length: 100 })
  salario: string;

  @Column({ length: 100 })
  jornada: string;

 

}
