export const state = () => ({
    users: [
        {
            name: 'Users 1',
            id: 1
        },
        {
            name: 'Users 2',
            id: 2
        },
        {
            name: 'Users 3',
            id: 3
        },
        {
            name: 'Users 4',
            id: 4
        },
        {
            name: 'Users 5',
            id: 5
        },
    ]
})

export const getters = {
    getUsers: state => state.users
}