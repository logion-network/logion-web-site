import { ReactNode } from "react";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import { OneByTwoTextImage } from "./components/OneByTwoTextImage";
import SimpleSection from "./components/SimpleSection";
import TitleFourByFourCards from "./components/TitleFourByFourCards";
import Image from "./components/Image";
import Team from "./components/Team";
import Member from "./components/Member";
import LegalOfficer from "./components/LegalOfficer";
import Contact from "./components/Contact";
import { MenuItem } from "./components/Menu";
import ExternalLink from "./components/ExternalLink";

// Global
export const CONTACT_EMAIL: string = "info@logion.network";
export const LINKEDIN_URL: string | undefined = "https://www.linkedin.com/company/logion-network/";
export const TWITTER_URL: string | undefined = "https://twitter.com/logion_network";
export const DISCORD_URL: string | undefined = "https://discord.gg/FvnxrtCYr6";
export const GITHUB_URL: string | undefined = "https://github.com/logion-network";
export const MEDIUM_URL: string | undefined = "https://medium.com/@logion";
export const TELEGRAM_URL: string | undefined = "https://t.me/+fhr5xT9vT-U3NGU0";
export const GA_ID: string = "G-VKKGLQM6GR";

// Menu
export const MENU: MenuItem[] = [
    {
        text: "Whitepaper",
        link: "https://docs.logion.network/logion-white-paper/",
        external: true,
    },
    {
        text: "Documentation (SDK)",
        link: "https://logion-network.github.io/logion-api/",
        external: true,
    }
];

