import { Cachorro } from './Cachorro';
import { Comprador } from './Comprador';

export interface Compra {
    id: string,
    comprador: Comprador;
    cachorro: Array<Cachorro>;
    valorCompra: any;
    quantidade: number

}