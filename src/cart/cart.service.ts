import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartProductService } from '../cart-product/cart-product.service';
import { DeleteResult, Repository } from 'typeorm';
import { InsertCartDto } from './dtos/insert-cart.dto';
import { UpdateCartDto } from './dtos/update-cart.dto';
import { CartEntity } from './entities/cart.entity';
import { HelperMessage } from '../healpers/messages/message.helper';

const LINE_AFFECTED = 1;

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    private readonly cartProductService: CartProductService,
  ) {}

  // Função para limpa o carrinho
  async clearCart(userId: number): Promise<DeleteResult> {
    const cart = await this.findCartByUserId(userId);

    await this.cartRepository.save({
      ...cart,
      active: false,
    });

    return {
      raw: [],
      affected: LINE_AFFECTED,
    };
  }

  // Função para lista o carinho pelo o Id du usuário
  async findCartByUserId(
    userId: number,
    isRelations?: boolean,
  ): Promise<CartEntity> {
    const relations = isRelations
      ? {
          cartProduct: {
            product: true,
          },
        }
      : undefined;

    const cart = await this.cartRepository.findOne({
      where: {
        userId,
        active: true,
      },
      relations,
    });

    // Verificando se o carrinho existe
    if (!cart) {
      throw new NotFoundException(HelperMessage.CART_NOT_ACTIVE);
    }

    return cart;
  }

  // Função para criação do carrinho
  async createCart(userId: number): Promise<CartEntity> {
    return this.cartRepository.save({
      active: true,
      userId,
    });
  }

  // Função para inserir um produto no carrinho
  async insertProductInCart(
    insertCartDTO: InsertCartDto,
    userId: number,
  ): Promise<CartEntity> {
    const cart = await this.findCartByUserId(userId).catch(async () => {
      return this.createCart(userId);
    });

    // Inserindo produto no carrinho
    await this.cartProductService.insertProductInCart(insertCartDTO, cart);

    return cart;
  }

  // Função para deletar um produto do carrinho
  async deleteProductCart(
    productId: number,
    userId: number,
  ): Promise<DeleteResult> {
    const cart = await this.findCartByUserId(userId);

    return this.cartProductService.deleteProductCart(productId, cart.id);
  }

  // Função para atualizar o produto no carrinho
  async updateProductInCart(
    updateCartDTO: UpdateCartDto,
    userId: number,
  ): Promise<CartEntity> {
    const cart = await this.findCartByUserId(userId).catch(async () => {
      return this.createCart(userId);
    });

    await this.cartProductService.updateProductInCart(updateCartDTO, cart);

    return cart;
  }
}
