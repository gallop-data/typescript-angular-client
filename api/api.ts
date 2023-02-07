export * from './ethereum.service';
import { EthereumService } from './ethereum.service';
export * from './polygon.service';
import { PolygonService } from './polygon.service';
export * from './solana.service';
import { SolanaService } from './solana.service';
export * from './starknet.service';
import { StarknetService } from './starknet.service';
export const APIS = [EthereumService, PolygonService, SolanaService, StarknetService];
