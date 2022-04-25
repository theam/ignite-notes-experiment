/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../notes/params";
import { Note } from "../notes/note";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "theam.ignitenotesexperiment.notes";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetNoteRequest {
  uid: string;
}

export interface QueryGetNoteResponse {
  note: Note | undefined;
}

export interface QueryAllNoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllNoteResponse {
  note: Note[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetNoteRequest: object = { uid: "" };

export const QueryGetNoteRequest = {
  encode(
    message: QueryGetNoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetNoteRequest } as QueryGetNoteRequest;
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

  fromJSON(object: any): QueryGetNoteRequest {
    const message = { ...baseQueryGetNoteRequest } as QueryGetNoteRequest;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
    }
    return message;
  },

  toJSON(message: QueryGetNoteRequest): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetNoteRequest>): QueryGetNoteRequest {
    const message = { ...baseQueryGetNoteRequest } as QueryGetNoteRequest;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
    }
    return message;
  },
};

const baseQueryGetNoteResponse: object = {};

export const QueryGetNoteResponse = {
  encode(
    message: QueryGetNoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.note !== undefined) {
      Note.encode(message.note, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetNoteResponse } as QueryGetNoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.note = Note.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNoteResponse {
    const message = { ...baseQueryGetNoteResponse } as QueryGetNoteResponse;
    if (object.note !== undefined && object.note !== null) {
      message.note = Note.fromJSON(object.note);
    } else {
      message.note = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNoteResponse): unknown {
    const obj: any = {};
    message.note !== undefined &&
      (obj.note = message.note ? Note.toJSON(message.note) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetNoteResponse>): QueryGetNoteResponse {
    const message = { ...baseQueryGetNoteResponse } as QueryGetNoteResponse;
    if (object.note !== undefined && object.note !== null) {
      message.note = Note.fromPartial(object.note);
    } else {
      message.note = undefined;
    }
    return message;
  },
};

const baseQueryAllNoteRequest: object = {};

export const QueryAllNoteRequest = {
  encode(
    message: QueryAllNoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllNoteRequest } as QueryAllNoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNoteRequest {
    const message = { ...baseQueryAllNoteRequest } as QueryAllNoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllNoteRequest>): QueryAllNoteRequest {
    const message = { ...baseQueryAllNoteRequest } as QueryAllNoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllNoteResponse: object = {};

export const QueryAllNoteResponse = {
  encode(
    message: QueryAllNoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.note) {
      Note.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllNoteResponse } as QueryAllNoteResponse;
    message.note = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.note.push(Note.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNoteResponse {
    const message = { ...baseQueryAllNoteResponse } as QueryAllNoteResponse;
    message.note = [];
    if (object.note !== undefined && object.note !== null) {
      for (const e of object.note) {
        message.note.push(Note.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNoteResponse): unknown {
    const obj: any = {};
    if (message.note) {
      obj.note = message.note.map((e) => (e ? Note.toJSON(e) : undefined));
    } else {
      obj.note = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllNoteResponse>): QueryAllNoteResponse {
    const message = { ...baseQueryAllNoteResponse } as QueryAllNoteResponse;
    message.note = [];
    if (object.note !== undefined && object.note !== null) {
      for (const e of object.note) {
        message.note.push(Note.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Note by index. */
  Note(request: QueryGetNoteRequest): Promise<QueryGetNoteResponse>;
  /** Queries a list of Note items. */
  NoteAll(request: QueryAllNoteRequest): Promise<QueryAllNoteResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "theam.ignitenotesexperiment.notes.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Note(request: QueryGetNoteRequest): Promise<QueryGetNoteResponse> {
    const data = QueryGetNoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "theam.ignitenotesexperiment.notes.Query",
      "Note",
      data
    );
    return promise.then((data) =>
      QueryGetNoteResponse.decode(new Reader(data))
    );
  }

  NoteAll(request: QueryAllNoteRequest): Promise<QueryAllNoteResponse> {
    const data = QueryAllNoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "theam.ignitenotesexperiment.notes.Query",
      "NoteAll",
      data
    );
    return promise.then((data) =>
      QueryAllNoteResponse.decode(new Reader(data))
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
