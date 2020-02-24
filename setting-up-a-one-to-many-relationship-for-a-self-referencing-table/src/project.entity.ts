import { Entity, PrimaryColumn, OneToMany, BaseEntity } from 'typeorm';

@Entity()
export class Project extends BaseEntity {
  @PrimaryColumn({ unique: true })
  public id: string;

  @OneToMany(
    () => Project,
    project => project.id,
    { nullable: true },
  )
  public successorId?: string;
}
