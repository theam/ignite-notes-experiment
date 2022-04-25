package types

/**
func TestMsgCreateNote_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateNote
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateNote{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateNote{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateNote_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateNote
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateNote{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateNote{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteNote_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteNote
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteNote{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteNote{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
*/
