package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/theam/ignite-notes-experiment/x/notes/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) NoteAll(c context.Context, req *types.QueryAllNoteRequest) (*types.QueryAllNoteResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var notes []types.Note
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	noteStore := prefix.NewStore(store, types.KeyPrefix(types.NoteKeyPrefix))

	pageRes, err := query.Paginate(noteStore, req.Pagination, func(key []byte, value []byte) error {
		var note types.Note
		if err := k.cdc.Unmarshal(value, &note); err != nil {
			return err
		}

		notes = append(notes, note)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllNoteResponse{Note: notes, Pagination: pageRes}, nil
}

func (k Keeper) Note(c context.Context, req *types.QueryGetNoteRequest) (*types.QueryGetNoteResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetNote(
		ctx,
		req.Uid,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetNoteResponse{Note: val}, nil
}
