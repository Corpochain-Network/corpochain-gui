import { WalletType } from '@serwisgalena/api';
import type { Wallet } from '@serwisgalena/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'Corpochain';
    default:
      return wallet.meta?.name ?? wallet.name;
  }
}
