import { Cachorro } from './Cachorro';

export interface Carrinho {
 cachorros: Array<Cachorro>;
 valorTotal: number;
 quantidade: number;
}