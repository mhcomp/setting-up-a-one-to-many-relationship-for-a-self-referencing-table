import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ProjectsRepository } from './projects.repository';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const projectsRepository: ProjectsRepository = app.get(ProjectsRepository);

  try {
    await projectsRepository.clear();
    console.log('clear table - success');
  } catch (error) {
    console.log('clear table - fail');
  }

  try {
    await projectsRepository.createProject('1');
    console.log('create new entity - success');
  } catch (error) {
    console.log('create new entity - fail');
  }

  try {
    await projectsRepository.createProject('1');
    console.log('create new entity with existing id - success');
  } catch (error) {
    console.log('create new entity with existing id - fail');
  }

  try {
    await projectsRepository.createProject('2', '2');
    console.log('create new entity with same successor id - success');
  } catch (error) {
    console.log('create new entity with same successor id - fail');
  }

  try {
    await projectsRepository.createProject('3', '2');
    console.log('create new entity with existing successor id - success');
  } catch (error) {
    console.log('create new entity with existing successor id - fail');
  }

  try {
    await projectsRepository.createProject('4', '0');
    console.log('create new entity with nonexisting successor id - success');
  } catch (error) {
    console.log('create new entity with nonexisting successor id - fail');
  }

  await app.listen(3000);
}
bootstrap();
