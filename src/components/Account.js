import React from 'react';
import styled from 'styled-components';

import Style from './Style';

const AccountContent = (Style) => styled.div`

    color: blue;

`;
const Account = (props) => (

    <AccountContent className="content" id="contact-content">
        <h1>Classes</h1>
    </AccountContent>
);

export default Account;