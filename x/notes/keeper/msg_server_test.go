package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/theam/ignite-notes-experiment/testutil/keeper"
	"github.com/theam/ignite-notes-experiment/x/notes/keeper"
	"github.com/theam/ignite-notes-experiment/x/notes/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.NotesKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
