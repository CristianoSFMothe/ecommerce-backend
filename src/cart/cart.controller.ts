import { Controller } from '@nestjs/common';
import { Roles } from '../decorators/roles.decorators';
import { UserType } from '../user/enm/user-type.enum';

@Roles(UserType.User)
@Controller('cart')
export class CartController {}
