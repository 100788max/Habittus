import type { PortfolioGateway } from '@/features/portfolio/application/PortfolioGateway';
import { MockPortfolioGateway } from '@/features/portfolio/infrastructure/MockPortfolioGateway';

export const portfolioGateway: PortfolioGateway = new MockPortfolioGateway();
