// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateNote } from "./types/notes/tx";
import { MsgDeleteNote } from "./types/notes/tx";
import { MsgUpdateNote } from "./types/notes/tx";


const types = [
  ["/theam.ignitenotesexperiment.notes.MsgCreateNote", MsgCreateNote],
  ["/theam.ignitenotesexperiment.notes.MsgDeleteNote", MsgDeleteNote],
  ["/theam.ignitenotesexperiment.notes.MsgUpdateNote", MsgUpdateNote],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateNote: (data: MsgCreateNote): EncodeObject => ({ typeUrl: "/theam.ignitenotesexperiment.notes.MsgCreateNote", value: MsgCreateNote.fromPartial( data ) }),
    msgDeleteNote: (data: MsgDeleteNote): EncodeObject => ({ typeUrl: "/theam.ignitenotesexperiment.notes.MsgDeleteNote", value: MsgDeleteNote.fromPartial( data ) }),
    msgUpdateNote: (data: MsgUpdateNote): EncodeObject => ({ typeUrl: "/theam.ignitenotesexperiment.notes.MsgUpdateNote", value: MsgUpdateNote.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
