package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/theam/ignite-notes-experiment/testutil/keeper"
	"github.com/theam/ignite-notes-experiment/x/notes/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.NotesKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
