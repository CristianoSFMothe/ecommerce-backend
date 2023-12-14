import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { userEntityMock } from '../__mocks__/user.mock';
import { UserService } from '../user.service';
import { createUserMock } from '../__mocks__/createUser.mmock';
import { updatedPasswordMock } from '../__mocks__/uptaded-user.mock';
import { ReturnUserDto } from '../dtos/returnUser.dto';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: {
            createUser: jest.fn().mockResolvedValue(userEntityMock),
            updatedPasswordUser: jest.fn().mockResolvedValue(userEntityMock),
            getUserByIdUsingRelations: jest
              .fn()
              .mockResolvedValue(userEntityMock),
            getAllUsers: jest.fn().mockResolvedValue([userEntityMock]),
          },
        },
      ],
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(userService).toBeDefined();
  });

  it('should return user Entity in createUser', async () => {
    const user = await controller.createUsers(createUserMock);

    expect(user).toEqual(userEntityMock);
  });

  it('should return ReturnUser in getAllUsers', async () => {
    const users = await controller.getAllUsers();

    expect(users).toEqual([
      {
        id: userEntityMock.id,
        name: userEntityMock.name,
        email: userEntityMock.email,
        phone: userEntityMock.phone,
        cpf: userEntityMock.cpf,
      },
    ]);
  });

  it('should return ReturnUser in getUserById', async () => {
    const user = await controller.getUserById(userEntityMock.id);

    expect(user).toEqual({
      id: userEntityMock.id,
      name: userEntityMock.name,
      email: userEntityMock.email,
      phone: userEntityMock.phone,
      cpf: userEntityMock.cpf,
    });
  });

  it('should return UserEntity in updatePasswordUser', async () => {
    const user = await controller.updatedPasswordUser(
      updatedPasswordMock,
      userEntityMock.id,
    );

    expect(user).toEqual(userEntityMock);
  });

  it('should return ReturnUserEntity in getInfoUser', async () => {
    const user = await controller.getInfoUser(userEntityMock.id);

    expect(user).toEqual(new ReturnUserDto(userEntityMock));
  });
});
