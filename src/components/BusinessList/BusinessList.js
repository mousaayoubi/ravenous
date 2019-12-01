import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map(business => {
                    return <Business business={business}/>
<<<<<<< HEAD
                })}
=======
                })} 
>>>>>>> 29368aebf2b5c16203085ff796e99d7a49184774
            </div>
        )
    };
};

export default BusinessList;