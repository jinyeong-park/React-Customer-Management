import React from 'react';

class CustomerDelete extends React.Component {

    deleteCustomer(id) {
        // e.g. /api/customers/7
        const url = '/api/customers/' + id;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>Delete</button>
        )
    }
}
export default CustomerDelete;