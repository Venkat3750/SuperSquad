import React, {Component} from 'react';
import partyPepper from './assets/party-pepper.png';

class AgeStats extends Component{
    timeSince(date){
        let today = new Date().getTime();
        let other_day = new Date(date).getTime();
        let difference = Math.floor(today - other_day)/(24*3600000);
        let years = Math.floor(difference/365);
        difference -=years*365;
        let months = Math.floor(difference/31);
        difference-= Math.floor( months*31);
        return `${years}years,${months} months, and ${difference} days`;
    }
    render() {
        return(
            <div>
                <h3>
                    {this.props.date}
                    </h3>
                    <h4>
                   Congrats on {this.timeSince(this.props.date)}
                    </h4>
                    <img src={partyPepper} alt="partyPepper" className="partyPepper"/>
                </div>
        )
    }
}

export default AgeStats;