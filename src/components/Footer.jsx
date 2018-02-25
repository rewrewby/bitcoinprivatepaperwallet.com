import React, { Component } from 'react';
import { Grid, Row, Col }   from 'react-bootstrap';

import website from "../website.png";
import github from "../github.png";
import twitter from "../twitter.png";
import discord from "../discord.png";
import bitcointalk from "../bitcointalk.png";
import reddit from "../reddit.png";

export default class Footer extends Component {
    render() {
        return (
            <Grid fluid={true} id="footer">
                <br />
                <div className="container">
                <Row>
                    <Col xs={12} className="footerSocialWrap">
                        <ul className="footerSocial">
                            <li>
                                <a href="https://btcprivate.org">
                                    <img src={website} alt="website" title="Official site"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://btcprivate.pro">
                                    <img src={bitcointalk} alt="bitcointalk" title="Mining Pool"/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12}>

                    </Col>
                </Row>
                </div>
            </Grid>
        );
    }
}
