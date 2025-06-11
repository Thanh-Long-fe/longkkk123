import { Body, Controller, Get, Headers, Param, Patch, Post, Put, Request, UnauthorizedException, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/create.product.dto";
import { AuthGuard } from "@nestjs/passport";
import { User } from "./entities/user.schema";
import { RolesGuard } from "src/guard/role.guard";
import { Roles } from "src/decorator/roles.decorator";
import { Role } from "src/until/const";
  
@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}
    @UseGuards(AuthGuard('local'))
    
    @Post('login')
    async login(@Body() dto: UserDto, @Request() req) {
        return this.userService.login(req.user)
    }
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN)
    @Get('/list')
    async getListUser() {
        return this.userService.getListUser()
    }
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN)
    @Post('register')
    async register(@Body() dto: UserDto) {
        return this.userService.create(dto)
    }
    
    @Get('refresh')
    async refresh(@Headers('x-refresh-token') refreshToken: string) {
      if (!refreshToken) throw new UnauthorizedException('No refresh token provided');
      return this.userService.refreshToken(refreshToken);
    }
    @Post('logout')
    async logout(@Headers('x-refresh-token') refreshToken: string) {
      if (!refreshToken) throw new UnauthorizedException('No refresh token provided');
      return this.userService.logout(refreshToken);
    }

    @Put('update/:id')
    async updateUser(@Param('id') id: string, @Body() data: UserDto): Promise<any> {
      this.userService.updateUser(id, data)
    }
    @Patch('action/:id')
    async actionUser(@Param('id') id: string, @Body() body): Promise<any> {
      return this.userService.actionUser(id, body.status);
    }
}