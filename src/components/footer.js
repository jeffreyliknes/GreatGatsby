import React, { Component } from "react";
import styled from "styled-components";
import "../components/styles/footerStyle.scss";

const SpectrumLogoFooter = styled.div`
  display: flex;
  flex-direction: column;
`;
const MailandNumber = styled.div`
  display: flex;
  flex-direction: column;
`;
const FullspectrumWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

class footer extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="mailto:jeff.liknes@gmail.com?subject=DesignbyJeff Project">
            jeff.liknes@gmail.com
          </a>

          <div class="DesignbyJeffLogo" />
        </div>
        <SpectrumLogoFooter>
          <FullspectrumWrapper>
            <MailandNumber>
              <h3>250 354 3192</h3>

              <a href="mailto:fullspectrumnelson@gmail.com?subject=Full Spectrum Electric Project">
                fullspectrumnelson@gmail.com
              </a>
            </MailandNumber>

            <div class="SpecLogo" />
          </FullspectrumWrapper>
        </SpectrumLogoFooter>
      </div>
    );
  }
}

export default footer;
