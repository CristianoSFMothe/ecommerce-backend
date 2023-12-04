import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { userEntityMock } from '../__mock__/user.mock';
import { createUserMock } from '../__mock__/createUser.mmock';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(userEntityMock),
            save: jest.fn().mockResolvedValue(userEntityMock),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('should return in find user by email', async () => {
    const user = await service.findUserByEmail(userEntityMock.email);

    expect(user).toEqual(userEntityMock);
  });

  it('should return error in find user by email', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);

    expect(
      service.findUserByEmail(userEntityMock.email),
    ).rejects.toThrowError();
  });

  it('should return error in find user by email request DB', async () => {
    jest.spyOn(userRepository, 'findOne').mockRejectedValueOnce(new Error());

    expect(
      service.findUserByEmail(userEntityMock.email),
    ).rejects.toThrowError();
  });

  it('should return in find user by CPF', async () => {
    const user = await service.findUserByCpf(userEntityMock.cpf);

    expect(user).toEqual(userEntityMock);
  });

  it('should return error in find user by CPF request DB', async () => {
    jest.spyOn(userRepository, 'findOne').mockRejectedValueOnce(new Error());

    expect(service.findUserByCpf(userEntityMock.cpf)).rejects.toThrowError();
  });

  it('should return error in find user by CPF', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);

    expect(service.findUserByCpf(userEntityMock.cpf)).rejects.toThrowError();
  });

  it('should return in find user by ID', async () => {
    const user = await service.findUserById(userEntityMock.id);

    expect(user).toEqual(userEntityMock);
  });

  it('should return error in find user by ID', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);

    expect(service.findUserById(userEntityMock.id)).rejects.toThrowError();
  });

  it('should return error in find user by ID request DB', async () => {
    jest.spyOn(userRepository, 'findOne').mockRejectedValueOnce(new Error());

    expect(service.findUserById(userEntityMock.id)).rejects.toThrowError();
  });

  it('should return in get user by id using relations', async () => {
    const user = await service.findUserById(userEntityMock.id);

    expect(user).toEqual(userEntityMock);
  });

  it('should return if user exist', async () => {
    const user = await service.findUserById(userEntityMock.id);

    expect(user).toEqual(userEntityMock);
  });

  it('should return error if user exist', async () => {
    expect(service.createUser(createUserMock)).rejects.toThrowError();
  });

  it('should return error if user not exist', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);

    const user = await service.createUser(createUserMock);

    expect(user).toEqual(userEntityMock);
  });
});
