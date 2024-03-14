import type { Wallet } from '@serwisgalena/api';
import { WalletType } from '@serwisgalena/api';

export default function findCATWalletByAssetId(wallets: Wallet[], assetId: string) {
  return wallets.find(
    (wallet) => wallet.type === WalletType.CAT && wallet.meta?.assetId?.toLowerCase() === assetId.toLowerCase()
  );
}
