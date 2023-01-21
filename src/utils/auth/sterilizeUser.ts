export default (data: any) => {
    return {
        email: data.data.user.email,
        first_name: data.data.user.first_name,
        access_token: data.data.access_token,
        trials: data.data.user.trials,
        roles: data.data.user.role,
        verified: data.data.user.account_verified,
    }
}
