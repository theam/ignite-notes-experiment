package notes_test

import (
	"testing"

	keepertest "github.com/AdrianLorenzoDev/notes/testutil/keeper"
	"github.com/AdrianLorenzoDev/notes/testutil/nullify"
	"github.com/AdrianLorenzoDev/notes/x/notes"
	"github.com/AdrianLorenzoDev/notes/x/notes/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NotesKeeper(t)
	notes.InitGenesis(ctx, *k, genesisState)
	got := notes.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
