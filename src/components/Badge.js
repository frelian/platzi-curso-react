import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {

    render() {

        // Puedo utilizar variables: en el render HTML: {firstName}
        // const firstName = "Julian";
        // const lastName = "Niño";

        const {
            firstName,
            lastName,
            // jobTile,  ejemplo de uso pradicional de props poniendo this.props
            // twitter,  ejemplo de uso pradicional de props poniendo this.props
            avatarUrl,
        } = this.props;

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={ confLogo } alt="Logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={avatarUrl} alt="Avatar"/>


                    <h1>{firstName} <br/> {lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTile}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>

            </div>
        );
    }
}

export default Badge;