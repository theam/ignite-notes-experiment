package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/AdrianLorenzoDev/notes/testutil/keeper"
	"github.com/AdrianLorenzoDev/notes/x/notes/keeper"
	"github.com/AdrianLorenzoDev/notes/x/notes/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.NotesKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
