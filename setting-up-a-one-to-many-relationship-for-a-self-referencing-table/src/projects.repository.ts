import { EntityRepository, Repository } from 'typeorm';

import { Project } from './project.entity';

@EntityRepository(Project)
export class ProjectsRepository extends Repository<Project> {
  public createProject(id: string, successorId?: string): Promise<Project> {
    const project: Project = new Project();
    project.id = id;
    project.successorId = successorId;
    return project.save();
  }
}
