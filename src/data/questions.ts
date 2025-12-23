import { Question } from '~/lib/types';

export const questions: Question[] = [
  {
    id: 'bitcoin-easy-01',
    topic: 'bitcoin',
    difficulty: 'easy',
    prompt: 'Bitcoin supply is capped at 21 million coins.',
    answer: true,
    explanation: 'The protocol enforces a maximum of 21 million BTC.'
  },
  {
    id: 'bitcoin-easy-02',
    topic: 'bitcoin',
    difficulty: 'easy',
    prompt: 'Bitcoin uses proof-of-work to secure the network.',
    answer: true,
    explanation: 'Miners perform proof-of-work to add blocks.'
  },
  {
    id: 'bitcoin-easy-03',
    topic: 'bitcoin',
    difficulty: 'easy',
    prompt: 'Satoshi Nakamoto is the name used by Bitcoin\'s creator.',
    answer: true,
    explanation: 'The creator used the pseudonym Satoshi Nakamoto.'
  },
  {
    id: 'bitcoin-easy-04',
    topic: 'bitcoin',
    difficulty: 'easy',
    prompt: 'Bitcoin transactions are recorded on a public blockchain.',
    answer: true,
    explanation: 'All transactions are visible on the public ledger.'
  },
  {
    id: 'bitcoin-easy-05',
    topic: 'bitcoin',
    difficulty: 'easy',
    prompt: 'Bitcoin\'s smallest unit is called a satoshi.',
    answer: true,
    explanation: 'One satoshi equals 0.00000001 BTC.'
  },
  {
    id: 'bitcoin-easy-06',
    topic: 'bitcoin',
    difficulty: 'easy',
    prompt: 'Bitcoin was launched in 2015.',
    answer: false,
    explanation: 'Bitcoin launched in 2009, not 2015.'
  },
  {
    id: 'bitcoin-easy-07',
    topic: 'bitcoin',
    difficulty: 'easy',
    prompt: 'Bitcoin blocks are produced roughly every 10 minutes.',
    answer: true,
    explanation: 'The target block time is about 10 minutes.'
  },
  {
    id: 'bitcoin-easy-08',
    topic: 'bitcoin',
    difficulty: 'easy',
    prompt: 'Bitcoin addresses commonly start with 1, 3, or bc1.',
    answer: true,
    explanation: 'Legacy, P2SH, and bech32 prefixes are common.'
  },
  {
    id: 'bitcoin-easy-09',
    topic: 'bitcoin',
    difficulty: 'easy',
    prompt: 'Bitcoin can be mined competitively with a typical laptop today.',
    answer: false,
    explanation: 'Competitive mining requires specialized ASIC hardware.'
  },
  {
    id: 'bitcoin-easy-10',
    topic: 'bitcoin',
    difficulty: 'easy',
    prompt: 'The Bitcoin whitepaper is titled "Bitcoin: A Peer-to-Peer Electronic Cash System".',
    answer: true,
    explanation: 'That is the exact title of the whitepaper.'
  },
  {
    id: 'bitcoin-medium-01',
    topic: 'bitcoin',
    difficulty: 'medium',
    prompt: 'The Bitcoin block subsidy halves roughly every four years.',
    answer: true,
    explanation: 'Halvings occur every 210,000 blocks.'
  },
  {
    id: 'bitcoin-medium-02',
    topic: 'bitcoin',
    difficulty: 'medium',
    prompt: 'Bitcoin uses the UTXO model rather than account balances.',
    answer: true,
    explanation: 'UTXOs are spent and created with each transaction.'
  },
  {
    id: 'bitcoin-medium-03',
    topic: 'bitcoin',
    difficulty: 'medium',
    prompt: 'SegWit introduced a block weight limit of 4 million weight units.',
    answer: true,
    explanation: 'SegWit uses block weight to allow more witness data.'
  },
  {
    id: 'bitcoin-medium-04',
    topic: 'bitcoin',
    difficulty: 'medium',
    prompt: 'Taproot activated on Bitcoin in 2021.',
    answer: true,
    explanation: 'Taproot went live in November 2021.'
  },
  {
    id: 'bitcoin-medium-05',
    topic: 'bitcoin',
    difficulty: 'medium',
    prompt: 'The Lightning Network is a layer-2 payment network for Bitcoin.',
    answer: true,
    explanation: 'Lightning enables off-chain payments with fast settlement.'
  },
  {
    id: 'bitcoin-medium-06',
    topic: 'bitcoin',
    difficulty: 'medium',
    prompt: 'Bitcoin\'s scripting language is Turing-complete.',
    answer: false,
    explanation: 'Bitcoin Script is intentionally not Turing-complete.'
  },
  {
    id: 'bitcoin-medium-07',
    topic: 'bitcoin',
    difficulty: 'medium',
    prompt: 'The coinbase transaction creates new BTC in each block.',
    answer: true,
    explanation: 'Block rewards are paid via the coinbase transaction.'
  },
  {
    id: 'bitcoin-medium-08',
    topic: 'bitcoin',
    difficulty: 'medium',
    prompt: 'Bitcoin mining difficulty adjusts every 2016 blocks.',
    answer: true,
    explanation: 'Difficulty adjusts to target 10 minute blocks.'
  },
  {
    id: 'bitcoin-medium-09',
    topic: 'bitcoin',
    difficulty: 'medium',
    prompt: 'BIP32 introduced hierarchical deterministic wallets.',
    answer: true,
    explanation: 'BIP32 defines HD wallet key derivation.'
  },
  {
    id: 'bitcoin-medium-10',
    topic: 'bitcoin',
    difficulty: 'medium',
    prompt: 'OP_RETURN can be used to store small data in transactions.',
    answer: true,
    explanation: 'OP_RETURN outputs are provably unspendable and carry data.'
  },
  {
    id: 'bitcoin-difficult-01',
    topic: 'bitcoin',
    difficulty: 'difficult',
    prompt: 'Bitcoin proof-of-work uses the SHA-256d hash function.',
    answer: true,
    explanation: 'Miners hash twice with SHA-256.'
  },
  {
    id: 'bitcoin-difficult-02',
    topic: 'bitcoin',
    difficulty: 'difficult',
    prompt: 'The genesis block contains the text "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks".',
    answer: true,
    explanation: 'That message is embedded in the first block.'
  },
  {
    id: 'bitcoin-difficult-03',
    topic: 'bitcoin',
    difficulty: 'difficult',
    prompt: 'Median time past requires a block timestamp to be greater than the median of the previous 11 blocks.',
    answer: true,
    explanation: 'Bitcoin enforces MTP using the last 11 blocks.'
  },
  {
    id: 'bitcoin-difficult-04',
    topic: 'bitcoin',
    difficulty: 'difficult',
    prompt: 'Soft forks are always backward compatible changes.',
    answer: true,
    explanation: 'Older nodes still accept new blocks as valid.'
  },
  {
    id: 'bitcoin-difficult-05',
    topic: 'bitcoin',
    difficulty: 'difficult',
    prompt: 'Taproot spends use Schnorr signatures by default.',
    answer: true,
    explanation: 'Taproot added Schnorr signatures to Bitcoin.'
  },
  {
    id: 'bitcoin-difficult-06',
    topic: 'bitcoin',
    difficulty: 'difficult',
    prompt: 'BIP143 introduced a new sighash algorithm for SegWit.',
    answer: true,
    explanation: 'SegWit signatures follow the BIP143 digest algorithm.'
  },
  {
    id: 'bitcoin-difficult-07',
    topic: 'bitcoin',
    difficulty: 'difficult',
    prompt: 'A coinbase transaction can have multiple outputs.',
    answer: true,
    explanation: 'Block rewards can be split across outputs.'
  },
  {
    id: 'bitcoin-difficult-08',
    topic: 'bitcoin',
    difficulty: 'difficult',
    prompt: 'Before SegWit, the maximum block size was capped at 1 MB.',
    answer: true,
    explanation: 'Legacy blocks were limited to 1 MB.'
  },
  {
    id: 'bitcoin-difficult-09',
    topic: 'bitcoin',
    difficulty: 'difficult',
    prompt: 'Replace-By-Fee is disabled by default for all Bitcoin transactions.',
    answer: false,
    explanation: 'RBF is opt-in and not forced on all transactions.'
  },
  {
    id: 'bitcoin-difficult-10',
    topic: 'bitcoin',
    difficulty: 'difficult',
    prompt: 'The first Bitcoin block reward was 100 BTC.',
    answer: false,
    explanation: 'The initial block reward was 50 BTC.'
  },
  {
    id: 'ethereum-easy-01',
    topic: 'ethereum',
    difficulty: 'easy',
    prompt: 'Ethereum uses proof-of-stake consensus today.',
    answer: true,
    explanation: 'Ethereum moved to proof-of-stake with the Merge.'
  },
  {
    id: 'ethereum-easy-02',
    topic: 'ethereum',
    difficulty: 'easy',
    prompt: 'Ether (ETH) is the native currency of Ethereum.',
    answer: true,
    explanation: 'ETH is used to pay gas and secure the network.'
  },
  {
    id: 'ethereum-easy-03',
    topic: 'ethereum',
    difficulty: 'easy',
    prompt: 'Smart contracts on Ethereum can be written in Solidity.',
    answer: true,
    explanation: 'Solidity is the most common Ethereum language.'
  },
  {
    id: 'ethereum-easy-04',
    topic: 'ethereum',
    difficulty: 'easy',
    prompt: 'Ethereum blocks are produced about every 12 seconds.',
    answer: true,
    explanation: 'Post-merge block time is roughly 12 seconds.'
  },
  {
    id: 'ethereum-easy-05',
    topic: 'ethereum',
    difficulty: 'easy',
    prompt: 'Ethereum launched in 2015.',
    answer: true,
    explanation: 'Ethereum mainnet launched in July 2015.'
  },
  {
    id: 'ethereum-easy-06',
    topic: 'ethereum',
    difficulty: 'easy',
    prompt: 'Ethereum transactions are settled on a public blockchain.',
    answer: true,
    explanation: 'Ethereum is a public, permissionless chain.'
  },
  {
    id: 'ethereum-easy-07',
    topic: 'ethereum',
    difficulty: 'easy',
    prompt: 'Gas measures computation used by Ethereum transactions.',
    answer: true,
    explanation: 'Gas is the unit for computation and storage.'
  },
  {
    id: 'ethereum-easy-08',
    topic: 'ethereum',
    difficulty: 'easy',
    prompt: 'Ethereum accounts can be externally owned or contract accounts.',
    answer: true,
    explanation: 'EOAs and contracts are the two account types.'
  },
  {
    id: 'ethereum-easy-09',
    topic: 'ethereum',
    difficulty: 'easy',
    prompt: 'Ethereum uses the UTXO model for balances.',
    answer: false,
    explanation: 'Ethereum is account-based, not UTXO-based.'
  },
  {
    id: 'ethereum-easy-10',
    topic: 'ethereum',
    difficulty: 'easy',
    prompt: 'The Merge transitioned Ethereum from proof-of-work to proof-of-stake.',
    answer: true,
    explanation: 'The Merge replaced mining with staking.'
  },
  {
    id: 'ethereum-medium-01',
    topic: 'ethereum',
    difficulty: 'medium',
    prompt: 'EIP-1559 introduced a base fee that is burned.',
    answer: true,
    explanation: 'The base fee is burned instead of paid to validators.'
  },
  {
    id: 'ethereum-medium-02',
    topic: 'ethereum',
    difficulty: 'medium',
    prompt: 'Ethereum\'s world state is stored in a Merkle Patricia Trie.',
    answer: true,
    explanation: 'The state trie stores account and contract data.'
  },
  {
    id: 'ethereum-medium-03',
    topic: 'ethereum',
    difficulty: 'medium',
    prompt: 'The Beacon Chain launched before the Merge.',
    answer: true,
    explanation: 'The Beacon Chain went live in 2020.'
  },
  {
    id: 'ethereum-medium-04',
    topic: 'ethereum',
    difficulty: 'medium',
    prompt: 'Ethereum uses an account-based model.',
    answer: true,
    explanation: 'Balances are stored per account in the state.'
  },
  {
    id: 'ethereum-medium-05',
    topic: 'ethereum',
    difficulty: 'medium',
    prompt: 'Validators stake 32 ETH to activate on Ethereum.',
    answer: true,
    explanation: 'The standard validator deposit is 32 ETH.'
  },
  {
    id: 'ethereum-medium-06',
    topic: 'ethereum',
    difficulty: 'medium',
    prompt: 'Solidity contracts compile to EVM bytecode.',
    answer: true,
    explanation: 'The Solidity compiler outputs EVM bytecode.'
  },
  {
    id: 'ethereum-medium-07',
    topic: 'ethereum',
    difficulty: 'medium',
    prompt: 'Ethereum addresses are 20 bytes long.',
    answer: true,
    explanation: 'Addresses are 160-bit values.'
  },
  {
    id: 'ethereum-medium-08',
    topic: 'ethereum',
    difficulty: 'medium',
    prompt: 'The EVM uses a stack-based architecture.',
    answer: true,
    explanation: 'The EVM is a stack machine with 256-bit words.'
  },
  {
    id: 'ethereum-medium-09',
    topic: 'ethereum',
    difficulty: 'medium',
    prompt: 'An Ethereum transaction can create a new contract.',
    answer: true,
    explanation: 'Contract creation is a standard transaction type.'
  },
  {
    id: 'ethereum-medium-10',
    topic: 'ethereum',
    difficulty: 'medium',
    prompt: 'The gas limit is fixed forever at 30 million.',
    answer: false,
    explanation: 'The block gas limit can change over time.'
  },
  {
    id: 'ethereum-difficult-01',
    topic: 'ethereum',
    difficulty: 'difficult',
    prompt: 'The EVM uses a 256-bit word size.',
    answer: true,
    explanation: 'EVM opcodes operate on 256-bit values.'
  },
  {
    id: 'ethereum-difficult-02',
    topic: 'ethereum',
    difficulty: 'difficult',
    prompt: 'EIP-4844 introduces blob data to help scale rollups.',
    answer: true,
    explanation: 'Blob transactions reduce rollup data costs.'
  },
  {
    id: 'ethereum-difficult-03',
    topic: 'ethereum',
    difficulty: 'difficult',
    prompt: 'MEV stands for Maximal Extractable Value.',
    answer: true,
    explanation: 'MEV refers to value extracted by reordering transactions.'
  },
  {
    id: 'ethereum-difficult-04',
    topic: 'ethereum',
    difficulty: 'difficult',
    prompt: 'The Ethereum Yellow Paper specifies the protocol details.',
    answer: true,
    explanation: 'The Yellow Paper defines the Ethereum protocol.'
  },
  {
    id: 'ethereum-difficult-05',
    topic: 'ethereum',
    difficulty: 'difficult',
    prompt: 'Account nonces prevent replay and affect contract addresses.',
    answer: true,
    explanation: 'Nonces prevent replay and are used in CREATE.'
  },
  {
    id: 'ethereum-difficult-06',
    topic: 'ethereum',
    difficulty: 'difficult',
    prompt: 'The difficulty bomb was designed to encourage upgrades.',
    answer: true,
    explanation: 'It increases difficulty to push network upgrades.'
  },
  {
    id: 'ethereum-difficult-07',
    topic: 'ethereum',
    difficulty: 'difficult',
    prompt: 'CREATE2 allows deterministic contract addresses.',
    answer: true,
    explanation: 'CREATE2 enables predictable contract addresses.'
  },
  {
    id: 'ethereum-difficult-08',
    topic: 'ethereum',
    difficulty: 'difficult',
    prompt: 'Under EIP-1559, the base fee is optional to pay.',
    answer: false,
    explanation: 'The base fee must be paid and is burned.'
  },
  {
    id: 'ethereum-difficult-09',
    topic: 'ethereum',
    difficulty: 'difficult',
    prompt: 'Ethereum\'s finality gadget is called Casper FFG.',
    answer: true,
    explanation: 'Casper FFG provides finality for PoS.'
  },
  {
    id: 'ethereum-difficult-10',
    topic: 'ethereum',
    difficulty: 'difficult',
    prompt: 'SELFDESTRUCT immediately removes contract code from state.',
    answer: false,
    explanation: 'Changes now defer or restrict code removal.'
  },
  {
    id: 'bsc-easy-01',
    topic: 'bsc',
    difficulty: 'easy',
    prompt: 'BSC is compatible with the Ethereum Virtual Machine.',
    answer: true,
    explanation: 'BSC runs EVM smart contracts.'
  },
  {
    id: 'bsc-easy-02',
    topic: 'bsc',
    difficulty: 'easy',
    prompt: 'BNB is the native token used for gas on BSC.',
    answer: true,
    explanation: 'Fees are paid in BNB.'
  },
  {
    id: 'bsc-easy-03',
    topic: 'bsc',
    difficulty: 'easy',
    prompt: 'BSC uses a proof-of-staked authority consensus.',
    answer: true,
    explanation: 'PoSA is the consensus used by BSC.'
  },
  {
    id: 'bsc-easy-04',
    topic: 'bsc',
    difficulty: 'easy',
    prompt: 'BSC is part of the Binance ecosystem.',
    answer: true,
    explanation: 'BSC is associated with Binance and BNB Chain.'
  },
  {
    id: 'bsc-easy-05',
    topic: 'bsc',
    difficulty: 'easy',
    prompt: 'BSC blocks are faster than Bitcoin\'s 10 minute blocks.',
    answer: true,
    explanation: 'BSC targets a few seconds per block.'
  },
  {
    id: 'bsc-easy-06',
    topic: 'bsc',
    difficulty: 'easy',
    prompt: 'BSC uses the same address format as Ethereum.',
    answer: true,
    explanation: 'Both use 0x-prefixed addresses.'
  },
  {
    id: 'bsc-easy-07',
    topic: 'bsc',
    difficulty: 'easy',
    prompt: 'BSC is a proof-of-work chain.',
    answer: false,
    explanation: 'BSC uses proof-of-staked authority.'
  },
  {
    id: 'bsc-easy-08',
    topic: 'bsc',
    difficulty: 'easy',
    prompt: 'BSC can run Solidity smart contracts.',
    answer: true,
    explanation: 'Solidity contracts deploy on BSC.'
  },
  {
    id: 'bsc-easy-09',
    topic: 'bsc',
    difficulty: 'easy',
    prompt: 'BSC mainnet chain ID is 56.',
    answer: true,
    explanation: 'Chain ID 56 identifies BSC mainnet.'
  },
  {
    id: 'bsc-easy-10',
    topic: 'bsc',
    difficulty: 'easy',
    prompt: 'BSC transactions pay gas fees in BNB.',
    answer: true,
    explanation: 'BNB is used for gas fees on BSC.'
  },
  {
    id: 'bsc-medium-01',
    topic: 'bsc',
    difficulty: 'medium',
    prompt: 'BSC has a limited set of validators compared to Ethereum.',
    answer: true,
    explanation: 'BSC runs with a small, rotating validator set.'
  },
  {
    id: 'bsc-medium-02',
    topic: 'bsc',
    difficulty: 'medium',
    prompt: 'BSC is part of the broader BNB Chain ecosystem.',
    answer: true,
    explanation: 'BNB Chain includes BSC and other components.'
  },
  {
    id: 'bsc-medium-03',
    topic: 'bsc',
    difficulty: 'medium',
    prompt: 'BSC supports the BEP-20 token standard similar to ERC-20.',
    answer: true,
    explanation: 'BEP-20 mirrors ERC-20 behavior on BSC.'
  },
  {
    id: 'bsc-medium-04',
    topic: 'bsc',
    difficulty: 'medium',
    prompt: 'BSC achieves faster finality with shorter block times.',
    answer: true,
    explanation: 'Short blocks and PoSA improve finality speed.'
  },
  {
    id: 'bsc-medium-05',
    topic: 'bsc',
    difficulty: 'medium',
    prompt: 'BSC uses the same EVM opcodes as Ethereum.',
    answer: true,
    explanation: 'Contracts run with standard EVM opcodes.'
  },
  {
    id: 'bsc-medium-06',
    topic: 'bsc',
    difficulty: 'medium',
    prompt: 'BSC gas fees are paid in BUSD.',
    answer: false,
    explanation: 'Fees are paid in BNB, not BUSD.'
  },
  {
    id: 'bsc-medium-07',
    topic: 'bsc',
    difficulty: 'medium',
    prompt: 'BSC supports bridges to other blockchains.',
    answer: true,
    explanation: 'Users can bridge assets to and from BSC.'
  },
  {
    id: 'bsc-medium-08',
    topic: 'bsc',
    difficulty: 'medium',
    prompt: 'BSC is permissionless with no validator requirements.',
    answer: false,
    explanation: 'Validator participation is limited and curated.'
  },
  {
    id: 'bsc-medium-09',
    topic: 'bsc',
    difficulty: 'medium',
    prompt: 'BSC average block time is about 3 seconds.',
    answer: true,
    explanation: 'Blocks are typically produced every few seconds.'
  },
  {
    id: 'bsc-medium-10',
    topic: 'bsc',
    difficulty: 'medium',
    prompt: 'BSC uses Tendermint consensus.',
    answer: false,
    explanation: 'BSC uses proof-of-staked authority, not Tendermint.'
  },
  {
    id: 'bsc-difficult-01',
    topic: 'bsc',
    difficulty: 'difficult',
    prompt: 'BSC uses a set of 21 active validators at a time.',
    answer: true,
    explanation: 'BSC rotates 21 validators in its PoSA set.'
  },
  {
    id: 'bsc-difficult-02',
    topic: 'bsc',
    difficulty: 'difficult',
    prompt: 'BSC uses the same checksum rules for addresses as Ethereum.',
    answer: true,
    explanation: 'Both use EIP-55 checksum for addresses.'
  },
  {
    id: 'bsc-difficult-03',
    topic: 'bsc',
    difficulty: 'difficult',
    prompt: 'BSC fast finality comes from BFT-style validator agreement.',
    answer: true,
    explanation: 'PoSA validators reach rapid finality.'
  },
  {
    id: 'bsc-difficult-04',
    topic: 'bsc',
    difficulty: 'difficult',
    prompt: 'BSC block gas limits can be higher than Ethereum\'s.',
    answer: true,
    explanation: 'BSC often configures higher gas limits.'
  },
  {
    id: 'bsc-difficult-05',
    topic: 'bsc',
    difficulty: 'difficult',
    prompt: 'BSC burns base fees exactly like EIP-1559 by default.',
    answer: false,
    explanation: 'BSC does not fully mirror EIP-1559 burning.'
  },
  {
    id: 'bsc-difficult-06',
    topic: 'bsc',
    difficulty: 'difficult',
    prompt: 'BSC uses the standard Ethereum JSON-RPC interface.',
    answer: true,
    explanation: 'Ethereum tooling works with BSC RPC.'
  },
  {
    id: 'bsc-difficult-07',
    topic: 'bsc',
    difficulty: 'difficult',
    prompt: 'BSC validator selection uses BNB staking.',
    answer: true,
    explanation: 'BNB staking is used to become a validator.'
  },
  {
    id: 'bsc-difficult-08',
    topic: 'bsc',
    difficulty: 'difficult',
    prompt: 'Ethereum contract bytecode can be deployed to BSC without changes.',
    answer: true,
    explanation: 'EVM compatibility allows the same bytecode.'
  },
  {
    id: 'bsc-difficult-09',
    topic: 'bsc',
    difficulty: 'difficult',
    prompt: 'BSC uses an account-based state model like Ethereum.',
    answer: true,
    explanation: 'BSC tracks balances in accounts.'
  },
  {
    id: 'bsc-difficult-10',
    topic: 'bsc',
    difficulty: 'difficult',
    prompt: 'BSC is designed to have thousands of validators by default.',
    answer: false,
    explanation: 'BSC keeps a small active validator set.'
  },
  {
    id: 'base-easy-01',
    topic: 'base',
    difficulty: 'easy',
    prompt: 'Base is an Ethereum Layer 2 network built by Coinbase.',
    answer: true,
    explanation: 'Base is a Coinbase-backed Ethereum L2.'
  },
  {
    id: 'base-easy-02',
    topic: 'base',
    difficulty: 'easy',
    prompt: 'Base is built on the OP Stack.',
    answer: true,
    explanation: 'Base uses Optimism\'s OP Stack technology.'
  },
  {
    id: 'base-easy-03',
    topic: 'base',
    difficulty: 'easy',
    prompt: 'Base uses ETH for gas fees.',
    answer: true,
    explanation: 'ETH is the gas token on Base.'
  },
  {
    id: 'base-easy-04',
    topic: 'base',
    difficulty: 'easy',
    prompt: 'Base is compatible with the EVM.',
    answer: true,
    explanation: 'EVM compatibility enables Ethereum tooling.'
  },
  {
    id: 'base-easy-05',
    topic: 'base',
    difficulty: 'easy',
    prompt: 'Base posts transaction data to Ethereum for security.',
    answer: true,
    explanation: 'L2 data is posted to Ethereum for security.'
  },
  {
    id: 'base-easy-06',
    topic: 'base',
    difficulty: 'easy',
    prompt: 'Base is a proof-of-work chain.',
    answer: false,
    explanation: 'Base is a rollup, not a proof-of-work chain.'
  },
  {
    id: 'base-easy-07',
    topic: 'base',
    difficulty: 'easy',
    prompt: 'Base mainnet chain ID is 8453.',
    answer: true,
    explanation: 'Chain ID 8453 identifies Base mainnet.'
  },
  {
    id: 'base-easy-08',
    topic: 'base',
    difficulty: 'easy',
    prompt: 'Base aims to be a low-cost scaling network for Ethereum.',
    answer: true,
    explanation: 'Lower fees are a key goal of Base.'
  },
  {
    id: 'base-easy-09',
    topic: 'base',
    difficulty: 'easy',
    prompt: 'Base supports smart contracts written in Solidity.',
    answer: true,
    explanation: 'Solidity contracts can deploy on Base.'
  },
  {
    id: 'base-easy-10',
    topic: 'base',
    difficulty: 'easy',
    prompt: 'Base is a Layer 1 chain like Ethereum.',
    answer: false,
    explanation: 'Base is a Layer 2 rollup on Ethereum.'
  },
  {
    id: 'base-medium-01',
    topic: 'base',
    difficulty: 'medium',
    prompt: 'Base uses optimistic rollup technology.',
    answer: true,
    explanation: 'Base is an optimistic rollup on Ethereum.'
  },
  {
    id: 'base-medium-02',
    topic: 'base',
    difficulty: 'medium',
    prompt: 'Base transactions are batched and submitted to Ethereum.',
    answer: true,
    explanation: 'Rollup batches are posted to L1.'
  },
  {
    id: 'base-medium-03',
    topic: 'base',
    difficulty: 'medium',
    prompt: 'Base uses the same address format as Ethereum.',
    answer: true,
    explanation: 'Addresses are standard 0x Ethereum addresses.'
  },
  {
    id: 'base-medium-04',
    topic: 'base',
    difficulty: 'medium',
    prompt: 'Bridging ETH to Base requires using a bridge.',
    answer: true,
    explanation: 'Users move assets via a bridge.'
  },
  {
    id: 'base-medium-05',
    topic: 'base',
    difficulty: 'medium',
    prompt: 'Base inherits security from Ethereum.',
    answer: true,
    explanation: 'Rollup data is secured by Ethereum.'
  },
  {
    id: 'base-medium-06',
    topic: 'base',
    difficulty: 'medium',
    prompt: 'Base can be accessed with standard Ethereum RPC tools.',
    answer: true,
    explanation: 'RPC methods match Ethereum expectations.'
  },
  {
    id: 'base-medium-07',
    topic: 'base',
    difficulty: 'medium',
    prompt: 'Base uses a separate native token called BASE.',
    answer: false,
    explanation: 'ETH is the gas token on Base.'
  },
  {
    id: 'base-medium-08',
    topic: 'base',
    difficulty: 'medium',
    prompt: 'Base\'s official bridge is compatible with the OP Stack.',
    answer: true,
    explanation: 'Base uses the OP Stack bridging system.'
  },
  {
    id: 'base-medium-09',
    topic: 'base',
    difficulty: 'medium',
    prompt: 'Base gas fees are paid in ETH.',
    answer: true,
    explanation: 'ETH is used for L2 gas costs.'
  },
  {
    id: 'base-medium-10',
    topic: 'base',
    difficulty: 'medium',
    prompt: 'Base withdrawals to L1 require waiting for a challenge window.',
    answer: true,
    explanation: 'Optimistic rollups require a dispute period.'
  },
  {
    id: 'base-difficult-01',
    topic: 'base',
    difficulty: 'difficult',
    prompt: 'OP Stack chains use fraud proofs with a challenge period.',
    answer: true,
    explanation: 'Optimistic rollups rely on fraud proofs.'
  },
  {
    id: 'base-difficult-02',
    topic: 'base',
    difficulty: 'difficult',
    prompt: 'Base supports the same EVM opcodes as Ethereum.',
    answer: true,
    explanation: 'Base is EVM-equivalent for most opcodes.'
  },
  {
    id: 'base-difficult-03',
    topic: 'base',
    difficulty: 'difficult',
    prompt: 'Base uses a sequencer to order transactions before L1 posting.',
    answer: true,
    explanation: 'Sequencers order L2 transactions.'
  },
  {
    id: 'base-difficult-04',
    topic: 'base',
    difficulty: 'difficult',
    prompt: 'Base mainnet uses chain ID 8453 and Base Sepolia uses 84532.',
    answer: true,
    explanation: 'Those are the standard chain IDs.'
  },
  {
    id: 'base-difficult-05',
    topic: 'base',
    difficulty: 'difficult',
    prompt: 'Base withdrawals to L1 can take days due to the challenge window.',
    answer: true,
    explanation: 'Optimistic rollups require a waiting period.'
  },
  {
    id: 'base-difficult-06',
    topic: 'base',
    difficulty: 'difficult',
    prompt: 'Base uses zk-SNARKs for proofs by default.',
    answer: false,
    explanation: 'Base is optimistic, not zero-knowledge based.'
  },
  {
    id: 'base-difficult-07',
    topic: 'base',
    difficulty: 'difficult',
    prompt: 'Base transactions include L1 fee data for estimating L1 costs.',
    answer: true,
    explanation: 'Rollups expose L1 fee components.'
  },
  {
    id: 'base-difficult-08',
    topic: 'base',
    difficulty: 'difficult',
    prompt: 'ERC-20 contracts can be deployed on Base without modification.',
    answer: true,
    explanation: 'EVM compatibility allows standard ERC-20 deployment.'
  },
  {
    id: 'base-difficult-09',
    topic: 'base',
    difficulty: 'difficult',
    prompt: 'Base is secured by its own independent validator set.',
    answer: false,
    explanation: 'Base relies on Ethereum for security.'
  },
  {
    id: 'base-difficult-10',
    topic: 'base',
    difficulty: 'difficult',
    prompt: 'Base uses the same precompiles as Ethereum.',
    answer: true,
    explanation: 'Base follows Ethereum precompile behavior.'
  },
  {
    id: 'solana-easy-01',
    topic: 'solana',
    difficulty: 'easy',
    prompt: 'Solana uses SOL as its native token.',
    answer: true,
    explanation: 'SOL is used for fees and staking.'
  },
  {
    id: 'solana-easy-02',
    topic: 'solana',
    difficulty: 'easy',
    prompt: 'Solana is designed for high throughput.',
    answer: true,
    explanation: 'Solana aims for fast, high-volume processing.'
  },
  {
    id: 'solana-easy-03',
    topic: 'solana',
    difficulty: 'easy',
    prompt: 'Solana combines Proof of History with Proof of Stake.',
    answer: true,
    explanation: 'PoH provides ordering and PoS secures the chain.'
  },
  {
    id: 'solana-easy-04',
    topic: 'solana',
    difficulty: 'easy',
    prompt: 'Solana addresses are base58-encoded public keys.',
    answer: true,
    explanation: 'Addresses are base58 encoded public keys.'
  },
  {
    id: 'solana-easy-05',
    topic: 'solana',
    difficulty: 'easy',
    prompt: 'Solana programs are the equivalent of smart contracts.',
    answer: true,
    explanation: 'Programs contain on-chain logic like contracts.'
  },
  {
    id: 'solana-easy-06',
    topic: 'solana',
    difficulty: 'easy',
    prompt: 'Solana uses the EVM as its virtual machine.',
    answer: false,
    explanation: 'Solana uses a different runtime than the EVM.'
  },
  {
    id: 'solana-easy-07',
    topic: 'solana',
    difficulty: 'easy',
    prompt: 'Solana launched mainnet beta in 2020.',
    answer: true,
    explanation: 'Mainnet beta launched in 2020.'
  },
  {
    id: 'solana-easy-08',
    topic: 'solana',
    difficulty: 'easy',
    prompt: 'Solana transaction fees are paid in SOL.',
    answer: true,
    explanation: 'Fees are paid in SOL.'
  },
  {
    id: 'solana-easy-09',
    topic: 'solana',
    difficulty: 'easy',
    prompt: 'Solana runs a single global state machine.',
    answer: true,
    explanation: 'Solana is a single-chain state machine.'
  },
  {
    id: 'solana-easy-10',
    topic: 'solana',
    difficulty: 'easy',
    prompt: 'Solana uses an account and program model rather than UTXO.',
    answer: true,
    explanation: 'Solana uses accounts and programs.'
  },
  {
    id: 'solana-medium-01',
    topic: 'solana',
    difficulty: 'medium',
    prompt: 'Solana\'s runtime is called Sealevel.',
    answer: true,
    explanation: 'Sealevel enables parallel transaction execution.'
  },
  {
    id: 'solana-medium-02',
    topic: 'solana',
    difficulty: 'medium',
    prompt: 'Solana executes non-conflicting transactions in parallel.',
    answer: true,
    explanation: 'Parallel execution is a core Solana feature.'
  },
  {
    id: 'solana-medium-03',
    topic: 'solana',
    difficulty: 'medium',
    prompt: 'Solana consensus includes Tower BFT.',
    answer: true,
    explanation: 'Tower BFT is built on top of PoH.'
  },
  {
    id: 'solana-medium-04',
    topic: 'solana',
    difficulty: 'medium',
    prompt: 'Solana block times are around 400 milliseconds.',
    answer: true,
    explanation: 'Solana targets sub-second block times.'
  },
  {
    id: 'solana-medium-05',
    topic: 'solana',
    difficulty: 'medium',
    prompt: 'Solana programs are typically written in Rust.',
    answer: true,
    explanation: 'Rust is the most common Solana language.'
  },
  {
    id: 'solana-medium-06',
    topic: 'solana',
    difficulty: 'medium',
    prompt: 'Solana uses a leader schedule to assign block producers.',
    answer: true,
    explanation: 'Leaders are scheduled ahead of time.'
  },
  {
    id: 'solana-medium-07',
    topic: 'solana',
    difficulty: 'medium',
    prompt: 'Solana uses rent to discourage unused accounts.',
    answer: true,
    explanation: 'Rent helps prevent state bloat.'
  },
  {
    id: 'solana-medium-08',
    topic: 'solana',
    difficulty: 'medium',
    prompt: 'Solana requires exactly 32 SOL to become a validator.',
    answer: false,
    explanation: 'There is no fixed 32 SOL requirement.'
  },
  {
    id: 'solana-medium-09',
    topic: 'solana',
    difficulty: 'medium',
    prompt: 'Solana finality depends on stake-weighted voting.',
    answer: true,
    explanation: 'Finality comes from stake-weighted consensus.'
  },
  {
    id: 'solana-medium-10',
    topic: 'solana',
    difficulty: 'medium',
    prompt: 'Solana relies on a traditional global mempool.',
    answer: false,
    explanation: 'Gulf Stream forwards transactions to leaders directly.'
  },
  {
    id: 'solana-difficult-01',
    topic: 'solana',
    difficulty: 'difficult',
    prompt: 'Solana accounts have owners that control which program can modify them.',
    answer: true,
    explanation: 'Account owners restrict which program can write.'
  },
  {
    id: 'solana-difficult-02',
    topic: 'solana',
    difficulty: 'difficult',
    prompt: 'Solana transactions include a recent blockhash to prevent replay.',
    answer: true,
    explanation: 'Blockhashes make transactions short-lived.'
  },
  {
    id: 'solana-difficult-03',
    topic: 'solana',
    difficulty: 'difficult',
    prompt: 'Solana programs run on a BPF virtual machine.',
    answer: true,
    explanation: 'Programs are compiled to eBPF.'
  },
  {
    id: 'solana-difficult-04',
    topic: 'solana',
    difficulty: 'difficult',
    prompt: 'Solana token contracts follow the SPL standard.',
    answer: true,
    explanation: 'SPL is the standard token program.'
  },
  {
    id: 'solana-difficult-05',
    topic: 'solana',
    difficulty: 'difficult',
    prompt: 'Program Derived Addresses are off-curve addresses on Solana.',
    answer: true,
    explanation: 'PDAs are derived and do not lie on the curve.'
  },
  {
    id: 'solana-difficult-06',
    topic: 'solana',
    difficulty: 'difficult',
    prompt: 'Solana uses compute budgets to cap transaction compute units.',
    answer: true,
    explanation: 'Compute budgets limit transaction resource use.'
  },
  {
    id: 'solana-difficult-07',
    topic: 'solana',
    difficulty: 'difficult',
    prompt: 'Solana requires a supermajority of stake for finality.',
    answer: true,
    explanation: 'Finality requires supermajority vote lockouts.'
  },
  {
    id: 'solana-difficult-08',
    topic: 'solana',
    difficulty: 'difficult',
    prompt: 'Solana uses EIP-1559 style fee burning.',
    answer: false,
    explanation: 'Solana does not use EIP-1559 fee mechanics.'
  },
  {
    id: 'solana-difficult-09',
    topic: 'solana',
    difficulty: 'difficult',
    prompt: 'Solana epochs last roughly two days.',
    answer: true,
    explanation: 'Epochs are about two to three days long.'
  },
  {
    id: 'solana-difficult-10',
    topic: 'solana',
    difficulty: 'difficult',
    prompt: 'Solana supports durable nonce accounts for offline signing.',
    answer: true,
    explanation: 'Durable nonce accounts enable offline signing.'
  },
];
