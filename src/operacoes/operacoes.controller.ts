import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { OperacoesService } from './operacoes.service';

  export class OperacaoDto {
    valor1: number
    valor2: number
    tipo: number
  }

@Controller('operacoes')
export class OperacoesController {
  constructor(private readonly operacoesService: OperacoesService) {}

  @Post('adicao')
  adicao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.adicao(operacaoDto);
  }

  @Post('subtracao')
  subtracao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.subtracao(operacaoDto);
  }

  @Post('multiplicacao')
  multiplicacao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.multiplicacao(operacaoDto);
  }

  @Post('divisao')
  divisao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.divisao(operacaoDto);
  }

  @Get('buscar')
  findAll(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.findAll(operacaoDto);
  }

  @Get('buscar/:tipo')
  findByTipo(@Param('tipo', ParseIntPipe) tipo: number) {
    return this.operacoesService.findByTipo(tipo);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.operacoesService.delete(id);
  }



}
