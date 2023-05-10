import { ReactNode } from "react";
import Banner from "./components/Banner";
import { TextImageCols } from "./components/TextImageCols";
import SimpleSection from "./components/SimpleSection";
import TitleFourByFourCards from "./components/TitleFourByFourCards";
import Image from "./components/Image";
import OneByFourCards from "./components/OneByFourCards";

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
            Logion sets a vital market standard to <em>uniquely bind proterty</em>, <em>rights</em> and <em>obligations</em> to any digital asset on any chain.
            { /* STOP EDIT */ }
        </>}
        thirdText={<>
            { /* START EDIT */ }
            Everything that is processed by the logion infrastructure is <strong>legally existing</strong> and <strong>secured overtime</strong> by design.
            { /* STOP EDIT */ }
        </>}
        image={<>
            <Image
                fileName="media/network.png"
                alt="logion network"
                width="120%"
            />
        </>}
    />
    <TitleFourByFourCards
        title={<>
            { /* START EDIT */ }
            Titre <em>de la section</em>
            { /* STOP EDIT */ }
        </>}
        card1={{
            image: {
                fileName: "media/blockchain.png",
                alt: "blockchain"
            },
            title: "A blockchain by judicial officers",
            text: (<>
                { /* START EDIT */ }
                Logion is operated by a decentralized network of international & independent Judicial Officers,
                the <strong>mandatory foundation</strong> to be the gateway between laws, Real World Asset and the digital economy.
                { /* STOP EDIT */ }
            </>)
        }}
        card2={{
            image: {
                fileName: "media/ipfs.png",
                alt: "blockchain"
            },
            title: "A private & encrypted IPFS network",
            text: (<>
                { /* START EDIT */ }
                Logion infrastructure includes a safe, legally protected, controlled, encrypted and decentralized document storage
                system exclusively operated by Judicial Officers. This allows <strong>token-gated and traceable deliveries</strong> of digital assets,
                and documents.
                { /* STOP EDIT */ }
            </>)
        }}
        card3={{
            image: {
                fileName: "media/verified_issuers.png",
                alt: "blockchain"
            },
            title: "A network of verified issuers",
            text: (<>
                { /* START EDIT */ }
                Lawyers, accountant, solicitors, notaries, auctioneers, court experts, and any regulated or certified professionals can
                onboard Logion and record their legally binding work, audit, statement, and expertise reports. As <strong>verified issuers</strong>, they are
                acting as a decentralised network of real-world <strong>Oracles</strong>.
                { /* STOP EDIT */ }
            </>)
        }}
        card4={{
            image: {
                fileName: "media/zkp.png",
                alt: "blockchain"
            },
            title: "A ZKP system of evidence record",
            text: (<>
                { /* START EDIT */ }
                Provides proof of records without revealing the content of such records. Anyone, especially through the Logion certificate, can
                <strong>verify</strong> the existence of credentials (obligations, values, rights, identity, etc.) bound to Real World assets while
                <strong>preserving privacy and confidentiality</strong>.
                { /* STOP EDIT */ }
            </>)
        }}
        cardsHeight="375px" // Fixed height of cards
    />
    <TextImageCols
        title={<>
            { /* START EDIT */ }
            WEB <em>3</em>
            { /* STOP EDIT */ }
        </>}
        paragraphs={<>
            { /* START EDIT */ }
            <p>The public blockchain that genuinely protects all digital assets and related transactions
                being operated by a decentralized network of legal officers.
            </p>
            <p>The logion infrastructure is bringing to the WEB3 a legal protection, legal officers and
                verified issuers are bringing for decades to the physical world.
            </p>
            <p>The only public blockchain infrastructure where token-related data and files are genuinely
                transformed into certified evidence & tokens are safeguarded by a decentralized network of legal officers.
            </p>
            { /* STOP EDIT */ }
        </>}
        images={<>
            <Image
                fileName="media/world.png"
                alt="world image"
                width="100%"
            />
        </>}
        theme="bright"
    />
    <SimpleSection
        paragraphs={<>
            { /* START EDIT */ }
            <p>Logion blockchain protection comes from an <em>institutional</em> but <em>independent legal officers</em> network
                that operates the logion infrastructure in a decentralized way.
            </p>
            { /* STOP EDIT */ }
        </>}
    />
    <OneByFourCards
        card1={{
            image: {
                fileName: "media/compass.png",
                alt: "compass"
            },
            text: (<>
                { /* START EDIT */ }
                Logion legal officers are working under the rules of a strict code of ethics
                { /* STOP EDIT */ }
            </>)
        }}
        card2={{
            image: {
                fileName: "media/shield.png",
                alt: "shield"
            },
            text: (<>
                { /* START EDIT */ }
                Logion legal officers are in charge of an official public office
                { /* STOP EDIT */ }
            </>)
        }}
        card3={{
            image: {
                fileName: "media/id.png",
                alt: "id"
            },
            text: (<>
                { /* START EDIT */ }
                Logion legal officers and verified issuers are identified
                { /* STOP EDIT */ }
            </>)
        }}
        card4={{
            image: {
                fileName: "media/scale.png",
                alt: "scale"
            },
            text: (<>
                { /* START EDIT */ }
                Logion legal officers are legally responsible for their actions
                { /* STOP EDIT */ }
            </>)
        }}
        cardsHeight="150px" // Fixed height of cards
    />
    <TextImageCols
        title={<>
            { /* START EDIT */ }
            Logion <em>ambition</em>
            { /* STOP EDIT */ }
        </>}
        paragraphs={<>
            { /* START EDIT */ }
            <p>Logion ambition is to be the blockchain infrastructure of safe digital ownserhip so that people
                can protect the value they create and exchange.
            </p>
            { /* STOP EDIT */ }
        </>}
        images={<>
        </>}
        theme="bright"
    />
    <TextImageCols
        title={<>
            { /* START EDIT */ }
            In the web3 foundation we trust
            { /* STOP EDIT */ }
        </>}
        paragraphs={<>
            { /* START EDIT */ }
            <p>When it comes to bring trust within the internet of blockchains, interoperability is key.</p>
            <p>The logion open source software platform is based on the Substrate and Polkadot technology.</p>
            <p>As the Web3 Foundation, Logion believes in:<br/>"a decentralized and fair internet where users control their own data, identity and destiny."</p>
            { /* STOP EDIT */ }
        </>}
        images={<>
            <Image
                fileName="media/polkadot.svg"
                alt="polkadot logo"
                width="80%"
            />
            <Image
                fileName="media/web3f.svg"
                alt="web3 foundation logo"
                width="80%"
            />
        </>}    
        theme="dark"
    />
</>);

// Footer
export const FOOTER_SUMMARY: ReactNode = <>
    { /* START EDIT */ }
    <strong>Logion</strong>: the blockchain infrastructure<br/> of safe digital ownership.
    { /* STOP EDIT */ }
</>;
export const FOOTER_LEGAL: ReactNode = <>
    { /* START EDIT */ }
    <p>BE / BCE 0684.722.109</p>
    <p>LU / Aut. Ets. n° 10083691/1</p>
    <p><a href="mailto:info@logion.network">info@logion.network</a></p>
    { /* STOP EDIT */ }
</>;
export const FOOTER_CREDIT: ReactNode = <>
    { /* START EDIT */ }
    <strong>Credit:</strong> web design based on a SlidesCarnival template
    under <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons License Attribution 4.0 International</a>.
    { /* STOP EDIT */ }
</>;
