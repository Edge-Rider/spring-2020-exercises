import React, { Component } from 'react';
import { Jumbotron, Container, Row } from 'reactstrap';
import OptionsDropDown from './OptionsDropDown'

export default class Header extends  Component {
    render() {
        const { destinations, origins, setSearchLocation, currentSelection } = this.props
        return (
            <Jumbotron fluid>
                <Container>
                    <Row className="justify-content-between">
                        <h1>Search for flights</h1>
                        <div
                            className="d-flex justify-content-between align-items-center"
                        >
                            <OptionsDropDown
                                position="origin"
                                activeName="Origin"
                                items={origins}
                                setSearchLocation={setSearchLocation}
                                currentSelection={currentSelection.origin}
                            />
                            <OptionsDropDown
                                position="destination"
                                activeName="Destination"
                                items={destinations}
                                setSearchLocation={setSearchLocation}
                                currentSelection={currentSelection.destination}
                            />
                        </div>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}