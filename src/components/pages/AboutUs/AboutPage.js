import React from 'react';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: 'Abdilaipov Umar',
            year: 2023,
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        const { author, year } = this.state;

        return (
            <div>
                <h1>About Page</h1>
                <p>This is the About page content.</p>
                <p>Author: {author}</p>
                <p>Year: {year}</p>
            </div>
        );
    }
}

export default AboutPage;
