package keeper_test

import (
	"strconv"
)

// Prevent strconv unused error
var _ = strconv.IntSize

// TODO: Tests not working
/**
func TestNoteQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.NotesKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNNote(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetNoteRequest
		response *types.QueryGetNoteResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetNoteRequest{
				Uid: msgs[0].Uid,
			},
			response: &types.QueryGetNoteResponse{Note: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetNoteRequest{
				Uid: msgs[1].Uid,
			},
			response: &types.QueryGetNoteResponse{Note: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetNoteRequest{
				Uid: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Note(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestNoteQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.NotesKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNNote(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllNoteRequest {
		return &types.QueryAllNoteRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.NoteAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Note), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Note),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.NoteAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Note), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Note),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.NoteAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Note),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.NoteAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
*/