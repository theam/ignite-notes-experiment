package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/google/uuid"
	"github.com/theam/ignite-notes-experiment/x/notes/types"
)

func (k msgServer) CreateNote(goCtx context.Context, msg *types.MsgCreateNote) (*types.MsgCreateNoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var note = types.Note{
		Creator:   msg.Creator,
		Uid:     uuid.New().String(),
		Title:     msg.Title,
		Content:   msg.Content,
		CreatedAt: ctx.BlockHeight(),
	}

	k.SetNote(
		ctx,
		note,
	)
	return &types.MsgCreateNoteResponse{}, nil
}

func (k msgServer) UpdateNote(goCtx context.Context, msg *types.MsgUpdateNote) (*types.MsgUpdateNoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetNote(
		ctx,
		msg.Uid,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var note = types.Note{
		Creator:   msg.Creator,
		Uid:       msg.Uid,
		Title:     msg.Title,
		Content:   msg.Content,
		CreatedAt: valFound.CreatedAt,
	}

	k.SetNote(ctx, note)

	return &types.MsgUpdateNoteResponse{}, nil
}

func (k msgServer) DeleteNote(goCtx context.Context, msg *types.MsgDeleteNote) (*types.MsgDeleteNoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	_, isFound := k.GetNote(
		ctx,
		msg.Uid,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	k.RemoveNote(
		ctx,
		msg.Uid,
	)

	return &types.MsgDeleteNoteResponse{}, nil
}
