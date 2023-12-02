import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { authentizationToLoginPayload } from '../utils/base/base-64-convert';

export const UserId = createParamDecorator((__, ctx: ExecutionContext) => {
  const { authorization } = ctx.switchToHttp().getRequest().headers;

  const loginPayload = authentizationToLoginPayload(authorization);

  return loginPayload?.id;
});
