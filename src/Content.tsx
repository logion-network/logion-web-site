import { ReactNode } from "react";
import Banner from "./components/Banner";

// Header
export const LINKEDIN_URL: string | undefined = "https://www.linkedin.com/company/logion-network/";
export const TWITTER_URL: string | undefined = "https://twitter.com/logion_network";
export const DISCORD_URL: string | undefined = "https://discord.gg/FvnxrtCYr6";
export const GITHUB_URL: string | undefined = "https://github.com/logion-network";
export const MEDIUM_URL: string | undefined = "https://medium.com/@logion";

// Content
export const CONTENT: ReactNode = (<>
    <Banner
        firstText={<>
            { /* START EDIT */ }
            All projects built with the logion infrastructure<br/><em>protect their digital asset holders</em>
            { /* STOP EDIT */ }
        </>}
        secondText={<>
            { /* START EDIT */ }
            Logion sets a vital market standard to <em>uniquely bind proterty</em>, <em>rights</em> and
            <em>obligations</em>to any digital asset on any chain.
            { /* STOP EDIT */ }
        </>}
        thirdText={<>
            { /* START EDIT */ }
            Everything that is processed by the logion infrastructure is <strong>legally existing</strong> and
            <strong>secured overtime</strong> by design.
            { /* STOP EDIT */ }
        </>}
    />
</>);

// Footer
export const FOOTER_TITLE: ReactNode = (<>
    { /* START EDIT */ }
    In the web3 foundation we trust
    { /* STOP EDIT */ }
</>);
export const FOOTER_TEXT: ReactNode = (<>
    { /* START EDIT */ }
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    { /* STOP EDIT */ }
</>);
