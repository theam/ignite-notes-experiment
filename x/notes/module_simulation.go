package notes

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/theam/ignite-notes-experiment/testutil/sample"
	notessimulation "github.com/theam/ignite-notes-experiment/x/notes/simulation"
	"github.com/theam/ignite-notes-experiment/x/notes/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = notessimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateNote = "op_weight_msg_note"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateNote int = 100

	opWeightMsgUpdateNote = "op_weight_msg_note"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateNote int = 100

	opWeightMsgDeleteNote = "op_weight_msg_note"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteNote int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	notesGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		NoteList: []types.Note{
			{
				Creator: sample.AccAddress(),
				Uid:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Uid:   "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&notesGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateNote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateNote, &weightMsgCreateNote, nil,
		func(_ *rand.Rand) {
			weightMsgCreateNote = defaultWeightMsgCreateNote
		},
	)
	/***operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateNote,
		notessimulation.SimulateMsgCreateNote(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateNote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateNote, &weightMsgUpdateNote, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateNote = defaultWeightMsgUpdateNote
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateNote,
		notessimulation.SimulateMsgUpdateNote(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteNote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteNote, &weightMsgDeleteNote, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteNote = defaultWeightMsgDeleteNote
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteNote,
		notessimulation.SimulateMsgDeleteNote(am.accountKeeper, am.bankKeeper, am.keeper),
	))*/

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
