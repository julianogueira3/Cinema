import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Filmes {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  horario: string;

  @Column({ length: 100 })
  genero: string;

  @Column({ length: 100 })
  classificacao: string;

  @Column({ length: 100 })
  duracao: string;

}
