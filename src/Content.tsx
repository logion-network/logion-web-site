import { ReactNode } from "react";
import Banner from "./components/Banner";
import { OneByTwoTextImage } from "./components/OneByTwoTextImage";
import SimpleSection from "./components/SimpleSection";
import TitleFourByFourCards from "./components/TitleFourByFourCards";
import Image from "./components/Image";
import OneByFourCards from "./components/OneByFourCards";
import Team from "./components/Team";
import Member from "./components/Member";
import LegalOfficer from "./components/LegalOfficer";
import Contact from "./components/Contact";
import { MenuItem } from "./components/Menu";

// Global
export const CONTACT_EMAIL: string = "info@logion.network";
export const LINKEDIN_URL: string | undefined = "https://www.linkedin.com/company/logion-network/";
export const TWITTER_URL: string | undefined = "https://twitter.com/logion_network";
export const DISCORD_URL: string | undefined = "https://discord.gg/FvnxrtCYr6";
export const GITHUB_URL: string | undefined = "https://github.com/logion-network";
export const MEDIUM_URL: string | undefined = "https://medium.com/@logion";

// Menu
export const MENU: MenuItem[] = [
    {
        text: "Whitepaper",
        link: "https://docs.logion.network/logion-white-paper/",
        external: true,
    },
    {
        text: "Documentation",
        link: "https://logion-network.github.io/logion-api/",
        external: true,
    }
];

