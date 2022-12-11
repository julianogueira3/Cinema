import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Lanchonete {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  combo: string;

  @Column({ length: 100 })
 valor: string;

  @Column({ length: 100 })
  pipoca: string;

  @Column({ length: 100 })
  refrigerante: string;

  @Column({ length: 100 })
  doce: string;

}
