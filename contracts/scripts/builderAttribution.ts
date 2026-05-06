const BUILDER_CODE = 'bc_0ecex30k';
const BUILDER_DATA_SUFFIX =
  '0x62635f306563657833306b0b0080218021802180218021802180218021';

type DeployTransaction = {
  data?: string | null;
};

function appendDataSuffix(data: string, suffix = BUILDER_DATA_SUFFIX) {
  return `${data}${suffix.replace(/^0x/, '')}`;
}

function hasBuilderCode(data: string) {
  return data.toLowerCase().includes(BUILDER_DATA_SUFFIX.slice(2).toLowerCase());
}

export function sendTransactionWithBuilderCode<T extends DeployTransaction>(tx: T): T & { data: string } {
  // Deployment is also a transaction. Missing the ERC-8021 suffix means
  // permanent Builder Code attribution loss for that onchain action.
  const data = tx.data && tx.data !== '0x' ? tx.data : '0x';
  const attributedTx = {
    ...tx,
    data: hasBuilderCode(data) ? data : appendDataSuffix(data),
  };

  if (!hasBuilderCode(attributedTx.data)) {
    throw new Error(`Refusing to send transaction without Builder Code ${BUILDER_CODE}.`);
  }

  return attributedTx;
}
