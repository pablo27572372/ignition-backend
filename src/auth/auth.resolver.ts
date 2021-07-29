import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateLoginInput } from './dto/create-login.input';
import { LoginResponse } from './entities/login.entity';

@Resolver()
export class AuthResolver {
    constructor(
        private readonly authService: AuthService,
      ) {}

    @Mutation(() => LoginResponse)
    login(@Args('createLoginInput') createLoginInput: CreateLoginInput) {
        return this.authService.login2(createLoginInput);
    }
}
