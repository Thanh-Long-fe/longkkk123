import { Body, Controller, Headers, Post, Request, UnauthorizedException, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/create.product.dto";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/decorator/roles.decorator";
import { RolesGuard } from "src/guard/role.guard";
  
@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() dto: UserDto, @Request() req) {
        return this.userService.login(req.user)
    }

    @Post('register')
    async register(@Body() dto: UserDto) {
        return this.userService.create(dto)
    }
    @Post('refresh')
    async refresh(@Headers('x-refresh-token') refreshToken: string) {
      if (!refreshToken) throw new UnauthorizedException('No refresh token provided');
      return this.userService.refreshToken(refreshToken);
    }
    @Post('logout')
    async logout(@Headers('x-refresh-token') refreshToken: string) {
      if (!refreshToken) throw new UnauthorizedException('No refresh token provided');
      return this.userService.logout(refreshToken);
    }
}