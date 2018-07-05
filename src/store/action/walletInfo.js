let actions = {
    walletInfo(option) {
        return function (dispatch, getState) {
            dispatch({
                type: 'WALLETINFO',
                true_banlance: option.true_banlance,
                ttr_banlance: option.ttr_banlance,
                wallet_address: option.wallet_address,
                lock_num: option.lock_num
            })
        }
    }
}

export default actions