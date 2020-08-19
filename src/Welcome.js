import React, {Component} from 'react';
import { Link} from '@reach/router';

class Welcome extends Component {
    render() {

      const {userName, logoutUser} = this.props;

        return(
            <div className="text-center mt-4">
                <span className="text-secondary font-weight-bold pl-1">
                    Welcome, {userName}
                </span>,
                <Link to='/login'>
                <a onClick={e => logoutUser(e)} className="font-weight-bold text-primary pl-1">Log Out</a>
                </Link>
            </div>
        )
    }
}

export default Welcome;