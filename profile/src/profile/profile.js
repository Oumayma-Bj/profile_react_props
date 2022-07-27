import React from 'react';
import PropTypes from 'prop-types';
const Profile = (props) => {
    const handleName = (e) => {
        let name = props.fullName
        alert(name);
    }
    return (
        <div style={{ margin: 50 }}>
            <h1 style={{ textTransform: 'uppercase' }}>{props.fullName}</h1>
            <em style={{ fontSize: 30 }}>{props.profession}</em>
            <div style={{ display: 'flex' }}>
                <p style={{ width: 300 }}>{props.bio}</p>
                {props.children}
            </div>

            <a href="#" onClick={handleName} style={{ background: '#696969', color: '#DCDCDC', padding: "10px 20px", textDecoration: "none" }} >Who am I ?</a>
        </div>
    );
}

Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio : PropTypes.string,
};

Profile.defaultProps = {
    fullName: "Oumayma Ben Jempaa",
    profession: "seeking for a job",
    bio : "GoMyCode FullStack student",
}
  

export default Profile;