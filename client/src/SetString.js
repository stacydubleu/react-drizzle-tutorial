import React from 'react';

class SetString extends React.Component {
    state = { stackId: null };

    handleKeyDown = e => {
        if (e.keyCode === 13) {
            this.setValue(e.target.value);
        }
    };

    setValue = value => {
        const { drizzle, drizzleState } = this.props;
        const contract = drizzle.contracts.MyStringStore;

        //drizzle will know to use the set method with value
        const stackId = contract.methods['set'].cacheSend(value, {
            from: drizzleState.accounts[0]
        });
        // save the stackid for later
        this.setState({ stackId });
    };

    getTxStatus = () => {
        //get the transaction states from the drizzle state
        const { transactions, transactionStack } = this.props.drizzleState;
        //get the transaction hash using our saved 'stackId'
        const txHash = transactionStack[this.setate.stackId];
        //if transaction hash does not exist, don't display anything
        if(!txHash) return null;
        //otherwise return transaction status
        return `Transaction status: ${transactions[txHash].status}`;
    };

    render() {
        return (
            <div>
                <input type='text' onKeyDown={this.handleKeyDown} />
                <div>{this.getTxStatus()}</div>
            </div>
        );
    }
}

export default SetString;