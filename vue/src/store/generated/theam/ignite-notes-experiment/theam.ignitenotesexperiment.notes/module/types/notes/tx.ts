/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "theam.ignitenotesexperiment.notes";

export interface MsgCreateNote {
  creator: string;
  title: string;
  content: string;
}

export interface MsgCreateNoteResponse {
  uid: string;
}

export interface MsgUpdateNote {
  uid: string;
  creator: string;
  title: string;
  content: string;
}

export interface MsgUpdateNoteResponse {
  uid: string;
}

export interface MsgDeleteNote {
  uid: string;
  creator: string;
}

export interface MsgDeleteNoteResponse {}

const baseMsgCreateNote: object = { creator: "", title: "", content: "" };

export const MsgCreateNote = {
  encode(message: MsgCreateNote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateNote } as MsgCreateNote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNote {
    const message = { ...baseMsgCreateNote } as MsgCreateNote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = "";
    }
    return message;
  },

  toJSON(message: MsgCreateNote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateNote>): MsgCreateNote {
    const message = { ...baseMsgCreateNote } as MsgCreateNote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = "";
    }
    return message;
  },
};

const baseMsgCreateNoteResponse: object = { uid: "" };

export const MsgCreateNoteResponse = {
  encode(
    message: MsgCreateNoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateNoteResponse } as MsgCreateNoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNoteResponse {
    const message = { ...baseMsgCreateNoteResponse } as MsgCreateNoteResponse;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
    }
    return message;
  },

  toJSON(message: MsgCreateNoteResponse): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateNoteResponse>
  ): MsgCreateNoteResponse {
    const message = { ...baseMsgCreateNoteResponse } as MsgCreateNoteResponse;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
    }
    return message;
  },
};

const baseMsgUpdateNote: object = {
  uid: "",
  creator: "",
  title: "",
  content: "",
};

export const MsgUpdateNote = {
  encode(message: MsgUpdateNote, writer: Writer = Writer.create()): Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(34).string(message.content);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateNote } as MsgUpdateNote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateNote {
    const message = { ...baseMsgUpdateNote } as MsgUpdateNote;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateNote): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateNote>): MsgUpdateNote {
    const message = { ...baseMsgUpdateNote } as MsgUpdateNote;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = "";
    }
    return message;
  },
};

const baseMsgUpdateNoteResponse: object = { uid: "" };

export const MsgUpdateNoteResponse = {
  encode(
    message: MsgUpdateNoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateNoteResponse } as MsgUpdateNoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateNoteResponse {
    const message = { ...baseMsgUpdateNoteResponse } as MsgUpdateNoteResponse;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateNoteResponse): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateNoteResponse>
  ): MsgUpdateNoteResponse {
    const message = { ...baseMsgUpdateNoteResponse } as MsgUpdateNoteResponse;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
    }
    return message;
  },
};

const baseMsgDeleteNote: object = { uid: "", creator: "" };

export const MsgDeleteNote = {
  encode(message: MsgDeleteNote, writer: Writer = Writer.create()): Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteNote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteNote } as MsgDeleteNote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteNote {
    const message = { ...baseMsgDeleteNote } as MsgDeleteNote;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteNote): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteNote>): MsgDeleteNote {
    const message = { ...baseMsgDeleteNote } as MsgDeleteNote;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteNoteResponse: object = {};

export const MsgDeleteNoteResponse = {
  encode(_: MsgDeleteNoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteNoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteNoteResponse } as MsgDeleteNoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteNoteResponse {
    const message = { ...baseMsgDeleteNoteResponse } as MsgDeleteNoteResponse;
    return message;
  },

  toJSON(_: MsgDeleteNoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteNoteResponse>): MsgDeleteNoteResponse {
    const message = { ...baseMsgDeleteNoteResponse } as MsgDeleteNoteResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateNote(request: MsgCreateNote): Promise<MsgCreateNoteResponse>;
  UpdateNote(request: MsgUpdateNote): Promise<MsgUpdateNoteResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteNote(request: MsgDeleteNote): Promise<MsgDeleteNoteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateNote(request: MsgCreateNote): Promise<MsgCreateNoteResponse> {
    const data = MsgCreateNote.encode(request).finish();
    const promise = this.rpc.request(
      "theam.ignitenotesexperiment.notes.Msg",
      "CreateNote",
      data
    );
    return promise.then((data) =>
      MsgCreateNoteResponse.decode(new Reader(data))
    );
  }

  UpdateNote(request: MsgUpdateNote): Promise<MsgUpdateNoteResponse> {
    const data = MsgUpdateNote.encode(request).finish();
    const promise = this.rpc.request(
      "theam.ignitenotesexperiment.notes.Msg",
      "UpdateNote",
      data
    );
    return promise.then((data) =>
      MsgUpdateNoteResponse.decode(new Reader(data))
    );
  }

  DeleteNote(request: MsgDeleteNote): Promise<MsgDeleteNoteResponse> {
    const data = MsgDeleteNote.encode(request).finish();
    const promise = this.rpc.request(
      "theam.ignitenotesexperiment.notes.Msg",
      "DeleteNote",
      data
    );
    return promise.then((data) =>
      MsgDeleteNoteResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
