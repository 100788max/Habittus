import type { Artwork } from '@/features/portfolio/domain/artwork';

export type SerializedPortfolios = Record<string, Artwork[]>;

export interface PortfolioPersistence {
  load(): Promise<SerializedPortfolios | null>;
  save(portfolios: SerializedPortfolios): Promise<void>;
}

export class NoopPortfolioPersistence implements PortfolioPersistence {
  async load(): Promise<SerializedPortfolios | null> {
    return null;
  }

  async save(): Promise<void> {
    // Intentionally empty for tests and non-device environments.
  }
}