// Content
export const CONTENT: ReactNode = (<>
    <Banner
        firstText={<>
            { /* START EDIT */ }
           Empowering Tokens <br/>on Any Blockchain as <br/><em>Legal-Grade Digital Assets</em>
            { /* STOP EDIT */ }
        </>}
        secondText={<>
            { /* START EDIT */ }
            Harness the full potential of tokenization with Logion, the groundbreaking blockchain infrastructure that protects the inherent token value.
            { /* STOP EDIT */ }
        </>}
        thirdText={<>
            { /* START EDIT */ }
            Say goodbye to the disconnection between on-chain tokens and their associated rights and assets: logion seamlessly verifies and <em>bind</em>, identities, companies, assets, rights, and obligations, transforming tokens into tangible and trustworthy digital assets. Embrace a scalable, comprehensive, transparent, and legally robust framework that empowers tokenization initiatives and guarantees the <em>authentic</em> representation of token <em>value</em>.
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
            The <em>Proof of Law</em> foundations
            { /* STOP EDIT */ }
        </>}
        card1={{
            image: {
                fileName: "media/blockchain.png",
                alt: "blockchain",
                height: "129px",
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
                alt: "blockchain",
                height: "129px",
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
                alt: "blockchain",
                height: "129px",
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
                alt: "blockchain",
                height: "129px",
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
    <OneByTwoTextImage
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
    <OneByTwoTextImage
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
    <OneByTwoTextImage
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
                width="60%"
            />
            <Image
                fileName="media/web3f.svg"
                alt="web3 foundation logo"
                width="60%"
            />
        </>}    
        theme="dark"
    />
    <Team
        title="Who's building logion?"
        members={[
            <Member
                image="media/david.png"
                name="David Schmitz"
                title="President / Founder"
                description={<>
                    { /* START EDIT */ }
                    Vision<br/>
                    Community Leader (Tech and Legal)<br/>
                    Logion Chief Evangelist<br/>
                    Polkadot Head Ambassador
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/davschmitz/"
            />,
            <Member
                image="media/elie.png"
                name="Elie Auvray"
                title="Co-President / Co-Founder"
                description={<>
                    { /* START EDIT */ }
                    Managing Director<br/>
                    Strategy, Execution<br/>
                    Product Officer<br/>
                    Open source & privacy lead
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/elieauvray/"
            />,
            <Member
                image="media/stephanie.png"
                name="Stephanie Flacher"
                title={ <>Compliance, ethics & risks<br/>co-founder</> }
                description={<>
                    { /* START EDIT */ }
                    Internal Control Framework<br/>
                    Decentralized Ecosystem development
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/sflacher/"
            />,
            <Member
                image="media/gerard.png"
                name="Gérard Dethier"
                title={ <>Backend software architect<br/>co-founder</> }
                description={<>
                    { /* START EDIT */ }
                    Distributed & critical systems expert<br/>
                    Scrum Master
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/gerarddethier/"
            />,
            <Member
                image="media/benoit.png"
                name="Benoît Devos"
                title={ <>Frontend software architect<br/>co-founder</> }
                description={<>
                    { /* START EDIT */ }
                    Senior software developer<br/>
                    Mission critical projects
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/benoitdevos/"
            />,
            <Member
                image="media/casey.png"
                name="Casey Joly"
                title={ <>Regulated professions lead<br/>co-founder</> }
                description={<>
                    { /* START EDIT */ }
                    Lawyer at the Paris Bar, Intellectual Property expert, more than 20 years of
                    international experience both as trademark counsel (contract drafting, due diligence)
                    and as an IP litigator
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/casey-joly/"
            />,
            <Member
                image="media/patrick.png"
                name="Patrick Gielen"
                title={ <>Logion legal officers lead<br/>co-founder</> }
                description={<>
                    { /* START EDIT */ }
                    Belgian Legal Officer,
                    Head of the Legal Officers nomination board,
                    Secretary of the International Union of Judicial Officers
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/patrick-gielen-4a4a6468/"
            />,
        ]}
    />
    <Team
        title={ <>First European legal officers<br/>in the logion network</> }
        members={[
            <LegalOfficer
                image="media/MarcSchmitz.png"
                name="Marc Schmitz"
                location="Belgium"
                linkedIn="https://www.linkedin.com/in/marc-schmitz-91927451/"
            />,
            <LegalOfficer
                image="media/ElineDuysens.png"
                name="Eline Duysens"
                location="Belgium"
                linkedIn="https://www.linkedin.com/in/eline-duysens-lepape-10385896/"
            />,
            <LegalOfficer
                image="media/AlainBarland.png"
                name="Alain Barland"
                location="France"
                linkedIn="https://www.linkedin.com/in/alainbarland/"
            />,
            <LegalOfficer
                image="media/SylvianDorol.png"
                name="Sylvian Dorol"
                location="France"
                linkedIn="https://www.linkedin.com/in/sylvian-dorol-b61a37103/"
            />,
            <LegalOfficer
                image="media/RomainGirondel.png"
                name="Romain Girondel"
                location="France"
                linkedIn="https://www.linkedin.com/in/cjlex/"
            />,
            <LegalOfficer
                image="media/GuillaumeGrain.png"
                name="Guillaume Grain"
                location="France"
                linkedIn="https://www.linkedin.com/in/guillaumegrain/"
            />,
            <LegalOfficer
                image="media/ThibautBarnier.png"
                name="Thibaut Barnier"
                location="France"
                linkedIn="https://www.linkedin.com/in/thibaut-barnier-428b2330/"
            />,
            <LegalOfficer
                image="media/SebastienRacine.png"
                name="Sébastien Racine"
                location="France"
                linkedIn="https://www.linkedin.com/in/s%C3%A9bastien-racine-4b962614a/"
            />,
            <LegalOfficer
                image="media/CarlosCalvo.png"
                name="Carlos Calvo"
                location="Luxembourg"
                linkedIn="https://www.linkedin.com/in/huissierdejustice/"
            />,
            <LegalOfficer
                image="media/IliasTsipos.png"
                name="Ilias Tsipos"
                location="Greece"
                linkedIn="https://www.linkedin.com/in/ilias-tsipos-a08745153/"
            />,
            <LegalOfficer
                image="media/RuiMiguelSimao.png"
                name="Rui Miguel Simão"
                location="Portugal"
                linkedIn="https://www.linkedin.com/in/rui-sim%C3%A3o-3b02a926/"
            />,
            <LegalOfficer
                image="media/PedrosoLeal.png"
                name="Pedroso Leal"
                location="Portugal"
                linkedIn="https://www.linkedin.com/in/pedrosoleal/"
            />,
        ]}
    />
    <Contact
        title={<>
            { /* START EDIT */ }
            Want to join the safe <em>digital ownership movement</em>?
            { /* STOP EDIT */ }
        </>}
        content={<>
            { /* START EDIT */ }
            <p>
                You can <a href={`mailto:${ CONTACT_EMAIL }`}>contact us by e-mail</a> if you would like to get more information about the project,
                participate and/or follow our Twitter and Linkedin page as well as join
                our Discord server or explore our GitHub repository (all what we do is OPEN SOURCE).
            </p>
            { /* STOP EDIT */ }
        </>}
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
    <p><a href={`mailto:${ CONTACT_EMAIL }`}>{ CONTACT_EMAIL }</a></p>
    { /* STOP EDIT */ }
</>;
