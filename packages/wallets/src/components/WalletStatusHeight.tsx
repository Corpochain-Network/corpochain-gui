import { useGetHeightInfoQuery } from '@serwisgalena/api-react';
import { FormatLargeNumber } from '@serwisgalena/core';
import React from 'react';

export default function WalletStatusHeight() {
  const { data: height, isLoading } = useGetHeightInfoQuery(
    {},
    {
      pollingInterval: 10_000,
    }
  );

  if (isLoading) {
    return null;
  }

  if (height === undefined || height === null) {
    return null;
  }

  return (
    <>
      (
      <FormatLargeNumber value={height} />)
    </>
  );
}
