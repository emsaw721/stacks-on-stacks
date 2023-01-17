export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
        _id
        username 
        email
        transactions
    }
}`;

export const QUERY_TRANSACITONS = gql`
query transactions($username: String!) {
    transactions(username: $username) {

    }
}
`;

export const QUERY_TRANSACTION = gql`
query transaction($id: ID!) {
    transaction(_id: $id) {

    }
}`;

export const QUERY_BUDGET = gql`
query budget()`