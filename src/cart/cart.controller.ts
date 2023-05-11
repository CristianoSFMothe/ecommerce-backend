import { Controller } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorators';
import { UserType } from 'src/user/enm/user-type.enum';

@Roles(UserType.User)
@Controller('cart')
export class CartController {}
