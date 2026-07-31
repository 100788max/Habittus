import type { PortfolioGateway } from '@/features/portfolio/application/PortfolioGateway';
import { DevicePortfolioPersistence } from '@/features/portfolio/infrastructure/DevicePortfolioPersistence';
import { MockPortfolioGateway } from '@/features/portfolio/infrastructure/MockPortfolioGateway';

export const portfolioGateway: PortfolioGateway = new MockPortfolioGateway(
  new DevicePortfolioPersistence(),
);
