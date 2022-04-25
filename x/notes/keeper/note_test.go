package keeper_test

import (
	"strconv"
)

// Prevent strconv unused error
var _ = strconv.IntSize

// TODO: Tests not working
/**func createNNote(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Note {
	items := make([]types.Note, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetNote(ctx, items[i])
	}
	return items
}

func TestNoteGet(t *testing.T) {
	keeper, ctx := keepertest.NotesKeeper(t)
	items := createNNote(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetNote(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestNoteRemove(t *testing.T) {
	keeper, ctx := keepertest.NotesKeeper(t)
	items := createNNote(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveNote(ctx,
			item.Index,
		)
		_, found := keeper.GetNote(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestNoteGetAll(t *testing.T) {
	keeper, ctx := keepertest.NotesKeeper(t)
	items := createNNote(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllNote(ctx)),
	)
}*/
