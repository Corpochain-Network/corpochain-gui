import { useGetTotalHarvestersSummaryQuery } from '@serwisgalena/api-react';
import { FormatLargeNumber, CardSimple } from '@serwisgalena/core';
import { Trans } from '@lingui/macro';
import React from 'react';

export default function PlotCardPlotsFailedToOpen() {
  const { failedToOpenFilenames, initializedHarvesters, isLoading } = useGetTotalHarvestersSummaryQuery();

  return (
    <CardSimple
      title={<Trans>Plots Failed To Open</Trans>}
      value={<FormatLargeNumber value={failedToOpenFilenames} />}
      tooltip={<Trans>These plots are invalid, you might want to delete them.</Trans>}
      loading={isLoading || !initializedHarvesters}
    />
  );
}
