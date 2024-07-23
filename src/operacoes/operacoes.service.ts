import { ForbiddenException, Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { OperacaoDto } from './operacoes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OperacoesService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async adicao(operacaoDto: OperacaoDto) {
    const { valor1, valor2 } = operacaoDto;
    const resultado = valor1 + valor2;
    const novaOperacao = await this.prisma.operacao.create({
      data: {
        valor1,
        valor2,
        resultado,
        tipo: 1
      }
    });
    if (!novaOperacao) throw new ForbiddenException('Não foi possível registrar a operação, tente novamente.')
    return { resultado };
  }

  async subtracao(operacaoDto: OperacaoDto) {
    const { valor1, valor2 } = operacaoDto;
    const resultado = valor1 - valor2;
    const novaOperacao = await this.prisma.operacao.create({
      data: {
        valor1,
        valor2,
        resultado,
        tipo: 2
      }
    });
    if (!novaOperacao) throw new ForbiddenException('Não foi possível registrar a operação, tente novamente.')
    return { mensagem: `O resultado é ${resultado} e o tipo é ${novaOperacao.tipo}` };
  }

  async multiplicacao(operacaoDto: OperacaoDto) {
    const { valor1, valor2 } = operacaoDto;
    const resultado = valor1 * valor2;
    const novaOperacao = await this.prisma.operacao.create({
      data: {
        valor1,
        valor2,
        resultado,
        tipo: 3
      }
    });
    if (!novaOperacao) throw new ForbiddenException('Não foi possível registrar a operação, tente novamente.')
    return { mensagem: `O resultado é ${resultado} e o tipo é ${novaOperacao.tipo}` };
  }

  async divisao(operacaoDto: OperacaoDto) {
    const { valor1, valor2 } = operacaoDto;
    const resultado = valor1 / valor2;
    const novaOperacao = await this.prisma.operacao.create({
      data: {
        valor1,
        valor2,
        resultado,
        tipo: 4
      }
    });
    if (!novaOperacao) throw new ForbiddenException('Não foi possível registrar a operação, tente novamente.')
    return { mensagem: `O resultado é ${resultado} e o tipo é ${novaOperacao.tipo}` };
  }

  async findAll(operacaoDto: OperacaoDto){
    return await this.prisma.operacao.findMany({
    })
  }

  async findById(id: number) {
    return await this.prisma.operacao.findUnique({
      where: { id: id },
    });
  }

  
  async findByTipo(tipo: number) {
    return await this.prisma.operacao.findMany({
      where: {
        tipo: tipo
      }
    });
  }
    
  
  async delete(id: number): Promise<void> {
    
    const buscarOperacao = await this.prisma.operacao.findUnique({
      where: { id: id },
    });

    
    if (!buscarOperacao) {
      throw new HttpException('Operação não encontrada!', HttpStatus.NOT_FOUND);
    }

    
    await this.prisma.operacao.delete({
      where: { id: id },
    });
  }



}