// Content
export const CONTENT: ReactNode = (<>
    <Banner
        firstText={<>
            { /* START EDIT */ }
           <p>Bring trust into digital transactions<br/><em>Redefining trust by protecting digital processes</em></p>
            { /* STOP EDIT */ }
        </>}
        secondText={<>
            { /* START EDIT */ }
            <p>Bringing trust into transactions.<br/>
                Provide Zero-Knowledge Proof certificates.<br/>
                Protect content, rights, identities.<br/>
</p>
            { /* STOP EDIT */ }
        </>}
        thirdText={<>
            { /* START EDIT */ }
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
    <Banner2
        image={<>
            <Image
                fileName="media/logionSeal.png"
                alt="logion seal"
                width="50%"
            />
        </>}
        firstText={<>
            { /* START EDIT */ }
            <p>The <em>Proof of Law</em></p>
            { /* STOP EDIT */ }
        </>}
        secondText={<>
            { /* START EDIT */ }
            <p>Logion redefines the connection between digital actions and their legal implications by ensuring every blockchain-based transaction is backed by robust legal certification.</p>
            <p>This approach not only verifies but also binds identities, companies, and the full spectrum of digital interactions with unmatched legal integrity, privacy and transparency, ensuring every digital exchange is tangible and trustworthy.</p>
            { /* STOP EDIT */ }
        </>}
        thirdText={<>
            { /* START EDIT */ }
            <p>Experience a new era of digital assets, where every transaction is protected, and every piece of data is secured under the vigilant eye of Logion's Proof of Law.</p>
            { /* STOP EDIT */ }
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
            title: "A blockchain by legal officers",
            text: (<>
                { /* START EDIT */ }
                Logion is operated by a decentralized network of international & independent Legal Officers,
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
                system exclusively operated by Legal Officers. This allows <strong>token-gated and traceable deliveries</strong> of digital assets,
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
                Provides proof of records without revealing the content of such records. Anyone, through the <strong>Logion certificate</strong>, can <strong>verify</strong> the existence of credentials (obligations, values, rights, identity, etc.) bound to Real World assets (digital, physical or financial) and the token while<strong> preserving privacy and confidentiality</strong>.
                { /* STOP EDIT */ }
            </>)
        }}
        cardsHeight="375px" // Fixed height of cards
    />
    <OneByTwoTextImage
        title={<>
            { /* START EDIT */ }
            A unique <em>decentralized</em> network combining technology, law and <em>human</em> empowerment
            { /* STOP EDIT */ }
        </>}
        paragraphs={<>
            { /* START EDIT */ }
            <p>Logion is revolutionizing the digital space through a decentralized international network of Legal Officers.
                This network begins with the authentication of identities and the validation of corporate legitimacy, ensuring a <em>legally sound chain of
                custody for all digital records</em>. By applying meticulous due diligence, Legal Officers hold Verified Issuers accountable, enhancing
                the <em>integrity of the digital ecosystem</em>.</p>
            <p>Logion's advanced blockchain infrastructure not only secures digital exchanges but also protects associated data and assets, employing Zero Knowledge Proof technology to ensure <em>privacy and confidentiality</em>. This innovative approach fosters a <em>secure, private digital future</em>, ready for the expansive possibilities of digital transactions.</p>
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
        title={<>
            { /* START EDIT */ }
            Covering <em>all sectors</em>: Economy, Finance, Regulation
            { /* STOP EDIT */ }
        </>}
        paragraphs={<>
            { /* START EDIT */ }
            <p>The convergence of technologies (blockchain, artificial intelligence, internet of things, digital twins) is revolutionizing all value chains in all sectors towards the development of the Data Economy : supply chains (industry, art, health, etc), decentralized finance, digital money.</p>
            <p>Logion innovates by offering, at the transaction level, ad hoc legal protection for the economic and legal framework of all private and public players operating in the new digital transactional environment.</p>
            { /* STOP EDIT */ }
        </>}
    />
    <SimpleSection
        title={<>
            { /* START EDIT */ }
            Sound <em>balance</em> between Human and technology
            { /* STOP EDIT */ }
        </>}
        paragraphs={<>
            { /* START EDIT */ }
            <p>In Logion's secure legal and economic framework, independent Legal Officers manage blockchain nodes, verifying the <em>source and integrity</em> of content. Concurrently, Verified Issuers provide <em>substantial</em> information. This essential collaboration, backed by a highly scalable software platform, positions Logion to <em>massively streamline</em> its protective services, thereby guaranteeing safety and value for <em>billions of transactions</em>.
            </p>
            { /* STOP EDIT */ }
        </>}
    />
   { /*    <OneByFourCards
          card1={{
            image: {
                fileName: "media/compass.png",
                alt: "compass"
            },
            text: (<>
                Logion legal officers are working under the rules of a strict code of ethics
            </>)
        }} 
         card2={{
            image: {
                fileName: "media/shield.png",
                alt: "shield"
            },
            text: (<>
                Logion legal officers are in charge of an official public office
              </>)
        }} 
         card3={{
            image: {
                fileName: "media/id.png",
                alt: "id"
            },
            text: (<>
               Logion legal officers and verified issuers are identified
               </>)
         }} 
        card4={{
            image: {
                fileName: "media/scale.png",
                alt: "scale"
            },
            text: (<>
               Logion legal officers are legally responsible for their actions
               </>)
        }}
        cardsHeight="150px" // Fixed height of cards
    /> */ }
     <Banner
        firstText={<>
            { /* START EDIT */ }
            <p>The Logion Certificate:<br/> Proof of Law <em>materialization</em></p>
            { /* STOP EDIT */ }
        </>}
        secondText={<>
            { /* START EDIT */ }
            <p>The online logion zero knowledge proof certificate with restricted delivery of digital assets and files.</p>
            { /* STOP EDIT */ }
        </>}
        thirdText={<>
            { /* START EDIT */ }
            <ul>
                <li><em>Unified & persistent access to your documentation</em>: all important document and data in one place</li>
                <li><em>Token-gated</em>: restricted delivery of assets and documents to token owner after authentication (eg: metamask, ledger)</li>
                <li><em>Zero-knowledge</em>: on-chain proof of existence without revealing content</li>
                <li><em>Clear</em> Intellectual Property rights (IP-related NFT context)</li>
                <li><em>Immutably bound</em> to the minted token (token-side, multi-chain support)</li>
                <li><em>Tools to verify</em> assets and documents authenticity</li>
            </ul>
            { /* STOP EDIT */ }
        </>}
        image={<>
            <Image
                fileName="media/certificate.png"
                alt="Logion certificate"
                width="80%"
            />
        </>}
    />
    <OneByTwoTextImage
        title={<>
            { /* START EDIT */ }
            In the web3 we trust
            { /* STOP EDIT */ }
        </>}
        paragraphs={<>
            { /* START EDIT */ }
            <p>When it comes to bring trust within the internet of blockchains, interoperability is key.</p>
            <p>The Logion open source software platform is based on the Substrate and Polkadot technology.</p>
            <p>Logion believes in:<br/>"a decentralized and fair internet where users control their own data, identity and destiny."</p>
            { /* STOP EDIT */ }
        </>}
        images={<>
            <Image
                fileName="media/polkadot.svg"
                alt="polkadot logo"
                width="60%"
            />
        </>}    
        theme="dark"
    />
    <Team
        title="Who's building Logion?"
        members={[
            <Member
                image="media/david.png"
                name="David Schmitz"
                title={<>Vision<br/>Founder</> }
                description={<>
                    { /* START EDIT */ }
                    Community Lead <br/>
                    Chief Evangelist<br/>
                    Polkadot Head Ambassador
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/davschmitz/"
            />,
            <Member
                image="media/stephanie.png"
                name="Stephanie Flacher"
                title={<> Compliance, ethics & risks<br/>Co-founder</> }
                description={<>
                    { /* START EDIT */ }
                    Experienced banker (ex-BNPP),<br/>
                    Risks management,<br/>
                    Internal control
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/sflacher/"
            />,
            <Member
                image="media/gerard.png"
                name="Gérard Dethier"
                title={<>CTO<br/>Co-founder</> }
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
                title={<>Senior software architect<br/>Co-founder</> }
                description={<>
                    { /* START EDIT */ }
                    Experienced developer (ex-Eurocontrol)<br/>
                    Mission critical projects
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/benoitdevos/"
            />,
            <Member
                image="media/casey.png"
                name="Casey Joly"
                title={<>Regulated professions lead<br/>Co-founder</> }
                description={<>
                    { /* START EDIT */ }
                    Lawyer at the Paris Bar, Intellectual Property expert, more than 20 years of international experience both as trademark counsel and as an IP litigator.
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/casey-joly/"
            />,
            <Member
                image="media/patrick.png"
                name="Patrick Gielen"
                title={<>Logion legal officers lead<br/>Co-founder</> }
                description={<>
                    { /* START EDIT */ }
                    Belgian Legal Officer,
                    Head of the Legal Officers nomination board,
                    Secretary of the International Union of Legal Officers
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/patrick-gielen-4a4a6468/"
            />,
            <Member
                image="media/shayldon.jpeg"
                border={ true }
                name="Shayldon Brown"
                title={<>Growth<br/>Funding</> }
                description={<>
                    { /* START EDIT */ }
                    Investment, crypto, regulatory 
                    and entrepreneurial experience
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/shayldon-brown/"
            />,
        ]}
    />
    <Team
        title="Advisors | Logion Scientific & Ethical Council"
        members={[
            <Member
                image="media/raphael.png"
                name="Raphaël Rosello"
                title="Advisor"
                description={<>
                    { /* START EDIT */ }
                    Senior investment banker<br/>
                    All-Invest Managing Partner
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/rapha%C3%ABl-rossello/"
            />,
            <Member
                image="media/elie.png"
                name="Elie Auvray"
                title="Advisor"
                description={<>
                    { /* START EDIT */ }
                    Associate strategic advisor<br/>
                    Web3, blockchain and open-source<br/>
                    Founder Jahia, cofounder Logion
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/elieauvray/"
            />,
            <Member
                image="media/sabine.png"
                name="Sabine Van Haecke-Lepic"
                title={ <>Chairman Logion's Scientific Council</> }
                description={<>
                    { /* START EDIT */ }
                    Phd, Lawyer, Lecturer, Researcher<br/>Mediator, arbitrator.<br/>AI, Blockchain,Cybersec & IT Law.
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/sabine-van-haecke-lepic-ph-d-37b735140/"
            />,
            <Member
                image="media/arnaud.png"
                name="Arnaud Billon"
                title={ <>Logion's Scientific Council</> }
                description={<>
                    { /* START EDIT */ }
                    Phd in IP/IT Law. Author.<br/>AI Ethics Researcher @ IBM<br/>Responsible Computing Advisor.
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/abillion/"
            />,
            <Member
                image="media/max_rebol.jpeg"
                name="Max Rebol"
                title="Advisor"
                description={<>
                    { /* START EDIT */ }
                    <ExternalLink href="https://www.harbourindustrial.com/">Harbour Industrial</ExternalLink>
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/maxrebol/"
                border={true}
            />,
            <Member
                image="media/mario_altenburger.jpeg"
                name="Mario Altenburger"
                title="Advisor"
                description={<>
                    { /* START EDIT */ }
                    <ExternalLink href="https://www.harbourindustrial.com/">Harbour Industrial</ExternalLink>
                    { /* STOP EDIT */ }
                </>}
                linkedIn="https://www.linkedin.com/in/marioaltenburger/"
                border={true}
            />,
        ]}
    />
    <Team
        title={ <>First European legal officers<br/>in the Logion network</> }
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
    <OneByTwoTextImage
        title={<>
            { /* START EDIT */ }
            <strong>We are proud to be supported by:</strong>
            { /* STOP EDIT */ }
        </>}
        paragraphs={<>
            { /* START EDIT */ }
            <ul>
                <li>Since its inception, <strong>Wallonie Entreprendre</strong>, a public sovereign fund (Belgium) has been supporting the developpment of the project</li>
                <li>Since June 2022, Logion has been selected by <strong>Outlier Ventures</strong>, the leading web3 and metaverse accelerator and investor</li>
                <li><strong>Primal Capital</strong>, A global Web3 fund backing culture shifting ideas and innovations</li>
            </ul>
            { /* STOP EDIT */ }
        </>}
        images={<>
            <Image
                fileName="media/investors.png"
                alt="investors"
                width="80%"
            />
        </>}    
        theme="dark"
    />
    <Contact
        title={<>
            { /* START EDIT */ }
            Ready to elevate your digital transactions with <em>unparalleled security and trust</em>?
            { /* STOP EDIT */ }
        </>}
        content={<>
            { /* START EDIT */ }
            <p>
                If you would like to get more information about the project,
                follow our Twitter and Linkedin page as well as join
                our Discord server or explore our GitHub repository (all what we do is OPEN SOURCE).
            </p>
            { /* STOP EDIT */ }
        </>}
    />
</>);

// Footer
export const FOOTER_SUMMARY: ReactNode = <>
    { /* START EDIT */ }
    The blockchain Infrastructure<br/> of Secure digital transactions
    { /* STOP EDIT */ }
</>;
export const FOOTER_LEGAL: ReactNode = <>
    { /* START EDIT */ }
    <p>LOGION AISBL<br/>
    (International Non-Profit Association)</p>
    <p>Rue d'Abhooz 31, 4040 Herstal, Belgium</p>
    <p>BCE: 0779.497.245</p>
    <p><a href={`mailto:${ CONTACT_EMAIL }`}>{ CONTACT_EMAIL }</a></p>
    { /* STOP EDIT */ }
</>;
