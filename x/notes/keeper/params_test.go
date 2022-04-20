package keeper_test

import (
	"testing"

	testkeeper "github.com/AdrianLorenzoDev/notes/testutil/keeper"
	"github.com/AdrianLorenzoDev/notes/x/notes/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.NotesKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
